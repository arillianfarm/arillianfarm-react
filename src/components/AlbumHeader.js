import React from 'react';
import { titleCaps } from '../utils';

// Assuming albumCovers and goToAlbum are defined elsewhere and accessible
// (e.g., in a context, a shared utility, or directly within the parent components)

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
//     // $rootScope.data.loading = true;
//     // $timeout(function(){
//         let albumNameTemp = albumName.toLowerCase();
//         let filteredList = [];
//         let currentAlbum = albumName.toLowerCase();
//         switch (albumType){
//             case 'videos':
//                 filteredList = $scope.videosRaw.filter((item)=>item.albums?.indexOf(albumNameTemp)>-1);
//                 $rootScope.data.videos = filteredList;
//                 break;
//             case 'pictures':
//                 filteredList = $scope.picturesRaw.filter((item)=>item.albums?.indexOf(albumNameTemp)>-1);
//                 $rootScope.data.pictures = filteredList;
//                 break;
//             default:
//                 break;
//         }
//         $rootScope.data.loading = false;
//     // },10);
 };

// Assuming goToAlbum is a function defined elsewhere that takes albumName and albumType
// (you'll need to adapt your Angular 1 function to React's state management)
// const goToAlbum = (albumName, albumType) => { ... };

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