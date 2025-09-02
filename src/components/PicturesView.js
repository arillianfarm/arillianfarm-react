import React, {useEffect, useState} from 'react';
import { calculateAlbumContainerSize, getIframeSrcForYouTube, titleCaps, applyAlbumFilter } from '../utils';
import AlbumHeader from './AlbumHeader';
import data from '../pageData/pictures.json';
import { Helmet } from 'react-helmet-async';


const PicturesView = () => {
    const [pics, setPics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [smallView, setSmallView] = useState(window.innerWidth <= 600);
    const [selectedAlbum, setSelectedAlbum] = useState('new');
    const [albumContent, setAlbumContent] = useState([]);

    // PAGINATION STATE
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // You can adjust this number
    const pageLimit = 5; // Limits number of pages displayed in the pagination bar

    useEffect(() => {
        setLoading(true);
        try {
            setPics(data.data);
            setAlbumContent(applyAlbumFilter(data.data, 'new'));
        } catch (e) {
            setError(e);
            console.error("Error fetching pics:", e);
        } finally {
            setLoading(false);
        }

        const handleResize = () => {
            setSmallView(window.innerWidth <= 600);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[]);

    const handleAlbumSelect = (album) => {
        console.log(`album clicked ${album}`)
        setSelectedAlbum(album);
        setAlbumContent(applyAlbumFilter(pics, album));
        setCurrentPage(1); // Reset to first page on album change
    };

    // PAGINATION HANDLERS
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const containerStyle = {
        maxWidth: calculateAlbumContainerSize(smallView),
    };

    if (loading) {
        return <div className="container text-center text-white br20">Loading video albums...</div>;
    }

    if (error) {
        return <div className="container text-center text-white br20">Error loading video albums: {error.message}</div>;
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

    const pageTitle =  "Arillian Farm - We Run A Funny Farm in Our Backyard and it's An Eggcellent Place to Be";
    const pageDescription = 'Check out all the cute fur and feather friends, vegetable gardens, and beautiful scenes at Arillian Farm.';

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                {/* add other meta tags here too */}
            </Helmet>
            <div className="pictures-view">
                <div className="row text-center">
                    <div className="col-xs-12">
                        <h4 className="text-white">Picture Albums</h4>
                        < AlbumHeader
                            albumType="pictures"
                            unfilteredList={pics}
                            onAlbumSelect={handleAlbumSelect}
                            currentAlbum={selectedAlbum}
                        />
                    </div>
                </div>
                <hr />
                <div className="row text-center">
                    {currentItems.map((pic, index) => (
                        <div key={`${pic.imagur_id}-${index}`} className="col-xs-12 mb-5">
                            <h4 className="text-white">{pic.caption}</h4>
                            <img className="br20" src={`https://i.imgur.com/${pic.imagur_id}.png`} alt={`${pic.name}`} style={{ maxWidth: '500px', height: 'auto' }} />
                        </div>
                    ))}
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
}

export default PicturesView;