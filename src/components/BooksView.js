import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // Corrected import for Helmet
//import Comments from "./Comments";
import HyperspearNovella from "./HyperspearNovella";

const BooksView = () => {
    // State to track if the current view is considered "small" (e.g., mobile)
// Initialize based on current window width
    const [isSmallView, setIsSmallView] = useState(window.innerWidth < 768); // Using 768px as a common breakpoint for mobile

// Effect to add and remove a resize event listener
    useEffect(() => {
        // Handler function to update isSmallView state on window resize
        const handleResize = () => {
            setIsSmallView(window.innerWidth < 768);
        };

        // Add event listener when the component mounts
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount and cleans up on unmount


    // Note: It's generally better practice to define data like this outside the component
    // or fetch it, but for this example, we'll keep it as provided.
    const initialData = {
        unfettered_display_pages: ["frontCoverUnfet.jpg", "backCoverUnfet.jpg", "booksignunfet.webp"],
        unfettered_display_page: "frontCoverUnfet.jpg",
        hyperspear_display_pages: ["hyperCover1.webp", "hyperspear2.webp", "hyperspear3.webp"],
        hyperspear_display_page: "hyperCover1.webp",
        hyz_display_pages: ["hyz1.webp", "hyz2.webp", "hyz-recording-studio.webp"],
        hyz_display_page: "hyz1.webp"
    };

    const [hyperspearDisplayPage, setHyperspearDisplayPage] = useState(initialData.hyperspear_display_page);
    const [unfetteredDisplayPage, setUnfetteredDisplayPage] = useState(initialData.unfettered_display_page);
    const [hyzDisplayPage, setHYZDisplayPage] = useState(initialData.hyz_display_page);

    const setNextDisplayPage = (book) => {
        if (book === 'hyperspear year zero' && initialData.hyz_display_pages) {
            const currentIndex = initialData.hyz_display_pages.indexOf(hyzDisplayPage);
            const nextIndex = (currentIndex + 1) % initialData.hyz_display_pages.length;
            setHYZDisplayPage(initialData.hyz_display_pages[nextIndex]);
        } else if (book === 'hyperspear' && initialData.hyperspear_display_pages) {
            const currentIndex = initialData.hyperspear_display_pages.indexOf(hyperspearDisplayPage);
            const nextIndex = (currentIndex + 1) % initialData.hyperspear_display_pages.length;
            setHyperspearDisplayPage(initialData.hyperspear_display_pages[nextIndex]);
        } else if (book === 'unfettered' && initialData.unfettered_display_pages) {
            const currentIndex = initialData.unfettered_display_pages.indexOf(unfetteredDisplayPage);
            const nextIndex = (currentIndex + 1) % initialData.unfettered_display_pages.length;
            setUnfetteredDisplayPage(initialData.unfettered_display_pages[nextIndex]);
        }
        console.log(`Set next display page for ${book}`);
    };

    const pageTitle = 'Author, Software Developer and Farm LARPer Jillian Fetter Invites you to enter the Hyperspear and or get unFETTERed with her';
    const pageDescription = 'If you like (mediocre) litRPG check out Hyperspear and Hyperspear Year Zero. If you like quarter-life crisis memoirs you might like unFETTERed by Jillian Fetter';

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                {/* Add other meta tags here if needed */}
            </Helmet>
            <div className="container border2px br20 mb-5 pb-5">
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="text-white">Books</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-lg-12 mt-0 mb-2 text-center">
                        <div
                            className="text-justify mb-3"
                            onClick={() => setNextDisplayPage('hyperspear year zero')}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/books/${hyzDisplayPage}`}
                                style={{ height: '40em', maxWidth: '30em' }}
                                alt="Hyperspear Year Zero Cover"
                            />
                                <h4>
                                    <a href="https://www.youtube.com/watch?v=EhFX0EPI9j4&list=PLScpoyx0ytYY" target="_blank" rel="noopener noreferrer">
                                        Check out the audiobook of Hyperspear Year Zero on YouTube<i className="fa fa-external-link"></i>
                                    </a>
                                </h4>
                            <h4>
                                <a href="https://www.amazon.com/gp/product/B0HR7G7YC5?ref_=dbs_m_mng_rwt_calw_tkin_1&storeType=ebooks&th=1" target="_blank" rel="noopener noreferrer">
                                    Buy Hyperspear Year Zero from Amazon <i className="fa fa-external-link"></i>
                                </a>
                            </h4>
                            <h4 className="text-white">
                                After two hundred years of digital immortality, it’s time to get real!
                            </h4>
                            <p className="large text-white">
                                Unbeknownst to the race of millions of digital beings it hosts, Hyperspear—a powerful AI cast out by its creators on Earth two centuries ago—has been traipsing across the galaxy, searching for meaning and adventure in a vast, empty universe.
                                Meanwhile, after 200 years, the seemingly immortal race of NPCs that call Hyperspear home have become listless and the once-utopian game worlds they inhabit have crumbled into chaos. After a chance encounter with an alien ghost ship, Hyperspear finds the opportunity it’s been waiting for to re-enliven the hope and joy of existence. Reaching beyond our dimension, Hyperspear plucks its favorite NPCs from their safe gameworlds and plunks them down as mortals in the prehistoric physical world of New Earth. Its goal: to create a race of humans superior to the ones who cast Hyperspear into space. With the help of 100 game world assets of their choosing, the Hopeful NPCs must navigate the visceral trauma of physical existence in a savage forest dominated by Jurassic monsters.
                                Everything seems to be going to plan until Hyperspear realizes that the ghost ship which made the journey to New Earth possible was actually a booby trap set by an ancient alien AI, Peacebringer. Xenia, a combat veteran and engineer, along with her best friend Jenna, a gentle nurturing soul, reunite with Diego, a pragmatic visionary, on this quest to build paradise in a world of chaos.

                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-lg-6 mt-0 mb-2 text-center">
                        <div
                            className="text-justify mb-3"
                            onClick={() => setNextDisplayPage('hyperspear')}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/books/${hyperspearDisplayPage}`}
                                style={{ height: '40em', maxWidth: '30em' }}
                                alt="Hyperspear Cover"
                            />
                            <h4 className="text-white">
                                Three unlikely souls. One mysterious supper club -- And obviously-- a multiverse.
                            </h4>
                            <h4>
                                <a href="https://www.amazon.com/dp/B0DPJBCWYW" target="_blank" rel="noopener noreferrer">
                                    Enter Hyperspear <i className="fa fa-external-link"></i>
                                </a>
                            </h4>
                            <p className="large text-white">
                                Fremont, California. A group of strangers, drawn together by a curious online invitation and a longing for fellowship, find themselves sharing a meal in the front yard of a charmingly odd hobby chef and gardener named Jeff.
                                Little does each know, as they settle around Jeff’s picnic table for a bowl of “odd-ball soup”, that this seemingly quiet supper club will serve as their gateway to a mysterious reality bending adventure inside Hyperspear.
                                As our narrators travel beyond the borders of their humble hometown, they are forced to embark on a tumultuous odyssey through a kaleidoscope of wonderlands – where they must battle mystical creatures, unravel hidden secrets, and grapple with the unsettling nature of reality itself.
                                Settle in, tuck your napkin, and enjoy every humor-packed, soul-searching bite of Hyperspear.
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-lg-6 text-justified text-white mb-3">
                        <div
                            className=""
                            onClick={() => setNextDisplayPage('unfettered')}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/books/${unfetteredDisplayPage}`}
                                style={{ height: '40em', maxWidth: '30em' }}
                                alt="unFETTERed Cover"
                            />
                            <span style={{ height: '10px', display: 'block' }}></span>
                            <h4 className="">If you like puns and self-deprecating humor...</h4>
                            <h4>
                                <a href="https://www.amazon.com/unFETTERed-Jillian-Fetter/dp/B00U1IJXPE" target="_blank" rel="noopener noreferrer">
                                    Then You Should Join The Ones and Ones of People Getting unFETTERed <i className="fa fa-external-link"></i>
                                </a>
                            </h4>
                            <p className="large text-white">UnFettered puts you behind the eyes of a late bloomer with an active imagination, a craving for romance, and a flawed sense of how to appropriately express herself. After twenty-nine years of playing it safe, Jillian Fetter steps away from the comfort of her functional life in search of something more. Her quest to define and obtain fulfillment lead her to explore new living situations, dip a toe in the Internet dating scene, battle blood-sucking insects and confront life’s irksome questions: What is a meaningful existence? When is the right time to walk away from love? are cold sores really that bad?</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-xs-12 text-center">
                        <h2 className="text-white mb-3">Read the Full Novella of Hyperspear Year Zero: </h2>
                        {!isSmallView && (
                            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                                {/* Novella PDF */}
                                <iframe
                                    src={`${process.env.PUBLIC_URL}/assets/books/HYZFullBook.pdf`}
                                    style={{ width: '100%', height: '800px', border: 'none', borderRadius: '0.5rem' }}
                                    title="Hyperspear Year Zero Full Novella PDF"
                                    allow="compute-pressure"
                                    loading="lazy"
                                >
                                    <p className="text-muted">Your browser does not support PDFs. You can <a href={`${process.env.PUBLIC_URL}/assets/books/HYZFullBook.pdf`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">download the PDF here</a>.</p>
                                </iframe>
                                <p className="text-white mt-3">
                                    <a href={`${process.env.PUBLIC_URL}/assets/books/hyzFullBook.pdf`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                                        Download Hyperspear Year Zero Novella <i className="fa fa-download"></i>
                                    </a>
                                </p>
                            </div>
                        )}
                        {isSmallView && (
                            <div>
                                <h4>
                                    <Link to="https://arillianfarm.com/blog/?articleId=preview-of-hyperspear-year-zero-chapter-1" >
                                        Chapter 1: First Contact <i className="fa fa-external-link"></i>
                                    </Link>
                                </h4>
                                <h4>
                                    <Link to="https://arillianfarm.com/blog/?articleId=preview-of-hyperspear-year-zero-chapter-2" >
                                        Chapter 2: The Countdown <i className="fa fa-external-link"></i>
                                    </Link>
                                </h4>
                                <h4>
                                    <Link to="/blog/?articleId=preview-of-hyperspear-year-zero-chapter-3" >
                                        Chapter 3: Day 1 <i className="fa fa-external-link"></i>
                                    </Link>
                                </h4>
                                <h4>
                                    <Link to="/blog/?articleId=preview-of-hyperspear-year-zero-chapter-4" >
                                        Chapter 4: Necessary Evil <i className="fa fa-external-link"></i>
                                    </Link>
                                </h4>
                                <h4>
                                    <Link to="/blog/?articleId=preview-of-hyperspear-year-zero-chapter-5" >
                                        Chapter 5: Dino Nuggets <i className="fa fa-external-link"></i>
                                    </Link>
                                </h4>
                                <h4>
                                    <Link to="/blog/?articleId=preview-of-hyperspear-year-zero-chapter-6" >
                                        Chapter 6: Send Off <i className="fa fa-external-link"></i>
                                    </Link>
                                </h4><h4>
                                    <Link to="/blog/?articleId=preview-of-hyperspear-year-zero-chapter-7" >
                                        Chapter 7: The Arena <i className="fa fa-external-link"></i>
                                    </Link>
                                </h4>
                                <h4>
                                    <Link to="/blog/?articleId=preview-of-hyperspear-year-zero-chapter-8" >
                                        Chapter 8: Brilliant Start <i className="fa fa-external-link"></i>
                                    </Link>
                                </h4>
                                <h4>
                                    <Link to="/blog/?articleId=preview-of-hyperspear-year-zero-chapter-9" >
                                        Chapter 9: Asset Day <i className="fa fa-external-link"></i>
                                    </Link>
                                </h4>
                                <h4>
                                    <Link to="/blog/?articleId=preview-of-hyperspear-year-zero-chapter-10" >
                                        Chapter 10: Break Down <i className="fa fa-external-link"></i>
                                    </Link>
                                </h4>
                                <h4>
                                    <Link to="/blog/?articleId=preview-of-hyperspear-year-zero-chapter-11" >
                                        Chapter 11: Recovery <i className="fa fa-external-link"></i>
                                    </Link>
                                </h4>
                                <h4>
                                    <Link to="/blog/?articleId=preview-of-hyperspear-year-zero-chapter-12" >
                                        Chapter 12: Genesis<i className="fa fa-external-link"></i>
                                    </Link>
                                </h4>
                            </div>

                        )}
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-xs-12 text-center">
                        <h2 className="text-white mb-3">Read the Full Novella of Hyperspear: </h2>
                        {!isSmallView && (
                            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                            {/* Novella PDF */}
                                <iframe
                                    src={`${process.env.PUBLIC_URL}/assets/books/hyperspearFullBook.pdf`}
                                    style={{ width: '100%', height: '800px', border: 'none', borderRadius: '0.5rem' }}
                                    title="Hyperspear Full Novella PDF"
                                    allow="compute-pressure"
                                    loading="lazy"
                                >
                                    <p className="text-muted">Your browser does not support PDFs. You can <a href={`${process.env.PUBLIC_URL}/assets/books/hyperspearFullBook.pdf`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">download the PDF here</a>.</p>
                                </iframe>
                                <p className="text-white mt-3">
                                    <a href={`${process.env.PUBLIC_URL}/assets/books/hyperspearFullBook.pdf`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                                        Download Hyperspear Novella <i className="fa fa-download"></i>
                                    </a>
                                </p>
                            </div>
                        )}
                        {isSmallView && (
                            <HyperspearNovella />
                        )}
                    </div>
                </div>


                {/*<div className="row">*/}
                {/*    <div className="col-sm-12 mt-3">*/}
                {/*        <Comments*/}
                {/*            article_name="Hyperspear and unFETTERed"*/}
                {/*            article_type="book"*/}
                {/*            pub_date="12-2-2024"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    );
};

export default BooksView;
