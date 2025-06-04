// functions/index.js

const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
admin.initializeApp();

// Get a reference to the Firestore database
const db = admin.firestore();

// Define the daily comment limit per article
const MAX_DAILY_COMMENTS_PER_ARTICLE = 50; // You can adjust this limit

/**
 * Helper to format date for the counter document ID (YYYY-MM-DD)
 * @param {Date} date - The Date object to format.
 * @return {string} The formatted date string.
 */
function getFormattedDate(date) {
  // FIX: Directly use date methods in the string interpolation
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`; // Removed unused 'year' and directly used getFullYear()
}

/**
 * Callable Cloud Function to post a new comment and enforce daily limits per article.
 *
 * @param {object} data - The data sent from the client.
 * @param {object} context - The context of the function call, including auth.
 * @returns {Promise<object>} A promise that resolves to an object indicating success or failure.
 */
exports.postComment = functions.https.onCall(async (data, context) => {
  // 1. Authentication Check: Ensure the user is authenticated (even anonymously)
  if (!context.auth) {
    throw new functions.https.HttpsError(
        "unauthenticated",
        "You must be signed in to post a comment.",
    );
  }

  const userUid = context.auth.uid; // The anonymous user's UID

  // 2. Input Validation (server-side, even though client-side exists)
  const {comment, commentatorName, articleId, articleType, pubDate} = data;

  // Define limits (should match client-side and security rules)
  const MIN_COMMENT_LENGTH = 3;
  const MAX_COMMENT_LENGTH = 500;
  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 50;

  if (
    !comment || comment.length < MIN_COMMENT_LENGTH || comment.length > MAX_COMMENT_LENGTH ||
        !commentatorName || commentatorName.length < MIN_NAME_LENGTH || commentatorName.length > MAX_NAME_LENGTH ||
        !articleId || typeof articleId !== "string" ||
        !articleType || typeof articleType !== "string" ||
        !pubDate || typeof pubDate !== "string"
  ) {
    throw new functions.https.HttpsError(
        "invalid-argument",
        "Invalid comment data. Please check fields and try again.",
    );
  }

  // 3. Daily Comment Limit Enforcement (using a Firestore Transaction)
  const today = new Date();
  const formattedDate = getFormattedDate(today); // e.g., "2025-06-04"

  // Construct the document ID for the daily counter for this article
  const counterDocId = `${articleId}-${formattedDate}`; // FIX: Removed unnecessary escapes
  const counterRef = db.collection("articleDailyCommentCounts").doc(counterDocId);

  try {
    await db.runTransaction(async (transaction) => {
      const counterDoc = await transaction.get(counterRef);
      let currentCount = 0; // Ensure this is declared with 'let' inside this scope

      if (counterDoc.exists) {
        currentCount = counterDoc.data().count || 0; // Get existing count
      }

      if (currentCount >= MAX_DAILY_COMMENTS_PER_ARTICLE) {
        throw new functions.https.HttpsError(
            "resource-exhausted",
            `Daily comment limit (${MAX_DAILY_COMMENTS_PER_ARTICLE}) reached for this article.`,
        );
      }

      // Increment the count and update/create the counter document
      transaction.set(
          counterRef,
          {
            articleId: articleId,
            date: formattedDate,
            count: currentCount + 1,
          },
          {merge: true}, // Use merge to update if exists, create if not
      );
    });

    // 4. Save the Comment (only if the transaction succeeded)
    const newCommentRef = await db.collection("comments").add({
      "article-type": articleType,
      "article-id": articleId,
      "comment": comment,
      "commentator-name": commentatorName,
      "comment-date": admin.firestore.FieldValue.serverTimestamp(), // Server-generated timestamp
      "comment-id": data["comment-id"], // Use the UUID generated client-side
      "user-uid": userUid,
    });

    // 5. Return success response
    return {
      success: true,
      message: "Comment posted successfully!",
      commentId: newCommentRef.id, // Return the Firestore document ID for the new comment
    };
  } catch (error) {
    // Handle errors from the transaction or other parts of the function
    if (error.code === "resource-exhausted") {
      throw error; // Re-throw the specific HttpsError for limit reached
    }
    console.error("Error posting comment in Cloud Function:", error);
    throw new functions.https.HttpsError(
        "internal",
        "Failed to post comment due to an internal server error.",
    );
  }
});
