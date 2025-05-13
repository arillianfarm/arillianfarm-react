import React, { useEffect, useState } from 'react';
import AlbumHeader from './AlbumHeader';
import {calculateAlbumContainerSize, getIframeSrcForYouTube, titleCaps, applyAlbumFilter } from '../utils';
import data from '../pageData/videos.json';
import { Helmet } from 'react-helmet-async';


const VideoView = () => {
    const [videos, setVideos] = useState([]);
    const [isSmallView, setIsSmallView] = useState(window.innerWidth <= 600); // Adjust breakpoint
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedAlbum, setSelectedAlbum] = useState('new');
    const [albumContent, setAlbumContent] = useState([]);

    // Effect to load data and set initial album content (runs once on mount)
    useEffect(() => {
        // console.log("VideoView: Data loading effect triggered"); // Removed debug log
        setLoading(true);
        try {
            // Assuming data is imported JSON and is correctly structured
            if (!data || !data.data) {
                throw new Error("Video data is missing or malformed");
            }

            const processedVideos = data.data;
            setVideos(processedVideos);
            setAlbumContent(applyAlbumFilter(processedVideos, 'new'));
            setError(null); // Clear any previous errors

        } catch (e) {
            // console.error("VideoView: Error caught during data processing:", e); // Removed debug log
            // console.error("VideoView: Caught error object:", e); // Removed debug log
            // console.error("VideoView: Caught error message:", e.message); // Removed debug log

            if (typeof e === 'string') {
                setError({ message: e });
            } else if (e instanceof Error) {
                setError(e);
            } else if (e && typeof e.message === 'string') {
                setError({ message: e.message });
            } else {
                setError({ message: "An unknown error occurred during data loading." });
            }

            setVideos([]);
            setAlbumContent([]);

        } finally {
            // console.log("VideoView: Data loading effect finished"); // Removed debug log
            setLoading(false);
        }
    }, []); // Empty dependency array - runs only on mount and unmount


    // Effect to handle window resize (runs on mount and resize)
    useEffect(() => {
        // console.log("VideoView: Resize effect triggered"); // Removed debug log
        const handleResize = () => {
            setIsSmallView(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            // console.log("VideoView: Cleaning up resize listener"); // Removed debug log
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array - runs only on mount and cleanup on unmount


    const handleAlbumSelect = (album) => {
        // console.log(`album clicked ${album}`); // Removed debug log
        setSelectedAlbum(album);
        setAlbumContent(applyAlbumFilter(videos, album));
    };

    if (loading) {
        return <div className="container text-center text-white br20">Loading videos...</div>;
    }

    if (error) {
        // console.log("VideoView: Rendering error message UI. Error state is:", error); // Removed debug log
        return <div className="container text-center text-white br20">Error loading videos: {error.message}</div>;
    }

    // console.log("VideoView: Rendering main content. Data for albumContent:", albumContent); // Removed debug log

    const pageTitle =  "Arillian Farm - We Run A Funny Farm in Our Backyard and it's An Eggcellent Place to Be";
    const pageDescription = 'Check out cute youtube shorts of our critters, kitchen hacks, recipe ideas and more Arillian Farm.';

    return (
    <>
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            {/* add other meta tags here too */}
        </Helmet>
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
            {/* Removed the row that contained the subscribe button */}
            <div className="row text-center">
                {/* Add logs inside the map function */}
                {albumContent.map((video, index) => {
                    // console.log(`VideoView: Mapping video item at index ${index}:`, video); // Removed debug log

                    // Optional: Add a check here to skip if video or video.youtubeID is missing
                    if (!video || !video.youtubeID) {
                        // console.error(`VideoView: Skipping rendering for item at index ${index} due to missing data.`); // Removed debug log
                        return null; // Don't render this item if essential data is missing
                    }

                    // Generate iframe src - Assuming getIframeSrcForYouTube is robust
                    const iframeSrc = getIframeSrcForYouTube(video.youtubeID);

                    // Note: Your <a> tag's href currently also uses getIframeSrcForYouTube.
                    // This will make clicking the title/icon link open the *embed* URL in a new tab,
                    // not the standard YouTube *watch* page. If you want to link to the watch page,
                    // you should construct that URL instead (e.g., `https://www.youtube.com/watch?v=${video.youtubeID}`).
                    // This might not cause a rendering error, but it's worth noting for correctness.
                    const watchUrl = `https://www.youtube.com/watch?v=${video.youtubeID}`; // Example watch URL - Replace with your actual watch URL base

                    return (
                        <div key={`v-${index}`} className="col-xs-12 mb-5"> {/* Unique key */}
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
                                        key={`iframe-${index}`} // Unique key for iframe
                                        className="video-box"
                                        height={isSmallView ? '300' : '500'}
                                        width={isSmallView ? '300' : '500'}
                                        src={iframeSrc} // Use the iframe source (embed URL)
                                        title={video.title || 'Untitled Video'} // Ensure title exists
                                        allowFullScreen
                                        // consider adding recommended allow attributes for better compatibility
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
    </>
    );
};

export default VideoView;