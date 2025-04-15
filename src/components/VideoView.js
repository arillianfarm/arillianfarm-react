import React, { useState, useEffect } from 'react';
import { titleCaps, getIframeSrcForYouTube, calculateAlbumContainerSize } from '../utils';
import './VideoView.css'; // Optional CSS
import AlbumHeader from './AlbumHeader';


const VideoView = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [smallView, setSmallView] = useState(window.innerWidth <= 600);

    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('./pageData/videos.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setVideos(data.data); // Assuming your JSON has a "videos" array
            } catch (e) {
                setError(e);
                console.error("Error fetching videos:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();

        const handleResize = () => {
            setSmallView(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setSmallView(window.innerWidth <= 600);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerStyle = {
        maxWidth: calculateAlbumContainerSize(smallView),
    };

    if (loading) {
        return <div className="container text-center text-white br20">Loading video albums...</div>;
    }

    if (error) {
        return <div className="container text-center text-white br20">Error loading video albums: {error.message}</div>;
    }

    return (

        <div className="container text-center mb-3 br20 border2px text-white" style={{ maxWidth: calculateAlbumContainerSize() }}>
            <div className="row text-center">
                <div className="col-xs-12">
                    <h4 className="text-white">Video Albums</h4>
                    < AlbumHeader albumType="pictures" />
                </div>
            </div>
            <hr />
            <div className="row">
                {videos.map((video, index) => (
                    <div className="col-xs-12 mb-3" style={{ height: '45em' }} key={index}>
                        <div className="row">
                            <div className="col-xs-12">
                                <a
                                    className="text-white"
                                    href={getIframeSrcForYouTube(video.youtubeID)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {titleCaps(video.title)}
                                    <i className="fa fa-external-link"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <iframe
                                className="video-box"
                                height={smallView ? '300' : '500'}
                                width={smallView ? '300' : '500'}
                                src={getIframeSrcForYouTube(video.youtubeID)}
                                title={video.title}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
};

export default VideoView;