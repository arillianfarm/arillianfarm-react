import React from 'react';

function HeaderPic() {
    const headerPicFiles = [
        { name: "dogsPool.png" },
        { name: "sammyBomb.png", small_hide: true },
        { name: "Sunflower.png", small_hide: true },
        { name: "waterGarden.png", small_hide: true },
        { name: "cooking.png", small_hide: true },
        { name: "goatsLeaf.png" },
        { name: "chickenSunrise.png", small_hide: true },
        { name: "prettyRadish.png" },
        { name: "skyChoke.png", small_hide: true },
        { name: "weldingArthur.png" },
    ];

    return (
        <div className="container">
            <div className="row text-center">
            {headerPicFiles && headerPicFiles.length > 0 &&
                headerPicFiles.map((pic, index) => (
                    <div className="col-lg-1 col-sm-3">
                        <img
                            key={index}
                            src={`assets/headerPictures/${pic.name}`}
                            className={pic.small_hide ? 'small-hide' : ''}
                            style={{ width: 'auto', height: '9em' }}
                            alt="" // Add an empty alt attribute for accessibility if the image is decorative
                        />
                    </div>
                ))}


            </div>
        </div>
    );
}

export default HeaderPic;