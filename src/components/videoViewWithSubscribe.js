import React, { useEffect, useState } from 'react';
import AlbumHeader from './AlbumHeader';
import {calculateAlbumContainerSize, getIframeSrcForYouTube, titleCaps, applyAlbumFilter } from '../utils';
import data from '../pageData/videos.json';


const VideoView = () => {
    const [videos, setVideos] = useState([]);
    const [isSmallView, setIsSmallView] = useState(window.innerWidth <= 600);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedAlbum, setSelectedAlbum] = useState('new');
    const [albumContent, setAlbumContent] = useState([]);

    useEffect(() => {
        console.log("VideoView: Data loading effect triggered"); // Log 1: Confirm effect runs
        setLoading(true);
        try {
            console.log("VideoView: Starting data processing from videos.json"); // Log 2: Before accessing data

            // Check if 'data' or 'data.data' is undefined or null
            if (!data || !data.data) {
                throw new Error("videos.json data is missing or malformed"); // Throw a specific error if data is bad
            }

            const processedVideos = data.data; // Assuming data is imported JSON
            console.log("VideoView: Data from videos.json:", processedVideos); // Log 3: Show the data

            setVideos(processedVideos);
            console.log("VideoView: videos state set successfully"); // Log 4: After setting videos

            console.log("VideoView: Applying album filter with album:", 'new'); // Log 5: Before filter
            const albumFilteredContent = applyAlbumFilter(processedVideos, 'new');
            console.log("VideoView: applyAlbumFilter result:", albumFilteredContent); // Log 6: After filter

            setAlbumContent(albumFilteredContent);
            console.log("VideoView: albumContent state set successfully"); // Log 7: After setting album content

            setError(null); // Clear any previous errors on success
            console.log("VideoView: Data processing completed successfully"); // Log 8: Success

        } catch (e) {
            console.error("VideoView: !!! Error caught during data processing !!!"); // Log 9: Error marker
            console.error("VideoView: Caught error object:", e); // Log 10: Log the full error object
            console.error("VideoView: Caught error message:", e.message); // Log 11: Log the error message property

            // Check if e is a string or has a message property, set error state accordingly
            if (typeof e === 'string') {
                setError({ message: e });
            } else if (e instanceof Error) {
                setError(e); // Set the error object directly if it's a standard Error instance
            } else if (e && typeof e.message === 'string') {
                setError({ message: e.message }); // Set error with message if available
            } else {
                setError({ message: "An unknown error occurred during data loading." }); // Generic fallback
            }


            setVideos([]); // Clear videos on error
            setAlbumContent([]); // Clear album content on error

        } finally {
            console.log("VideoView: Data loading effect finished"); // Log 12: Effect finished
            setLoading(false); // Set loading to false in finally
        }
    }, []);


    // Effect to load the YouTube Platform script (runs once on mount)
    useEffect(() => {
        console.log("VideoView: YouTube script loading effect triggered");
        // Create a script element
        const script = document.createElement('script');

        // Set the source URL
        script.src = "https://apis.google.com/js/platform.js";

        // Set it to be async for non-blocking loading
        script.async = true;

        // (Optional) Add an onload handler if you need to do something after the script is ready
        script.onload = () => {
            console.log("Google Platform script loaded!");
            // The gapi.ytsubscribe library should automatically scan for elements
            // with class="g-ytsubscribe" after loading.
            // If it doesn't, you might need to manually trigger a render here,
            // but let's try the automatic way first.
            // Example manual render (might not be necessary):
            // if (typeof gapi !== 'undefined' && typeof gapi.ytsubscribe !== 'undefined') {
            //   gapi.ytsubscribe.render(document.querySelector('.g-ytsubscribe'));
            // }
        };

        // Append the script to the document head
        document.head.appendChild(script);

        // Cleanup function: Remove the script when the component unmounts
        return () => {
            console.log("VideoView: Cleaning up YouTube script");
            document.head.removeChild(script);
        };
    }, []); // Empty dependency array - runs only on mount and cleanup on unmount


    // Effect to handle window resize (runs on mount and resize)
    // You had two identical resize effects, combined into one here
    useEffect(() => {
        console.log("VideoView: Resize effect triggered");
        const handleResize = () => {
            setIsSmallView(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            console.log("VideoView: Cleaning up resize listener");
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array - runs only on mount and cleanup on unmount


    const handleAlbumSelect = (album) => {
        console.log(`album clicked ${album}`);
        setSelectedAlbum(album);
        setAlbumContent(applyAlbumFilter(videos, album));
    };

    if (loading) {
        return <div>Loading videos...</div>;
    }

    if (error) {
        return <div>Error loading videos: {error.message}</div>;
    }

    return (
        <div className="video-view">
            <div className="row text-center">
                <div className="col-xs-12">
                    <h4 className="text-white">Video Albums</h4>
                    <AlbumHeader
                        albumType="videos"
                        unfilteredList={videos}
                        onAlbumSelect={handleAlbumSelect}
                        currentAlbum={selectedAlbum}
                    />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-xs-12 text-center">

                    {/* Keep the div element here. The script will find it. */}
                    {/* REMOVED THE <script> TAG FROM HERE */}
                    <div className="g-ytsubscribe" data-channel="UC7meaKCW2UsPMQOSeHV5lKQ" data-layout="default"
                         data-count="default"></div>
                </div>
            </div>
            <div className="row text-center">
                {/* Add logs inside the map function */}
                {albumContent.map((video, index) => {
                    console.log(`VideoView: Mapping video item at index ${index}:`, video); // Log 15: Log each video object

                    // Optional: Add a check here to skip if video or video.youtubeID is missing
                    if (!video || !video.youtubeID) {
                        console.error(`VideoView: Skipping rendering for item at index ${index} due to missing data.`);
                        return null; // Don't render this item if essential data is missing
                    }

                    // Generate iframe src - Assuming getIframeSrcForYouTube is robust
                    const iframeSrc = getIframeSrcForYouTube(video.youtubeID);

                    // Note: Your <a> tag's href currently also uses getIframeSrcForYouTube.
                    // This will make clicking the title/icon link open the *embed* URL in a new tab,
                    // not the standard YouTube *watch* page. If you want to link to the watch page,
                    // you should construct that URL instead (e.g., `https://www.youtube.com/watch?v=${video.youtubeID}`).
                    // This might not cause a rendering error, but it's worth noting for correctness.
                    const watchUrl = `https://www.youtube.com/watch?v=${video.youtubeID}`; // Example watch URL

                    return (
                        <div key={`v-${index}`} className="col-xs-12 mb-5">
                            <div className="col-xs-12">
                                <a
                                    className="text-white"
                                    href={watchUrl} // Changed href to watchUrl
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* Ensure video.title exists or handle potential undefined */}
                                    {titleCaps(video.title || 'Untitled Video')}
                                    <i className="fa fa-external-link"></i>
                                </a>
                                <div className="col-xs-12">
                                    <iframe
                                        key={`iframe-${index}`} // Added unique key for iframe
                                        className="video-box"
                                        height={isSmallView ? '300' : '500'}
                                        width={isSmallView ? '300' : '500'}
                                        src={iframeSrc} // Use the iframe source (embed URL)
                                        title={video.title || 'Untitled Video'} // Ensure title exists
                                        allowFullScreen
                                        // Consider adding recommended allow attributes for better compatibility
                                        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        // frameBorder="0" // Explicitly setting frameBorder="0" is good practice
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default VideoView;