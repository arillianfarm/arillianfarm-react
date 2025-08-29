import React, { useEffect, useState } from 'react';
import AlbumHeader from './AlbumHeader';
import { calculateAlbumContainerSize, getIframeSrcForYouTube, titleCaps, applyAlbumFilter } from '../utils';
import data from '../pageData/videos.json';
import { Helmet } from 'react-helmet-async';

const VideoView = () => {
    const [videos, setVideos] = useState([]);
    const [isSmallView, setIsSmallView] = useState(window.innerWidth <= 600);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedAlbum, setSelectedAlbum] = useState('new');
    const [albumContent, setAlbumContent] = useState([]);

    // PAGINATION STATE
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const pageLimit = 5; // New state to limit visible page numbers

    // Effect to load data and set initial album content (runs once on mount)
    useEffect(() => {
        setLoading(true);
        try {
            if (!data || !data.data) {
                throw new Error("Video data is missing or malformed");
            }

            const processedVideos = data.data;
            setVideos(processedVideos);
            setAlbumContent(applyAlbumFilter(processedVideos, 'new'));
            setError(null);
        } catch (e) {
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
            setLoading(false);
        }
    }, []);

    // Effect to handle window resize (runs on mount and resize)
    useEffect(() => {
        const handleResize = () => {
            setIsSmallView(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleAlbumSelect = (album) => {
        setSelectedAlbum(album);
        setAlbumContent(applyAlbumFilter(videos, album));
        setCurrentPage(1); // Reset to first page on album change
    };

    // PAGINATION HANDLERS
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // RENDER LOGIC
    if (loading) {
        return <div className="container text-center text-white br20">Loading videos...</div>;
    }

    if (error) {
        return <div className="container text-center text-white br20">Error loading videos: {error.message}</div>;
    }

    // PAGINATION LOGIC
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = albumContent.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(albumContent.length / itemsPerPage);

    // Dynamic page button calculation
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - Math.floor(pageLimit / 2));
    let endPage = Math.min(totalPages, startPage + pageLimit - 1);
    if (endPage - startPage + 1 < pageLimit) {
        startPage = Math.max(1, endPage - pageLimit + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    const pageTitle = "Arillian Farm - We Run A Funny Farm in Our Backyard and it's An Eggcellent Place to Be";
    const pageDescription = 'Check out cute youtube shorts of our critters, kitchen hacks, recipe ideas and more Arillian Farm.';

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
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
                <div className="row text-center">
                    {currentItems.map((video, index) => {
                        if (!video || !video.youtubeID) {
                            return null;
                        }

                        const iframeSrc = getIframeSrcForYouTube(video.youtubeID);
                        const watchUrl = `https://www.youtube.com/watch?v=${video.youtubeID}`;

                        return (
                            <div key={`v-${index}`} className="col-xs-12 mb-5">
                                <div className="col-xs-12">
                                    <a
                                        className="text-white"
                                        href={watchUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {titleCaps(video.title || 'Untitled Video')}
                                        <i className="fa fa-external-link"></i>
                                    </a>
                                    <div className="col-xs-12">
                                        <iframe
                                            key={`iframe-${index}`}
                                            className="video-box"
                                            height={isSmallView ? '300' : '500'}
                                            width={isSmallView ? '300' : '500'}
                                            src={iframeSrc}
                                            allow="compute-pressure"
                                            title={video.title || 'Untitled Video'}
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* PAGINATION CONTROLS */}
                {totalPages > 1 && (
                    <nav style={{ display: 'flex', justifyContent: 'center' }}>
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <a className="page-link" href="#" onClick={() => handlePageChange(currentPage - 1)}>
                                    Previous
                                </a>
                            </li>
                            {pageNumbers.map((number) => (
                                <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                                    <a className="page-link" href="#" onClick={() => handlePageChange(number)}>
                                        {number}
                                    </a>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <a className="page-link" href="#" onClick={() => handlePageChange(currentPage + 1)}>
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </>
    );
};

export default VideoView;