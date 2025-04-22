import React, {useEffect, useState} from 'react';
import { calculateAlbumContainerSize } from '../utils';
import AlbumHeader from './AlbumHeader';

const PicturesView = () => {
    const [pics, setPics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [smallView, setSmallView] = useState(window.innerWidth <= 600);
    useEffect(() => {
        const fetchPics = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('./pageData/pictures.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPics(data.data);
            } catch (e) {
                setError(e);
                console.error("Error fetching pics:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchPics();

        const handleResize = () => {
            setSmallView(window.innerWidth <= 600);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[]);

useEffect(() => {
    const handleResize = () => {
        setSmallView(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);

const containerStyle = {
    maxWidth: calculateAlbumContainerSize(smallView),
};

if (loading) {
    return <div className="container text-center text-white br20">Loading video albums...</div>;
}

if (error) {
    return <div className="container text-center text-white br20">Error loading video albums: {error.message}</div>;
}

    return (
        <div className="pictures-view">
            <div className="row text-center">
                <div className="col-xs-12">
                    <h4 className="text-white">Picture Albums</h4>
                    < AlbumHeader albumType="pictures" />
                </div>
            </div>
            <hr />
            <div className="row text-center">
                {pics.map((pic, index) => (
                    <div key={index} className="col-xs-12 mb-5">
                        <h4 className="text-white">{pic.caption}</h4>
                            <blockquote
                                className="imgur-embed-pub"
                                lang="en"
                                data-id={pic.imagur_id}
                            >
                                <a href={`https://imgur.com/${pic.imagur_id}`}></a>
                            </blockquote>
                        <script async src="//s.imgur.com/min/embed.js" charSet="utf-8"></script>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default PicturesView;