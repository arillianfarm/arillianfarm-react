import React from 'react';
import { titleCaps } from '../utils';

const albumCovers = [
    { name: "new", thumbnail:"assets/headerPictures/android-chrome-192x192.png" },
    { name: "chickens", thumbnail:"assets/favicons/android-chrome-192x192.png" },
    { name: "dogs", thumbnail:"assets/faviconsXena/android-chrome-192x192.png" },
    { name: "gardens", hide_video_view: true, thumbnail:"assets/faviconsArtichoke/android-chrome-192x192.png" },
    { name: "goats", thumbnail:"assets/faviconsTotesMcGoats/android-chrome-192x192.png" },
    { name: "sky", hide_video_view: true, thumbnail:"assets/android-chrome-192x192.png" },
    { name: "wildlife", thumbnail:"assets/pictures/android-chrome-192x192.png" }
];

let currentAlbum

 const goToAlbum = function(albumName, albumType){
    console.log("move this function to util and pass it in or something")
 };

const AlbumHeader = ({ currentAlbum, albumType = 'videos' }) => {
    return (
        <>
            <div className="row text-center small-hide">
                <div
                    className={`col-xs-12 col-lg-8 ${
                        albumType === 'videos' ? 'col-lg-offset-2' : 'col-lg-offset-1'
                    }`}
                    style={{ display: 'inline-flex' }}
                >
                    {albumCovers.map((album, index) => (
                        <div
                            key={index}
                            className={`text-center ml-2 mr-2 cursPoint ${
                                album.name === currentAlbum ? 'highlighted' : ''
                            }`}
                            onClick={() => goToAlbum(album.name, albumType)}
                            style={{ padding: '10px' }}
                            hidden={albumType !== 'pictures' && album.hide_video_view}
                        >
              <span>
                <img className="br20" src={album.thumbnail} height="100em" alt={album.name} />
              </span>
                            <p className="text-white text-small text-center">{titleCaps(album.name)}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="row text-center big-hide">
                <div className="col-xs-12 x-scroller">
                    {albumCovers.map((album, index) => (
                        <div
                            key={index}
                            className={`text-center cursPoint ${
                                album.name === currentAlbum ? 'highlighted' : ''
                            }`}
                            onClick={() => goToAlbum(album.name, albumType)}
                            style={{ padding: '10px' }}
                            hidden={albumType !== 'pictures' && album.hide_video_view}
                        >
              <span>
                {currentAlbum && (
                    <img className="small-round" src={album.thumbnail} alt={album.name} />
                )}
              </span>
                            <p className="text-white text-center">{album.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AlbumHeader;