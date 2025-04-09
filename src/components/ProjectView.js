import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import { titleCaps, trunc } from '../utils';
import { useLocation } from 'react-router-dom';

const ProjectView = () => {
    const [projects, setProjects] = useState([]);
    const [featuredProject, setFeaturedProject] = useState(null);
    const [isSmallView, setIsSmallView] = useState(window.innerWidth <= 600); // Adjust breakpoint
    const [collapseNav, setCollapseNav] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('./pageData/projects.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProjects(data.data); // Assuming your JSON has a "projects" array
            } catch (e) {
                setError(e);
                console.error("Error fetching projects:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();

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
            const projectNameFromHash = hash.substring(2).replace(/-/g, ' ').replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase();
            const foundProject = projects.find(project =>
                project.name.toLowerCase().replace(/ /g, '-').replace("'", "") === projectNameFromHash
            );
            if (foundProject) {
                setFeaturedProject(foundProject);
                window.scrollTo(0, 0);
            }
        } else if (projects.length > 0 && !featuredProject) {
            setFeaturedProject(projects[0]);
        }
    }, [location.hash, projects, featuredProject]);

    const handleProjectClick = (project) => {
        setFeaturedProject(project);
        window.location.hash = `!#${project.name.toLowerCase().replace(/ /g, '-').replace("'", "")}`;
    };

    const renderMainContent = (item) => {
        if (!item) {
            return <div className="col-xs-12 text-white"><h3>Select a Project</h3></div>;
        }
        return (
            <div className="col-xs-12 col-lg-9" id={item.name.toLowerCase().replace(/ /g, '-')}>
                <div className="row blog-header">
                    <div className="col-xs-9">
                        <h2>{titleCaps(item.name)}</h2>
                    </div>
                    <div className="col-xs-3 pull-right text-right mt-3">
                        <h5 className="">Posted: {item.pub_date}</h5>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-xs-12 text-center mb-5 mt-5">
                        {item.header_pic && (
                            <img className="br20" src={`./assets/projects/${item.header_pic}`} style={{ height: '20em' }} alt={item.name} />
                        )}
                        {item.link && !item.header_pic && (
                            <h3><a href={item.link} target="_blank" rel="noopener noreferrer">[LINK]</a></h3>
                        )}
                        {item.link && item.header_pic && (
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <img className="br20" src={`./assets/projects/${item.header_pic}`} style={{ height: '20em', marginLeft: '3em' }} alt={item.name} />
                            </a>
                        )}
                    </div>
                    {item.about && (
                        <div className="col-xs-12 mt-3">
                            <h4 className="text-muted">{item.about}</h4>
                        </div>
                    )}
                    {/* ... You'll need to render tools, materials, phases etc. here based on your HTML ... */}
                    <div>{JSON.stringify(item)}</div> {/* Temporary display of all data */}
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
                                <a>All Projects</a>
                                {isSmallView && (
                                    <button className="btn btn-large btn-primary" onClick={() => setCollapseNav(!collapseNav)}>
                                        <i className="fa fa-list"></i>
                                    </button>
                                )}
                            </h3>
                        </div>
                        {(!collapseNav || !isSmallView) &&
                            projects.map((project) => (
                                <ListItem
                                    key={project.name}
                                    item={project}
                                    isSelected={featuredProject && project.name === featuredProject.name}
                                    onItemClick={handleProjectClick}
                                    titleKey="name"
                                    thumbnailKey="header_pic"
                                    descriptionKey="about"
                                    thumbnailPrefix="./assets/projects/"
                                />
                            ))}
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