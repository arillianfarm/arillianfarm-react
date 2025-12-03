// snapshot.js

module.exports = {
    // The `routes` array is mandatory for react-snapshot
    // It specifies which paths (in addition to the default '/')
    // should be visited and pre-rendered.
    routes: [
        '/', // Ensure the root path is included
        '/videos',
        '/recipes',
        '/projects',
        '/blog',
        '/about',
        '/books',
        '/pictures',
        '/privacy-policy',
        '/terms-of-service',
        '/farm-sitting',
        '/rent-1110-mill-ave',
        '/apply',
        // Add all your dynamic article and recipe paths here:
        // E.g., '/recipes/classic-lasagna', '/blog/my-favorite-chicken'
    ],
    // The default base path is '/', which is correct for your setup.
};