import React, { useState, useEffect, useMemo } from 'react';
import { db, firebaseInitialized } from '../firebase/firebase';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { getAuth, signInAnonymously } from "firebase/auth";

// Import your comprehensive tasks JSON data
import FARM_TASKS_DATA from '../pageData/farm-sitting.json';

const FarmSitting = () => {
    const daysOfWeek = ['thursday', 'friday', 'saturday', 'sunday'];

    // Memoize the full set of all unique task definitions (name, link, notes)
    // This will be used as a base for each day's task list in state and Firestore.
    const allUniqueTaskDefinitions = useMemo(() => {
        const tasks = {};
        for (const categoryKey in FARM_TASKS_DATA) {
            for (const timeSlotKey in FARM_TASKS_DATA[categoryKey]) {
                for (const taskSlug in FARM_TASKS_DATA[categoryKey][timeSlotKey]) {
                    const taskDetails = FARM_TASKS_DATA[categoryKey][timeSlotKey][taskSlug];
                    // Store the static details for each unique task slug
                    tasks[taskSlug] = {
                        name: taskDetails.name,
                        "link-to-video": taskDetails["link-to-video"] || "", // Default to empty string if not provided
                        notes: taskDetails.notes || "" // Default to empty string if not provided
                    };
                }
            }
        }
        return tasks;
    }, []); // Empty dependency array means this is calculated once

    // Function to create an initial state for a single day (all tasks done: false)
    const createInitialDayTasks = () => {
        const dayTasks = {};
        for (const taskSlug in allUniqueTaskDefinitions) {
            dayTasks[taskSlug] = {
                ...allUniqueTaskDefinitions[taskSlug], // Copy static task details
                done: false // Explicitly set done to false for initialization
            };
        }
        return dayTasks;
    };

    // Initialize dailyTasks state based on the new days and task structure
    const [dailyTasks, setDailyTasks] = useState(
        daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: createInitialDayTasks() }), {})
    );

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!firebaseInitialized || !db) {
            console.warn("Firebase or Firestore not initialized. Farm Sitting functionality will be limited.");
            setError("Farm sitting tasks are currently unavailable. Please try again later.");
            setLoading(false);
            return;
        }

        const auth = getAuth();
        signInAnonymously(auth)
            .then(() => {
                console.log('Signed in anonymously for farm sitting.');
            })
            .catch((err) => {
                console.error("Anonymous sign-in error:", err);
                if (err.code === 'auth/network-request-failed' && err.message.includes('A network error (such as timeout, interrupted connection or unreachable host) has occurred')) {
                    setError("Network error or API key issue. Please check your internet connection and API Key referrer settings in Google Cloud Console (add localhost and firebaseapp.com domains).");
                } else {
                    setError("Failed to initialize farm sitting tasks. Please try again.");
                }
                setLoading(false);
                return;
            });

        const docRef = doc(db, "farm-sitting", "tasks");
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                const fetchedData = docSnap.data();
                // Create a merged structure that combines the static task definitions
                // with the 'done' status fetched from Firestore.
                const mergedData = daysOfWeek.reduce((acc, day) => {
                    const dayTasksFromFirestore = fetchedData[day] || {}; // Get existing day data from Firestore or empty object
                    const mergedDayTasks = {};

                    for (const taskSlug in allUniqueTaskDefinitions) {
                        const initialTaskDef = allUniqueTaskDefinitions[taskSlug];
                        const firestoreTaskState = dayTasksFromFirestore[taskSlug];

                        mergedDayTasks[taskSlug] = {
                            ...initialTaskDef, // Start with name, link, notes from our config
                            // Overlay 'done' status from Firestore, default to false if not a boolean
                            done: typeof firestoreTaskState?.done === 'boolean' ? firestoreTaskState.done : false
                        };
                    }
                    return { ...acc, [day]: mergedDayTasks };
                }, {});
                setDailyTasks(mergedData);
            } else {
                // If the document doesn't exist, initialize it in Firestore with all tasks unchecked
                const initialAllTasks = daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: createInitialDayTasks() }), {});
                setDoc(docRef, initialAllTasks)
                    .then(() => setDailyTasks(initialAllTasks)) // Also update local state
                    .catch(e => console.error("Error initializing farm sitting tasks document:", e));
            }
            setLoading(false);
            setError(null); // Clear any errors once data is successfully loaded/initialized
        }, (err) => { // Error callback for onSnapshot
            console.error("Error fetching real-time farm sitting tasks:", err);
            setError("Failed to load real-time farm sitting tasks.");
            setLoading(false);
        });

        return () => unsubscribe();

    }, [firebaseInitialized, daysOfWeek, allUniqueTaskDefinitions]); // Dependencies for useEffect

    const toggleTask = async (day, taskSlug) => {
        if (!firebaseInitialized) {
            setError("Cannot update task: Firebase not initialized.");
            return;
        }
        setLoading(true);
        try {
            // Get the current state of the specific task for the given day
            const currentTaskState = dailyTasks[day]?.[taskSlug];

            if (!currentTaskState) {
                console.warn(`Task ${taskSlug} not found for day ${day}. Cannot toggle.`);
                setError(`Task "${taskSlug}" not found for "${day}".`);
                setLoading(false);
                return;
            }

            // Create an updated task object with the toggled 'done' status
            const updatedTask = {
                ...currentTaskState,
                done: !currentTaskState.done, // Toggle the 'done' property
            };

            // Create an updated object for the specific day, replacing the old task with the updated one
            const updatedTasksForDay = {
                ...dailyTasks[day],
                [taskSlug]: updatedTask,
            };

            // Create the full updated dailyTasks object to send to Firestore
            const updatedAllTasks = {
                ...dailyTasks,
                [day]: updatedTasksForDay,
            };

            // Send the entire updated structure for the 'tasks' document to Firestore
            await setDoc(doc(db, "farm-sitting", "tasks"), updatedAllTasks);
            setError(null);
        } catch (e) {
            console.error("Error updating task:", e);
            setError("Failed to update task.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="col-xs-12 comments-section border2px br20 text-white mt-5 mb-5 p-3">
            <h3 className="text-center mb-4">Farm Sitting Care Guide</h3>
            <div className="row">
                <div className="col-sm-12">
                    <h4>General Misc:</h4>
                </div>
                <div className="col-sm-12">
                    <div>
                        <h2 className="text-danger">Alert - Huey and Jams should always be separated by a locked cage
                            door and/or a locked house door at all times!!!</h2>
                        <h3>Ways to end a fight: </h3>
                        <h4>throw their water bowl at them or grab Ice water from freezer and dump it on them</h4>
                        <h4>Use each dogs collar to temporarily choke each dog, so that they will release their grip and
                            gasp for air</h4>
                        <h4>The call I use for them to come for dinner and breakfast is to yell "rinnn daa da din din
                            din Go in your cates" -- if you yell this, they may stop for a second and you may be able to
                            get huey to go into his crate</h4>
                        <h4>last case scenario, I read on the internet if you shove a finger up a dogs ass it will
                            release its grip on whatever out of surprise</h4>
                        <h3 className="text-danger">Please Note - the back door is "tricky" You have to be gentle with the handle (and may have to put it back together if it falls off). It doesn't really latch so you need to keep it locked after you close it. I usually just pull and push from the handle of the deadbolt</h3>
                    </div>
                    <h4>Huey and Xena should be kept in the guest bedroom after you leave.</h4>
                    <h4>Pajama should be kept in the master bedroom after you leave.</h4>
                    <h4>Toys are either outside on the lawn or on top of the fridge</h4>
                    <h4>Dog Bowls should Be Kept Outside on the Bricks By the Patio Bars</h4>
                    <h4>Chicken Treat Transport Tupperware should Be kept upside down on kitchen Counter</h4>
                    <h4>Cold Food for Dogs will be in Silver Pot in Fridge, Serving Ladle should be cleaned by dogs and or sink and kept in sink</h4>
                    <h4>Cold Food for Chickens will be in Covered Tin in the Fridge</h4>
                </div>
                <div className="col-sm-12">

                </div>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            {loading ? (
                <div className="text-center">Loading tasks...</div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered text-white">
                        <thead>
                        <tr>
                            <th>Task / Item</th>
                            {daysOfWeek.map((day) => (
                                <th key={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {/* Iterate over categories (Barnyard, Dogs, Plants) */}
                        {Object.keys(FARM_TASKS_DATA).map(categoryKey => (
                            <React.Fragment key={categoryKey}>
                                <tr>
                                    <td colSpan={daysOfWeek.length + 1}>
                                        <h5 className="mb-0 mt-2 text-primary">
                                            <strong>{categoryKey.toUpperCase()}</strong>
                                        </h5>
                                    </td>
                                </tr>
                                {/* Iterate over time slots within each category */}
                                {Object.keys(FARM_TASKS_DATA[categoryKey]).map(timeSlotKey => (
                                    <React.Fragment key={`${categoryKey}-${timeSlotKey}`}>
                                        <tr>
                                            <td colSpan={daysOfWeek.length + 1}>
                                                <h6 className="mb-0 mt-2 text-info">
                                                    <strong>{timeSlotKey}</strong> {/* Display the time slot */}
                                                </h6>
                                            </td>
                                        </tr>
                                        {/* Iterate over individual tasks within each time slot */}
                                        {Object.keys(FARM_TASKS_DATA[categoryKey][timeSlotKey]).map(taskSlug => {
                                            const taskDetails = FARM_TASKS_DATA[categoryKey][timeSlotKey][taskSlug];
                                            return (
                                                <tr key={taskSlug}>
                                                    <td>
                                                        {taskDetails.name}
                                                        {taskDetails["link-to-video"] && (
                                                            <>
                                                                <br/>
                                                                <a href={taskDetails["link-to-video"]} target="_blank" rel="noopener noreferrer">Video Link</a>
                                                            </>
                                                        )}
                                                        {taskDetails.notes && (
                                                            <>
                                                                <br/>
                                                                <small className="text-muted">Notes: {taskDetails.notes}</small>
                                                            </>
                                                        )}
                                                    </td>
                                                    {daysOfWeek.map(day => (
                                                        <td key={`${taskSlug}-${day}`} className="text-center">
                                                            <input
                                                                type="checkbox"
                                                                // Access the 'done' property for the specific task and day from dailyTasks state
                                                                checked={dailyTasks[day]?.[taskSlug]?.done || false}
                                                                onChange={() => toggleTask(day, taskSlug)}
                                                                disabled={!firebaseInitialized}
                                                            />
                                                        </td>
                                                    ))}
                                                </tr>
                                            );
                                        })}
                                    </React.Fragment>
                                ))}
                            </React.Fragment>
                        ))}
                        </tbody>
                    </table>
                    <p>
                        Check out more about Arillian Farm on their YouTube channel: <a href="http://www.youtube.com/channel/UC7meaKCW2UsPMQOSeHV5lKQ" target="_blank" rel="noopener noreferrer">Arillian Farm</a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default FarmSitting;