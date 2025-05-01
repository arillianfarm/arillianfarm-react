// src/utils/index.js

export const titleCaps = (str) => {
    if (!str) return '';
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export const trunc = (str, length = 50) => {
    if (!str || !length || str.length <= length) return str;
    return `${str.substring(0, length)}...`;
};

export const getIframeSrcForYouTube = (youtubeID) => {
    if (!youtubeID) return '';
    return `https://www.youtube.com/embed/${youtubeID}?autoPlay=0`;
};

export const calculateAlbumContainerSize = (smallView) => {
    return smallView ? '95%' : '100%';
};

export const applyAlbumFilter = (contentList, albumName) => {
    let albumList = contentList.filter((item)=>item.albums?.indexOf(albumName)>-1);
    return albumList;
};

export const getSlug = (unsanitizedField = "") => {
    const sanitizedRecipeName = unsanitizedField
        .toLowerCase()             // Convert to lowercase
        .split(' ')                 // Split into words by spaces
        .join('-')                  // Join words with hyphens
        .replace(/[^a-z0-9-]/g, ''); // Remove any character that is NOT a lowercase letter (a-z), a digit (0-9), or a hyphen (-)
    return sanitizedRecipeName;
};

export const setCopiedLink = (viewName, articleName) => {
    const sanitizedArticleName = getSlug(articleName);
    const path = `/${viewName}/${sanitizedArticleName}`;
    const fullLink = window.location.origin + path;
    return fullLink;
};