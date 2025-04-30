import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import {useLocation, useParams} from 'react-router-dom';
import { calculateAlbumContainerSize, getIframeSrcForYouTube, titleCaps, trunc, applyAlbumFilter } from '../utils';


const BlogView = () => {
    const { blogId } = useParams(); // Get the dynamic blogId from the URL
    const [blogEntries, setBlogEntries] = useState([]);
    const [featuredBlogEntry, setFeaturedBlogEntry] = useState(null);
    const [isSmallView, setIsSmallView] = useState(window.innerWidth <= 600); // Adjust breakpoint
    const [collapseNav, setCollapseNav] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const fetchBlogEntries = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('./pageData/blog.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setBlogEntries(data.data); // Assuming your JSON has a "blogEntries" array
            } catch (e) {
                setError(e);
                console.error("Error fetching blog entries:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogEntries();

        const handleResize = () => {
            setIsSmallView(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (!loading && blogEntries.length > 0) {
            if (blogId) {
                const foundBlog = blogEntries.find(blog =>
                    blog.slug === blogId || blog.name.toLowerCase().replace(/ /g, '-') === blogId.toLowerCase()
                );
                setFeaturedBlogEntry(foundBlog || blogEntries[0]); // Default to first if slug not found
            } else {
                setFeaturedBlogEntry(blogEntries[0]); // Set initial featured blog if no slug in URL
            }
        }
    }, [loading, blogEntries, blogId]);

    useEffect(() => {
        const hash = location.path;
        if (hash) {
            const blogEntrySubjectFromHash = hash.substring(2).replace(/-/g, ' ').replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase();
            const foundBlogEntry = blogEntries.find(entry =>
                entry.entry_subject.toLowerCase().replace(/ /g, '-').replace("'", "") === blogEntrySubjectFromHash
            );
            if (foundBlogEntry) {
                setFeaturedBlogEntry(foundBlogEntry);
                window.scrollTo(0, 0);
            }
        } else if (blogEntries.length > 0 && !featuredBlogEntry) {
            setFeaturedBlogEntry(blogEntries[0]);
        }
    }, [location.hash, blogEntries, featuredBlogEntry]);




    const handleBlogEntryClick = (entry) => {
        let path = `/blog/${entry.entry_subject.toLowerCase().split(' ').join('-').replace("'", "")}`;
        setFeaturedBlogEntry(entry);
        let fullLink = window.location.origin + path;
        window.history.pushState({},'', `${path}`);
        return fullLink
    };

    const setCopiedLink = (path) => {
        const fullLink = window.location.origin + path;
        return fullLink
    }

    // const assembleBlogSummary = (item) => {
    //     if (item.sections && item.sections[0] && item.sections[0].paragraphs && item.sections[0].paragraphs[0]) {
    //         return trunc(item.sections[0].paragraphs[0].text, 80);
    //     }
    //     return '';
    // };

    const renderMainContent = (entry) => {
        if (!entry) {
            return <div className="col-xs-12 text-white"><h3>Select a Blog Entry</h3></div>;
        }
        return (
            <div className="col-xs-12 col-lg-9" id={entry.entry_subject.toLowerCase().replace(/ /g, '-')}>
                <h5 className="mb-0">
                    <div className="row blog-header">
                        <div className="col-xs-12">
                            <span className="mx-2">
                                    <button className="btn btn-info btn-xs" onClick={(event) => {
                                        event.stopPropagation();
                                        const link = setCopiedLink(entry.entry_subject.toLowerCase().split(' ').join('-').replace("'", ""));
                                        navigator.clipboard.writeText(link)
                                            .then(() => console.log('Link copied to clipboard' + link))
                                            .catch(err => console.error('Failed to copy link: ', err));
                                    }}>
                                    <i className="fa fa-link"></i> <b>Link</b>
                                </button>
                            </span>
                            <span>
                                {titleCaps(entry.entry_subject)}
                            </span>
                            <span className="blog-date">
                                {entry.entry_date}
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
                                    <img src={`./assets/blog/${entry.pic_file}`} style={{ height: '20em', marginLeft: '3em' }} alt={entry.entry_subject} />
                                </a>
                            </div>
                        </div>
                    )}
                    {entry.pic_file && !entry.link && (
                        <div className="col-xs-12 text-center mb-5 mt-5">
                            <img className="br20" src={`./assets/blog/${entry.pic_file}`} style={{ height: '20em' }} alt={entry.entry_subject} />
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
                                <img className="br20" src={`./assets/blog/${entry.pic_file}`} style={{ height: '20em' }} alt={entry.entry_subject} />
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
                                        src={`./assets/blog/${pic}`}
                                        style={{ float: `${section.right_side_pic ? 'right' : 'left'}` }}
                                        className="br20 p2 blog-image"
                                        />
                                    )))}
                                    {section.vid && (
                                        <iframe
                                            className="video-box blog-iframe"
                                            height="300"
                                            width="300"
                                            autoplay="0"
                                            style={{float: `${section.right_side_pic ? 'right' : 'left'}`}}
                                            src={getIframeSrcForYouTube(section.vid)}>
                                        </iframe>
                                     )}
                                {section.link && section.pic_file && (
                                        <a className="ml-5" style={{'float':section.right_side_pic ? 'right': 'left'}}
                                            href="{getIframeSrc(section.link)}"
                                           target="_blank">
                                            <img
                                                src={`./assets/blog/${section.pic_file}`}
                                                style="height: 20em; padding:10px;"/>
                                        </a>

                                    )}
                                {section.paragraphs && section.paragraphs.length && (
                                    <div className="blogPtext">
                                        {section.paragraphs.map((p, index) => (
                                            <div>
                                                {p.text && !p.bold && !p.h2 && !p.h3 && !p.h4 && (
                                                    <p>{p.text}</p>
                                                )}
                                            </div>
                                        ))}
                                        {section.paragraphs.map((p, index) => (
                                            <div>
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
                            blogEntries.map((entry) => (
                                <ListItem
                                    key={entry.entry_subject}
                                    item={entry}
                                    isSelected={featuredBlogEntry && entry.entry_subject === featuredBlogEntry.entry_subject}
                                    onItemClick={handleBlogEntryClick}
                                    titleKey="entry_subject"
                                    thumbnailKey="feature_section_1.pic"
                                    thumbnailPrefix=""
                                    pageBase="blog"
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