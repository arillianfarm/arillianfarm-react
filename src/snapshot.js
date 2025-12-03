// snapshot.js
module.exports = {
    // The `routes` array is mandatory for react-snapshot
    // It specifies which paths (in addition to the default '/' and any static routes)
    // should be visited and pre-rendered.
    routes: [
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
        // --- Add specific dynamic paths here ---
        // EXAMPLE: If your book 'unFETTERed' is a project/blog post, list the final URL:
        // '/blog/unfettered-memoir',
        // '/recipes/my-favorite-veggie-burger',
        // -------------------------------------
    ],
    // The default base path is '/', which is correct for your setup.
};