import React from 'react';

function HeaderPic() {
    const headerPicFiles = [
        { name: "dogsPool.webp" , small_hide: true },
        { name: "sammyBomb.webp", small_hide: true },
        { name: "Sunflower.webp", small_hide: true },
        { name: "waterGarden.webp", small_hide: true },
        { name: "cooking.webp", small_hide: true },
        { name: "goatsLeaf.webp", small_hide: true },
        { name: "chickenSunrise.webp", },
        { name: "prettyRadish.webp", small_hide: true },
        { name: "skyChoke.webp", small_hide: true },
        { name: "weldingArthur.webp" , small_hide: true },
    ];

    return (
        <div className="container">
            <div className="row ">
                <div className="col-xs-12">
                    <div className="row">
                        {headerPicFiles && headerPicFiles.length > 0 &&
                            headerPicFiles.map((pic, index) => (
                                <div className="col-lg-1 col-sm-3 mx-auto" key={`${index}-${pic.name}`}>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/headerPictures/${pic.name}`}
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