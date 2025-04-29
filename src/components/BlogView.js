import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import { titleCaps, trunc } from '../utils';
import { useLocation } from 'react-router-dom';

const BlogView = () => {
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
        const hash = location.hash;
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
        setFeaturedBlogEntry(entry);
        window.location.hash = `!#${entry.entry_subject.toLowerCase().replace(/ /g, '-').replace("'", "")}`;
    };

    const assembleBlogSummary = (item) => {
        if (item.sections && item.sections[0] && item.sections[0].paragraphs && item.sections[0].paragraphs[0]) {
            return trunc(item.sections[0].paragraphs[0].text, 80);
        }
        return '';
    };

    const renderMainContent = (item) => {
        if (!item) {
            return <div className="col-xs-12 text-white"><h3>Select a Blog Entry</h3></div>;
        }
        return (
            <div className="col-xs-12 col-lg-9" id={item.entry_subject.toLowerCase().replace(/ /g, '-')}>
                <h5 className="mb-0">
                    <div className="row blog-header">
                        <div className="col-xs-6">
                            {titleCaps(item.entry_subject)}
                        </div>
                        <div className="col-xs-6 pull-right text-right">
                            {item.entry_date}
                        </div>
                    </div>
                </h5>
                <hr />
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <h3 className="text-white">{titleCaps(item.entry_subject)}</h3>
                    </div>
                    {item.pic_file && item.link && (
                        <div className="row mb-2 mt-2">
                            <div className="col-xs-12 text-center">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <img src={`./assets/blog/${item.pic_file}`} style={{ height: '20em', marginLeft: '3em' }} alt={item.entry_subject} />
                                </a>
                            </div>
                        </div>
                    )}
                    {item.pic_file && !item.link && (
                        <div className="col-xs-12 text-center mb-5 mt-5">
                            <img className="br20" src={`./assets/blog/${item.pic_file}`} style={{ height: '20em' }} alt={item.entry_subject} />
                        </div>
                    )}
                    {item.link && !item.pic_file && (
                        <div className="col-xs-12 text-center mb-5 mt-5">
                            <h3><a href={item.link} target="_blank" rel="noopener noreferrer">[LINK]</a></h3>
                        </div>
                    )}
                    {/* ... You'll need to render sections with pics, videos, paragraphs etc. here based on your HTML ... */}
                    <div>{JSON.stringify(item)}</div> {/* Temporary display of all data */}
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
                                    descriptionKey={assembleBlogSummary}
                                    thumbnailPrefix="" // Adjust if your blog pics have a prefix
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