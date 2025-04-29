import React, { useEffect, useState } from 'react';
import AlbumHeader from './AlbumHeader';
import {calculateAlbumContainerSize, getIframeSrcForYouTube, titleCaps, applyAlbumFilter } from '../utils';

const VideoView = () => {
    const [videos, setVideos] = useState([]);
    const [isSmallView, setIsSmallView] = useState(window.innerWidth <= 600); // Adjust breakpoint
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedAlbum, setSelectedAlbum] = useState('new');
    const [albumContent, setAlbumContent] = useState([]);

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
                setVideos(data.data);
                setAlbumContent(applyAlbumFilter(data.data, 'new'));
            } catch (e) {
                setError(e);
                console.error("Error fetching videos:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
        const handleResize = () => {
            setIsSmallView(window.innerWidth <= 600);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallView(window.innerWidth <= 600);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleAlbumSelect = (album) => {
        console.log(`album clicked ${album}`)
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
            <div className="row text-center">
                {albumContent.map((video, index) => (
                    <div key={index} className="col-xs-12 mb-5">
                        <div className="col-xs-12">
                            <a
                                className="text-white"
                                href={getIframeSrcForYouTube(video.youtubeID)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {titleCaps(video.title)}
                                <i className="fa fa-external-link"></i>
                                <div className="col-xs-12">
                                    <iframe
                                        className="video-box"
                                        height={isSmallView ? '300' : '500'}
                                        width={isSmallView ? '300' : '500'}
                                        src={getIframeSrcForYouTube(video.youtubeID)}
                                        title={video.title}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoView;