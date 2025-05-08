import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import {
    getIframeSrcForYouTube,
    titleCaps,
    trunc,
    setCopiedLink,
    getSlug,
    getParamFromUrl,
    setLinkWithQueryString
} from '../utils';
import {useLocation, useParams} from 'react-router-dom';
import projectData from '../pageData/projects.json';


const ProjectToolsMaterials = ({ featuredProject }) => {
    if (!featuredProject || (!featuredProject.tools?.length && !featuredProject.materials?.length)) {
        return null;
    }

    return (
        <div className="row">
            {featuredProject.tools?.length && (
                <div className="col-xs-12 col-lg-6">
                    <h3>Tools</h3>
                    <ol style={{ fontWeight: 'bold' }} className="text-white">
                        {featuredProject.tools.map((tool, index) => (
                            <li key={`tool-${index}`}>
                                <h4>{tool}</h4>
                            </li>
                        ))}
                    </ol>
                    {featuredProject.tool_pics?.map((toolPic, index) => (
                        toolPic && (
                            <div key={`toolPic-${index}`} className="col-xs-12 col-lg-4">
                                <p>{toolPic.name}</p>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/projects/${toolPic.pic}`}
                                    style={{ height: '10em', padding: '10px', float: toolPic.right_side_pic ? 'right' : 'left' }}
                                    className="br20 p2"
                                    alt={toolPic.name}
                                />
                                {toolPic.link && toolPic.pic && (
                                    <a
                                        className="ml-5"
                                        style={{ float: toolPic.right_side_pic ? 'right' : 'left' }}
                                        href={`${toolPic.link}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/projects/${toolPic.pic}`}
                                            style={{ height: '10em', padding: '10px' }}
                                            alt={`${toolPic.name} Link`}
                                        />
                                    </a>
                                )}
                            </div>
                        )
                    ))}
                </div>
            )}

            {featuredProject.materials?.length && (
                <div className="col-xs-12 col-lg-6">
                    <div className="row">
                        <div className="col-xs-12">
                            <h3>Materials</h3>
                            <ol style={{ fontWeight: 'bold' }} className="text-white">
                                {featuredProject.materials.map((mat, index) => (
                                    <li key={`material-${index}`}>
                                        <h4>{mat}</h4>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        {featuredProject.materials_pics?.map((matPic, index) => (
                            matPic && (
                                <div key={`matPic-${index}`} className="col-xs-12 col-lg-4">
                                    <p>{matPic.name}</p>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/projects/${matPic.pic}`}
                                        style={{ height: '10em', padding: '10px', float: matPic.right_side_pic ? 'right' : 'left' }}
                                        className="br20 p2"
                                        alt={matPic.name}
                                    />
                                    {matPic.link && matPic.pic && (
                                        <a
                                            className="ml-5"
                                            style={{ float: matPic.right_side_pic ? 'right' : 'left' }}
                                            href={`${matPic.link}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/projects/${matPic.pic}`}
                                                style={{ height: '10em', padding: '10px' }}
                                                alt={`${matPic.name} Link`}
                                            />
                                        </a>
                                    )}
                                </div>
                            )
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const ProjectPhases = ({ featuredProject }) => {
    if (!featuredProject || !featuredProject.phases?.length) {
        return null;
    }

    return (
        <div className="row mb-2 mt-2">
            <div className="col-xs-12 text-justified text-white">
                {featuredProject.phases.map((section, index) => (
                    <div key={`phase-${index}`}>
                        {section.label && <h3>{titleCaps(section.label)}:</h3>}
                        {section.pic && (
                            <img
                                style={{ float: section.right_side_pic ? 'right' : 'left', height: '20em', padding: '10px', maxWidth: '55em', marginLeft: '5px' }}
                                src={`${process.env.PUBLIC_URL}/assets/projects/${section.pic}`}
                                className="br20 p2"
                                alt={section.label || `Phase ${index + 1}`}
                            />
                        )}
                        {section.link && section.pic && (
                            <a
                                className="ml-5"
                                style={{ float: section.right_side_pic ? 'right' : 'left' }}
                                href={`${section.link}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/projects/${section.pic}`}
                                    style={{ height: '20em', padding: '10px', maxWidth: '55em' }}
                                    alt={`${section.label} Link` || `Phase ${index + 1} Link`}
                                />
                            </a>
                        )}
                        {section.vid && (
                            <iframe
                                style={{ float: section.right_side_pic ? 'right' : 'left', height: '20em', padding: '10px', maxWidth: '55em' }}
                                className="video-box mr-3"
                                height="auto"
                                autoPlay={false}
                                src={getIframeSrcForYouTube(section.vid)}
                                title={section.label || `Phase ${index + 1} Video`}
                            />
                        )}
                        {section.paragraphs?.map((p, index) => (
                            <div key={`paragraph-${index}`} className="mt-5" style={{ marginLeft: '25px' }}>
                                {!p.bold && !p.h2 && !p.h3 && !p.h4 && <p>{p.text}</p>}
                                {p.bold && <b>{p.text}</b>}
                                {p.h2 && <h2>{titleCaps(p.text)}</h2>}
                                {p.h3 && <h3>{titleCaps(p.text)}</h3>}
                                {p.h4 && <h4>{titleCaps(p.text)}</h4>}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="col-xs-12 text-danger mt-3 mb-3">
                <h4>Stretch before any physically demanding work and stay hydrated!</h4>
            </div>
        </div>
    );
};

const ProjectView = () => {
    const [projects, setProjects] = useState([]);
    const [featuredProject, setFeaturedProject] = useState(null);
    const [isSmallView, setIsSmallView] = useState(window.innerWidth <= 600);
    const [collapseNav, setCollapseNav] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        setLoading(true); // We'll set this to false immediately
        try {
            const processedProjects = [... projectData.data].reverse();
            setProjects(processedProjects);

            const params = new URLSearchParams(location.search);
            const idFromQuery = params.get('articleId');

            let initialFeaturedProject = null;
            if (idFromQuery) {
                initialFeaturedProject = processedProjects.find(proj =>{
                    let projName = getSlug(proj.name);
                    return projName === idFromQuery
                })
            }

            setFeaturedProject(initialFeaturedProject || processedProjects[0]);
            console.log("Featured project state updated:", initialFeaturedProject || processedProjects[0]); // Add this log
            setError(null); // Clear any previous errors
        } catch (e) {
            setError(e);
            console.error("Error processing projects:", e);
            setFeaturedProject(null);
            setProjects([]); // Clear projects on error
        } finally {
            setLoading(false);
        }
    }, [location.search]);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallView(window.innerWidth <= 400);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array means this effect runs only on mount and cleanup on unmount

    const handleProjectClick = (project) => {
        let path = setLinkWithQueryString('projects', project.name)
        window.history.pushState({}, '', path);
        if (isSmallView) {
            setCollapseNav(true); // Collapse the navigation on mobile
        }
    };

    const renderMainContent = (item) => {
        console.log("PROJECT: renderMainContent rendering with item:", item);
        if (!item) {
            return <div className="col-xs-12 text-white"><h3>Select a Project</h3></div>;
        }

        if (loading) {
            return <div>Loading Projects...</div>;
        }

        if (error) {
            return <div>Error loading projects: {error.message}</div>;
        }

        const projectSlug = getSlug(item.name);

        console.log("PROJECT: renderMainContent: Item data looks good, proceeding with rendering details.");

        return (
            <div key={projectSlug} className="col-xs-12 col-lg-9" id={getSlug(item.name)}>
                <div className="col-xs-12 mt-3 text-center">
                    <h6 className="text-danger">
                        <b>This is </b>
                        {!isSmallView &&
                            <b> a chronicle of projects Arthur and I worked on...</b>
                        }
                        <b>not a recommendation of how anyone should do anything.</b>
                    </h6>
                </div>
                <h5 className="mb-0">
                    <div className="row blog-header align-items-center"> {/* Keep align-items-center */}
                        <div className="col-xs-12 col-lg-8 text-center"> {/* Adjusted colspan */}
                            <h3>
                                {titleCaps(item.name)}
                            </h3>
                        </div>
                        <div className="col-xs-12 col-lg-4 text-right"> {/* Container for button and date on small screens */}
                            <div className="row align-items-center">
                                <div className="col-xs-6 text-left" >
                                    <span className="mx-2 ">
                                        <button className="btn btn-info btn-xs mb-2" onClick={(event) => {
                                            event.stopPropagation();
                                            const link = setCopiedLink('projects', item.name);
                                            navigator.clipboard.writeText(link)
                                                .then(() => console.log('Link copied to clipboard ' + link))
                                                .catch(err => console.error('Failed to copy link: ', err));
                                        }}>
                                            <i className="fa fa-link"></i> <b>Link</b>
                                        </button>
                                    </span>
                                </div>
                                <div className="col-xs-6 text-right" >
                                        {!isSmallView &&
                                            <span className="my-0">
                                                <p className="">Posted: {item.pub_date}</p>
                                            </span>
                                        }
                                        {isSmallView &&
                                            <span className="blog-date">
                                                <p className="">Posted: {item.pub_date}</p>
                                            </span>
                                        }
                                </div>
                            </div>
                        </div>
                    </div>
                </h5>
                <hr />
                <div className="row">
                    <div className="col-xs-12 text-center mb-5 mt-5">
                        {item.header_pic && (
                            <img className="br20" src={`${process.env.PUBLIC_URL}/assets/projects/${item.header_pic}`} style={{ height: '20em' }} alt={item.name} />
                        )}
                        {item.link && !item.header_pic && (
                            <h3><a href={item.link} target="_blank" rel="noopener noreferrer">[LINK]</a></h3>
                        )}
                        {item.link && item.header_pic && (
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <img className="br20" src={`${process.env.PUBLIC_URL}/assets/projects/${item.header_pic}`} style={{ height: '20em', marginLeft: '3em' }} alt={item.name} />
                            </a>
                        )}
                    </div>
                    {item.about && (
                        <div className="col-xs-12 mt-3 text-center">
                            <h4 className="text-white">{item.about}</h4>
                        </div>
                    )}
                    <hr/>
                    <ProjectToolsMaterials featuredProject={item} />
                    <hr/>
                    <ProjectPhases featuredProject={item} />
                </div>
            </div>
        );
    };

    if (loading) {
        return <div className="container border2px br20 text-white">Loading projects...</div>;
    }

    if (error) {
        return <div className="container border2px br20 text-white">Error loading projects: {error.message}</div>;
    }

    return (
        <div className="container border2px br20 text-white">
            <div className="row">
                <div className="col-xs-12">
                    <h2 className="text-white">DIY Projects</h2>
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

                        <div className="col-xs-12">
                            {(projects && projects.length && !loading && !error && (!collapseNav || !isSmallView)) &&
                                projects.map((project) => (
                                    <ListItem
                                        key={project.name}
                                        item={project}
                                        isSelected={featuredProject && project.name === featuredProject.name}
                                        onItemClick={handleProjectClick}
                                        titleKey="name"
                                        thumbnailKey="header_pic"
                                        descriptionKey="about"
                                        thumbnailPrefix="/assets/projects/"
                                        pageBase="projects"
                                    />
                                ))}
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-lg-9">
                    {renderMainContent(featuredProject)}
                </div>
            </div>
        </div>
    );
};


export default ProjectView;