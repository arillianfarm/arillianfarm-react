import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import {useLocation, useParams} from 'react-router-dom';
import { calculateAlbumContainerSize, getIframeSrcForYouTube, titleCaps, trunc, applyAlbumFilter, getSlug, setLinkWithQueryString } from '../utils';
import blogData from '../pageData/blog.json';
import { Helmet } from 'react-helmet-async';


const BlogView = () => {
    const [blogEntries, setBlogEntries] = useState([]);
    const [featuredBlogEntry, setFeaturedBlogEntry] = useState(null);
    const [isSmallView, setIsSmallView] = useState(window.innerWidth <= 600); // Adjust breakpoint
    const [collapseNav, setCollapseNav] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const [articleId, setArticleId] = useState(null);


    useEffect(() => {
        setLoading(true);
        try {
            const entriesWithSummary = [...(blogData.data.map((entry, i) => {
                entry.summary = assembleBlogSummary(entry);
                return entry;
            }, []).reverse())];
            setBlogEntries(entriesWithSummary);

            const params = new URLSearchParams(location.search);
            const idFromQuery = params.get('articleId');

            let initialFeaturedBlog = null;
            if (idFromQuery) {
                initialFeaturedBlog = entriesWithSummary.find(blog => getSlug(blog.entry_subject) === idFromQuery);
            }


            setFeaturedBlogEntry(initialFeaturedBlog || entriesWithSummary[0]);
            setError(null);
        } catch (e) {
            setError(e);
            console.error("Error processing blog entries:", e);
            setFeaturedBlogEntry(null);
            setBlogEntries([]);
        } finally {
            setLoading(false);
        }
    }, [location.search]);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallView(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleBlogEntryClick = (entry) => {
        let path = setLinkWithQueryString('blog', entry.entry_subject)
        //setFeaturedBlogEntry(entry);//  The useEffect will handle setting featuredBlog based on the new URL
        window.history.pushState({},'', path);
        if (isSmallView) {
            setCollapseNav(true); // Collapse the navigation on mobile
        }
    };

    const assembleBlogSummary = (item) => {
        if (item.sections && item.sections[0] && item.sections[0].paragraphs && item.sections[0].paragraphs[0]) {
            return trunc(item.sections[0].paragraphs[0].text, 80);
        }
        return '';
    };

    const renderMainContent = (entry) => {
        if (loading) {
            return <div>Loading Blog Entries...</div>;
        }
        if (error) {
            return <div>Error loading Blog Entries: {error.message}</div>;
        }
        if (!entry) {
            return <div className="col-xs-12 text-white"><h3>Select a Blog Entry</h3></div>;
        }

        const blogSlug = getSlug(entry.entry_subject);
        const pageTitle = entry && entry.entry_subject ? `${entry.entry_subject} -The Arillian Farm Blog` : 'Keep Up With The Funny Farm In Our Backyard at Arillian Farm';
        const pageDescription = entry && entry.feature_section_1 && entry.feature_section_1.caption ?entry.feature_section_1.caption : 'A Blog About Suburban Farming, YouTubing and The Funny Farm In Our Own BackYard at Arillian Farm.';



        // Once loading is false and no error, render the main layout
        return (
        <>
                <Helmet>
                    <title>{pageTitle}</title>
                    <meta name="description" content={pageDescription} />
                    {/* add other meta tags here too */}
                </Helmet>
            <div key={blogSlug} className="col-xs-12 col-lg-9" id={entry.entry_subject.toLowerCase().replace(/ /g, '-')}>
                <h5 className="mb-0">
                    <div className="row blog-header">
                        <div className="col-xs-12">
                            <span className="blog-date">
                                {entry.entry_date}
                            </span>
                        </div>
                        <div className="col-xs-12">
                            <span className="mx-2">
                                    <button className="btn btn-info btn-xs" onClick={(event) => {
                                        event.stopPropagation();
                                        const link = setLinkWithQueryString('blog', entry.entry_subject);
                                        navigator.clipboard.writeText(link)
                                            .then(() => console.log('BLOG Link copied to clipboard ' + link))
                                            .catch(err => console.error('Failed to copy link: ', err));
                                    }}>
                                    <i className="fa fa-link"></i> <b>Link</b>
                                </button>
                            </span>
                            <span>
                                {titleCaps(entry.entry_subject)}
                            </span>
                        </div>
                    </div>
                </h5>
                <hr />
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <h3 className="text-white">{titleCaps(entry.entry_subject)}</h3>
                    </div>
                    {entry.pic_file && entry.link && (
                        <div className="row mb-2 mt-2">
                            <div className="col-xs-12 text-center">
                                <a href={entry.link} target="_blank" rel="noopener noreferrer">
                                    <img src={`${process.env.PUBLIC_URL}/assets/blog/${entry.pic_file}`} style={{ height: '10em', marginLeft: '3em' }} alt={entry.entry_subject} />
                                </a>
                            </div>
                        </div>
                    )}
                    {entry.pic_file && !entry.link && (
                        <div className="col-xs-12 text-center mb-5 mt-5">
                            <img className="br20" src={`${process.env.PUBLIC_URL}/assets/blog/${entry.pic_file}`} style={{ height: '10em' }} alt={entry.entry_subject} />
                        </div>
                    )}
                    {entry.link && !entry.pic_file && (
                        <div className="col-xs-12 text-center mb-5 mt-5">
                            <h3><a href={entry.link} target="_blank" rel="noopener noreferrer">[LINK]</a></h3>
                        </div>
                    )}
                    {entry.link && entry.pic_file && (
                        <div className="col-xs-12 text-center mb-5 mt-5">
                            <h3><a href={entry.link} target="_blank" >
                                <img className="br20" src={`${process.env.PUBLIC_URL}/assets/blog/${entry.pic_file}`} style={{ height: '10em'}} alt={entry.entry_subject} />
                            </a></h3>
                        </div>
                    )}
                </div>
                <div className="row">
                    <div className="col-xs-12 text-justified text-white mt-3">
                        {featuredBlogEntry.sections.map((section, index) => (
                            <div  key={`section-${index}`}>
                                {section.pics && (section.pics.map((pic, index) => (
                                    <img
                                        key={`blog-pic-${pic}`}
                                        src={`${process.env.PUBLIC_URL}/assets/blog/${pic}`}
                                        style={{ float: `${section.right_side_pic ? 'right' : 'left'}` }}
                                        className="br20 p2 blog-image"
                                        />
                                    )))}
                                    {section.vid && (
                                        <iframe
                                            className="video-box blog-iframe"
                                            height="300"
                                            width="300"
                                            autoPlay="0"
                                            style={{ float: section.right_side_pic ? 'right' : 'left' }}
                                            src={getIframeSrcForYouTube(section.vid)}>
                                        </iframe>
                                     )}
                                {section.link && section.pic_file && (
                                    <a className="ml-5" style={{float: section.right_side_pic ? 'right': 'left'}}
                                            href={section.link}
                                           target="_blank">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/blog/${section.pic_file}`}
                                                style={{height: '10em', padding:'10px'}}/>
                                        </a>

                                    )}
                                {section.paragraphs && section.paragraphs.length && (
                                    <div className="blogPtext">
                                        {section.paragraphs.map((p, index) => (
                                            <div key={`section-${index}`}>
                                                {p.text && !p.bold && !p.h2 && !p.h3 && !p.h4 && (
                                                    <p>{p.text}</p>
                                                )}
                                                {p.text && p.bold  && (
                                                    <b>{p.text}</b>
                                                )}
                                                {p.text && p.h2  && (
                                                    <h2>{titleCaps(p.text)}</h2>
                                                )}
                                                {p.text && p.h3  && (
                                                    <h3>{titleCaps(p.text)}</h3>
                                                )}
                                                {p.text && p.h4  && (
                                                    <h4>{titleCaps(p.text)}</h4>
                                                )}
                                            </div>
                                        ))}

                                    </div>
                                )}
                            </div>

                        ) )}


                    </div>
                </div>
            </div>
    </>
        );

    };

    if (loading) {
        return <div className="container border2px br20 text-white">Loading blog entries...</div>;
    }

    if (error) {
        return <div className="container border2px br20 text-white">Error loading blog entries: {error.message}</div>;
    }

    return (
        <div className="container border2px br20 text-white">
            <div className="row">
                <div className="col-xs-12">
                    <h2 className="text-white">Blog</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-lg-3" style={{ borderRight: !isSmallView ? '2px solid white' : '' }}>
                    <div className="row cursPoint">
                        <div className="col-xs-12">
                            <h3>
                                {isSmallView && (
                                    <button className="btn btn-large btn-primary" onClick={() => setCollapseNav(!collapseNav)}>
                                        <i className="fa fa-list"></i>
                                    </button>
                                )}
                            </h3>
                        </div>
                        {(!collapseNav || !isSmallView) &&
                            blogEntries.map((entry, index) => (
                                <ListItem
                                    key={`e-${index}`}
                                    item={entry}
                                    isSelected={featuredBlogEntry && entry.entry_subject === featuredBlogEntry.entry_subject}
                                    onItemClick={handleBlogEntryClick}
                                    titleKey="entry_subject"
                                    thumbnailKey="pic_file"
                                    descriptionKey="summary"
                                    pageBase="blog"
                                    thumbnailPrefix="/assets/blog/"
                                />
                            ))}
                    </div>
                </div>
                <div className="col-xs-12 col-lg-9">
                    {renderMainContent(featuredBlogEntry)}
                </div>
            </div>
        </div>
    );
};

export default BlogView;