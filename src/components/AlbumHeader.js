import React from 'react';
import { titleCaps } from '../utils';

const albumCovers = [
    { name: "new", pic:"./assets/headerPictures/android-chrome-192x192.png" },
    { name: "chickens", pic:"./favicons/android-chrome-192x192.png" },
    { name: "dogs", pic:"./assets/headerPictures/xena-android-chrome-192x192.png" },
    { name: "gardens", hide_video_view: true, pic:"./assets/headerPictures/arti-android-chrome-192x192.png" },
    { name: "goats", pic:"./assets/headerPictures/tandmg-android-chrome-192x192.png" },
    { name: "sky", hide_video_view: true, pic:"./assets/android-chrome-192x192.png" },
    { name: "wildlife", pic:"./assets/headerPictures/pic-android-chrome-192x192.png" }
];

const goToAlbum = function(albumName, albumType){
    console.log("move this function to util and pass it in or something");
};

const AlbumHeader = ({ currentAlbum, albumType = 'videos' }) => {
    return (
        <div className="container">
            <div className="row text-center small-hide">
                <div
                    className={`col-xs-12 col-lg-8 ${
                        albumType === 'videos' ? 'col-lg-offset-2' : 'col-lg-offset-1'
                    }`}
                    style={{ display: 'flex' }}
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
                            <img className="br20" src={album.pic} height="100em" alt={album.name} />
                            <p className="text-white text-small text-center">{titleCaps(album.name)}</p>
                      </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="row text-center big-hide album-header-inner"> {/* Added class */}
                <div className="col-xs-12 x-scroller" style={{ display: 'flex', justifyContent: 'center' }}> {/* Added inline styles */}
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
                            <img className="small-round" src={album.pic} alt={album.name} />
                        )}
                            <p className="text-white text-center">{album.name}</p>
                      </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AlbumHeader;