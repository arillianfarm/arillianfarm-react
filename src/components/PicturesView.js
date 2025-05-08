import React, {useEffect, useState} from 'react';
import { calculateAlbumContainerSize, getIframeSrcForYouTube, titleCaps, applyAlbumFilter } from '../utils';
import AlbumHeader from './AlbumHeader';
import data from '../pageData/pictures.json';


const PicturesView = () => {
    const [pics, setPics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [smallView, setSmallView] = useState(window.innerWidth <= 600);
    const [selectedAlbum, setSelectedAlbum] = useState('new');
    const [albumContent, setAlbumContent] = useState([]);


    useEffect(() => {
            setLoading(true);
            try {
                setPics(data.data);
                setAlbumContent(applyAlbumFilter(data.data, 'new'));
            } catch (e) {
                setError(e);
                console.error("Error fetching pics:", e);
            } finally {
                setLoading(false);
            }


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

    const handleAlbumSelect = (album) => {
        console.log(`album clicked ${album}`)
        setSelectedAlbum(album);
        setAlbumContent(applyAlbumFilter(pics, album));
    };

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
                    < AlbumHeader
                        albumType="pictures"
                        unfilteredList={pics}
                        onAlbumSelect={handleAlbumSelect}
                        currentAlbum={selectedAlbum}
                    />
                </div>
            </div>
            <hr />
            <div className="row text-center">
                {albumContent.map((pic, index) => (
                    <div key={`${pic.imagur_id}-${index}`} className="col-xs-12 mb-5">
                        <h4 className="text-white">{pic.caption}</h4>
                        <img className="br20" src={`https://i.imgur.com/${pic.imagur_id}.png`} alt={`${pic.name}`} style={{ maxWidth: '500px', height: 'auto' }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PicturesView;