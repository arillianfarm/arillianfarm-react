import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { titleCaps, getIframeSrcForYouTube } from '../utils'; // Assuming 'utils' contains these functions
// You might have a specific data source for your YouTube Shorts or a simplified hardcoded structure
// For now, we'll use a placeholder similar to your recipeData, assuming a 'shorts.json'
import shortsData from '../pageData/shorts.json'; // Create this file or adjust as needed

const YouTubeShortContent = ({ short, isSmallView }) => {
    if (!short) {
        return <div className="col-xs-12 text-white"><h3>No YouTube Short selected.</h3></div>;
    }

    return (
        <div className="col-xs-12 col-lg-9" id={short.id || short.title.toLowerCase().replace(/ /g, '-')}>
            <div className="row">
                <div className="col-xs-12 row text-white">
                    <div className="col-xs-12 text-center">
                        <h3>{titleCaps(short.title)}</h3>
                        {short.notes && <h5>{titleCaps(short.notes)}</h5>}
                    </div>
                    <div className="col-xs-12 bb2 mb-2" style={{ borderBottom: '2px solid white' }}></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 text-center mt-3">
                    {short.videoId && (
                        <div className="video-container">
                            <iframe
                                style={{ height: isSmallView ? '20em' : '25em', padding: '10px', maxWidth: '55em', width: '100%' }}
                                className="video-box br20"
                                src={getIframeSrcForYouTube(short.videoId)}
                                title={`${short.title} YouTube Short`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    )}
                </div>
                <div className="col-xs-12 col-lg-8 offset-lg-2 mt-4">
                    <div className="text-white">
                        {short.description && <p>{short.description}</p>}
                        {short.callToAction && (
                            <div className="text-center mt-4">
                                <a
                                    href={short.callToAction.link}
                                    className="btn btn-lg btn-success br20" // Green button for clear CTA
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {short.callToAction.text || 'Learn More!'}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const GoogleAdsLandingPage = () => {
    const [featuredShort, setFeaturedShort] = useState(null);
    const [isSmallView, setIsSmallView] = useState(window.innerWidth <= 400);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            setIsSmallView(window.innerWidth <= 400);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setLoading(true);
        setFeaturedShort(null);
        try {
            const params = new URLSearchParams(location.search);
            const shortIdFromQuery = params.get('shortId'); // Expecting 'shortId' in query string for specific short

            let initialFeaturedShort = null;
            if (shortIdFromQuery) {
                // Find the short by its ID or a unique slug from your shortsData
                initialFeaturedShort = shortsData.data.find(short => short.id === shortIdFromQuery);
            }

            // Fallback: If no specific short found, maybe pick a default or the first one
            setFeaturedShort(initialFeaturedShort || shortsData.data[0] || null);

            setError(null);
        } catch (e) {
            setError(e);
            console.error("Error loading YouTube Short:", e);
            setFeaturedShort(null);
        } finally {
            setLoading(false);
        }
    }, [location.search]);

    const pageTitle = featuredShort && featuredShort.title ? `${featuredShort.title} - Arillian Farm Shorts` : 'Arillian Farm YouTube Short';
    const pageDescription = featuredShort && featuredShort.description ? featuredShort.description : 'Watch engaging YouTube Shorts from Arillian Farm.';

    if (loading) {
        return <div>Loading content...</div>;
    }

    if (error) {
        return <div>Error loading content: {error.message}</div>;
    }

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                {/* Potentially add Open Graph tags for social sharing if desired */}
                {featuredShort?.imageUrl && <meta property="og:image" content={featuredShort.imageUrl} />}
                {featuredShort?.title && <meta property="og:title" content={featuredShort.title} />}
                {featuredShort?.description && <meta property="og:description" content={featuredShort.description} />}
                <meta property="og:type" content="video.other" />
                {featuredShort?.videoId && <meta property="og:video:url" content={`https://www.youtube.com/watch?v=${featuredShort.videoId}`} />}
                {featuredShort?.videoId && <meta property="og:video:secure_url" content={`https://www.youtube.com/watch?v=${featuredShort.videoId}`} />}
                {featuredShort?.videoId && <meta property="og:video:type" content="text/html" />}
                {featuredShort?.videoId && <meta property="og:video:width" content="1280" />} {/* Adjust based on typical short dimensions */}
                {featuredShort?.videoId && <meta property="og:video:height" content="720" />} {/* Adjust based on typical short dimensions */}
                <meta property="og:site_name" content="Arillian Farm" />
            </Helmet>
            <div className="container border2px br20 text-white">
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="text-white text-center">Featured Short</h2>
                    </div>
                </div>
                <div className="row justify-content-center"> {/* Centering the main content */}
                    <YouTubeShortContent short={featuredShort} isSmallView={isSmallView} />
                </div>
            </div>
        </>
    );
};

export default GoogleAdsLandingPage;