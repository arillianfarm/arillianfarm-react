// src/utils/index.js

export const titleCaps = (str) => {
    if (!str) return '';
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export const trunc = (str, length) => {
    if (!str || !length || str.length <= length) return str;
    return `${str.substring(0, length)}...`;
};

export const getIframeSrcForYouTube = (youtubeID) => {
    if (!youtubeID) return '';
    return `https://www.youtube.com/embed/${youtubeID}?autoplay=0`;
};

export const calculateAlbumContainerSize = (smallView) => {
    return smallView ? '95%' : '100%';
};

export const applyAlbumFilter = (contentList, albumName) => {
    let albumList = contentList.filter((item)=>item.albums?.indexOf(albumName)>-1);
    return albumList;
};

export const getLatestRecipeSlug = (recipe) => {
    return recipe.name.toLowerCase().replace(/ /g, '-');
};