import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectHandler() {
    const navigate = useNavigate();

    useEffect(() => {
        const redirectPath = sessionStorage.getItem('redirectPath');
        if (redirectPath) {
            sessionStorage.removeItem('redirectPath');
            // Use navigate to go to the stored path
            // Be careful with the path structure here depending on your BrowserRouter basename
            // You might need to strip the repo base path from redirectPath
            const repoBasePath = "/arillianfarm-react"; // Needs to match the 404.html

            // Ensure the path we navigate to is relative to the BrowserRouter's basename
            let internalPath = redirectPath;
            if (redirectPath.startsWith(repoBasePath)) {
                internalPath = redirectPath.substring(repoBasePath.length);
            }
            // If the path is just the base path without a trailing slash, navigate to '/'
            if (internalPath === "" || internalPath === "/") {
                internalPath = "/";
            }


            console.log("Redirecting to:", internalPath); // Log for debugging
            navigate(internalPath, { replace: true });
        }
    }, [navigate]); // Dependency array

    // This component doesn't render anything itself
    return null;
}

export default RedirectHandler;