import React from 'react';
import { titleCaps, applyAlbumFilter } from '../utils';


const albumCovers = [
    { name: "new", pic:"/assets/headerPictures/android-chrome-192x192.png" },
    { name: "chickens", pic:"/favicons/android-chrome-192x192.png" },
    { name: "dogs", pic:"/assets/headerPictures/xena-android-chrome-192x192.png" },
    { name: "garden", hide_video_view: true, pic:"./assets/headerPictures/arti-android-chrome-192x192.png" },
    { name: "goats", pic:"/assets/headerPictures/tandmg-android-chrome-192x192.png" },
    { name: "sky", hide_video_view: true, pic:"/assets/android-chrome-192x192.png" },
    { name: "wildlife", pic:"/assets/headerPictures/pic-android-chrome-192x192.png" }
];


const AlbumHeader = ({ currentAlbum, albumType = 'videos' , onAlbumSelect, unfilteredList = []}) => {
    return (
        <div className="container">
            <div className="row text-center small-hide">
                <div
                    className={`mx-auto ${
                        albumType === 'videos' ? 'col-lg-6' : 'col-lg-9'
                    }`}
                    style={{ display: 'flex' }}
                >
                    {albumCovers.map((album, index) => (
                        <div
                            key={index}
                            className={`text-center ml-2 mr-2 cursPoint ${
                                album.name === currentAlbum ? 'highlighted' : ''
                            }`}
                            onClick={() => onAlbumSelect(album.name)}
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
            <div className="row text-center big-hide album-header-inner">
                <div className="col-xs-12 x-scroller" style={{ justifyContent: 'center' }}>
                    {albumCovers.map((album, index) => (
                        <div
                            key={index}
                            className={`text-center cursPoint ${
                                album.name === currentAlbum ? 'highlighted' : ''
                            }`}
                            onClick={() => onAlbumSelect(album.name)}
                            style={{ padding: '10px' }}
                            hidden={albumType !== 'pictures' && album.hide_video_view}
                        >
                      <span style={{ height: '65px', width: '65px', display: 'inline-block' }}>
                            <img className="br20" src={album.pic} height="60px" width="60px" alt={album.name} />
                            <p className="text-white text-small text-center">{titleCaps(album.name)}</p>
                      </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AlbumHeader;