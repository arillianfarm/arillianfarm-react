import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Assuming you're using React Router

const ListItem = ({ item, isSelected, onItemClick, titleKey, thumbnailKey, descriptionKey, thumbnailPrefix }) => {
    const location = useLocation();

    const handleClick = () => {
        onItemClick(item);
    };

    const assembleHashLink = (currentItem) => {
        if (!currentItem || !currentItem[titleKey]) return '';
        const path = location.pathname;
        const base = window.location.origin + path + '#!';
        const hash = currentItem[titleKey].toLowerCase().split(' ').join('-').replace("'", "");
        return `${base}#${hash}`;
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => console.log('Link copied to clipboard'))
            .catch(err => console.error('Failed to copy link: ', err));
    };

    const handleCopyLink = (event) => {
        event.stopPropagation(); // Prevent onItemClick when copying link
        const link = assembleHashLink(item);
        copyToClipboard(link);
    };

    return (
        <div
            className={`col-xs-12 border2px br20 m-2 cursPoint ${isSelected ? 'highlighted' : ''}`}
            onClick={handleClick}
        >
            <div className="row">
                <div className="col-xs-12">
                    <h4>
                        <Link to="#" className="nav-link text-white">{item[titleKey]}</Link>
                    </h4>
                </div>
                <div className="col-lg-12">
                    {thumbnailKey && item[thumbnailKey] && (
                        <img
                            className="br20 mb-3 mr-3"
                            style={{ float: 'left', width: '75px', height: '75px', objectFit: 'cover' }}
                            src={`${thumbnailPrefix || ''}${item[thumbnailKey]}`}
                            alt={item[titleKey]}
                        />
                    )}
                    <div>
                        {descriptionKey && item[descriptionKey] && <p>{typeof descriptionKey === 'function' ? descriptionKey(item) : item[descriptionKey]}</p>}
                        <div className="text-white cursPoint">
                            {/* Specific action button for Recipes (can be customized later) */}
                            {titleKey === 'name' && (
                                <button className="btn btn-light btn-xs" onClick={(event) => { event.stopPropagation(); /* Prevent selection */; /* Your recipe specific action */ }}>
                                    <i className="fa fa-utensils"></i> <b>Recipe</b>
                                </button>
                            )}
                            <button className="btn btn-info btn-xs ml-1" onClick={handleCopyLink}>
                                <i className="fa fa-link"></i> <b>Link</b>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListItem;