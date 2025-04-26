import React from 'react';

function HeaderPic() {
    const headerPicFiles = [
        { name: "dogsPool.png" , small_hide: true },
        { name: "sammyBomb.png", small_hide: true },
        { name: "Sunflower.png", small_hide: true },
        { name: "waterGarden.png", small_hide: true },
        { name: "cooking.png", small_hide: true },
        { name: "goatsLeaf.png", small_hide: true },
        { name: "chickenSunrise.png", },
        { name: "prettyRadish.png", small_hide: true },
        { name: "skyChoke.png", small_hide: true },
        { name: "weldingArthur.png" , small_hide: true },
    ];

    return (
        <div className="container">
            <div className="row ">
                <div className="col-xs-12">
                    <div className="row">
                        {headerPicFiles && headerPicFiles.length > 0 &&
                            headerPicFiles.map((pic, index) => (
                                <div className="col-lg-1 col-sm-3 mx-auto">
                                    <img
                                        key={`${pic.small_hide}_${index}`}
                                        src={`assets/headerPictures/${pic.name}`}
                                        className={pic.small_hide ? 'small-hide' : ''}
                                        style={{ width: 'fit-content', height: '9em' }}
                                        alt="" // Add an empty alt attribute for accessibility if the image is decorative
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderPic;