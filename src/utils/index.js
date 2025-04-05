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
    // This logic is based on your Angular HTML using ng-class="{'border2px': !smallView}"
    // and likely aiming for a smaller width on small screens.
    return smallView ? '95%' : '100%'; // Or adjust the '100%' to your default desired width
};