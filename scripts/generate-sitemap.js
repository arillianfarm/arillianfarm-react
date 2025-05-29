const fs = require('fs');
const path = require('path');

// --- Provided Functions (Adapted for Node.js environment) ---
// This function sanitizes a string to be used as a slug
const getSlug = (unsanitizedField = "") => {
    const sanitizedRecipeName = unsanitizedField
        .toLowerCase()             // Convert to lowercase
        .split(' ')                 // Split into words by spaces
        .join('-')                  // Join words with hyphens
        .replace(/[^a-z0-9-]/g, ''); // Remove any character that is NOT a lowercase letter (a-z), a digit (0-9), or a hyphen (-)
    return sanitizedRecipeName;
};

// This function constructs the full URL for an article/project/recipe
// Adapted to take baseURL as an argument instead of relying on window.location.origin
const setLinkWithQueryString = (baseURL, viewName, articleName) => {
    const sanitizedArticleName = getSlug(articleName);
    const itemPath = `/${viewName}/?articleId=${sanitizedArticleName}`;
    const fullLink = baseURL + itemPath;
    return fullLink;
};
// --- End Provided Functions ---

// --- Configuration ---
const BASE_URL = "https://arillianfarm.com"; // Your site's base URL
const SITEMAP_FILE_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml'); // Output sitemap.xml in public dir

// Paths to your data JSON files, relative to the project root
const dataFiles = {
    projects: path.join(__dirname, '..', 'src', 'pageData', 'projects.json'),
    blog: path.join(__dirname, '..', 'src', 'pageData', 'blog.json'),
    recipes: path.join(__dirname, '..', 'src', 'pageData', 'recipes.json')
};

// Initial static URLs for your sitemap
const staticUrls = [
    `${BASE_URL}/`,
    `${BASE_URL}/videos`,
    `${BASE_URL}/recipes`,
    `${BASE_URL}/projects`,
    `${BASE_URL}/blog`,
    `${BASE_URL}/about`,
    `${BASE_URL}/books`,
    `${BASE_URL}/pictures`,
    `${BASE_URL}/privacy-policy`,
    `${BASE_URL}/terms-of-service`
];
// --- End Configuration ---

// Main function to generate the sitemap
async function generateSitemap() {
    let urls = [...staticUrls]; // Start with all static URLs

    // Process each data file (projects, blog, recipes)
    for (const viewName in dataFiles) {
        if (dataFiles.hasOwnProperty(viewName)) {
            const filePath = dataFiles[viewName];
            try {
                // Read and parse the JSON file
                const fileContent = fs.readFileSync(filePath, 'utf8');
                const data = JSON.parse(fileContent);
                // Ensure the data is an array before processing
                if (Array.isArray(data.data)) {
                    data.data.forEach(item => {
                        // Check if the item has a 'name' property
                        if (item.name) {
                            urls.push(setLinkWithQueryString(BASE_URL, viewName, item.name));
                        } else if (item.entry_subject){
                            urls.push(setLinkWithQueryString(BASE_URL, viewName, item.entry_subject));
                        }else {
                            console.warn(`Skipping item in ${filePath}: Missing 'name' and 'entry_subject' property.`);
                        }
                    });
                } else {
                    console.warn(`Skipping ${filePath}: Expected an array of objects, but found a different structure.`);
                }
            } catch (error) {
                console.error(`Error reading or parsing ${filePath}:`, error.message);
            }
        }
    }

    // Build the XML content for the sitemap
    let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xmlContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    urls.forEach(url => {
        xmlContent += `    <url>\n`;
        xmlContent += `        <loc>${url}</loc>\n`;
        xmlContent += `    </url>\n`;
    });

    xmlContent += `</urlset>\n`;

    // Write the complete sitemap XML to the sitemap.xml file
    try {
        fs.writeFileSync(SITEMAP_FILE_PATH, xmlContent, 'utf8');
        console.log(`Sitemap generated successfully at ${SITEMAP_FILE_PATH}`);
    } catch (error) {
        console.error(`Error writing sitemap to file:`, error.message);
    }
}

// Execute the sitemap generation
generateSitemap();