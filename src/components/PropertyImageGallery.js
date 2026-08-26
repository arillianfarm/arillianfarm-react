import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define all property images and their captions
const images = [
    { src: '/assets/millRental/mill-exterior-2.webp', caption: 'Front of House' },
    { src: '/assets/millRental/mill-exterior-3.png', caption: 'Front Porch' },
    { src: '/assets/millRental/mill-exterior-6.png', caption: 'View From Front Yard' },
    { src: '/assets/millRental/mill-exterior-8.png', caption: 'Back of House' },
    { src: '/assets/millRental/mill-exterior-1.png', caption: 'Back Patio' },
    { src: '/assets/millRental/mill-exterior-5.png', caption: 'Patio Shared With Back House' },
    { src: '/assets/millRental/mill-exterior-7.png', caption: 'Driveway' },
    { src: '/assets/millRental/mill-exterior-4.png', caption: 'Side of House' },
    { src: '/assets/millRental/mill-interior-1.png', caption: 'Kitchen' },
    { src: '/assets/millRental/mill-interior-4.png', caption: 'Kitchen, Living Room' },
    { src: '/assets/millRental/mill-interior-6.png', caption: 'Main Bedroom' },
    { src: '/assets/millRental/mill-interior-7.png', caption: 'Private Bath for Main Bedroom' },
    { src: '/assets/millRental/mill-interior-3.png', caption: 'Bedroom 2' },
    { src: '/assets/millRental/mill-interior-9.png', caption: 'Bedroom 2' },
    { src: '/assets/millRental/mill-interior-5.png', caption: 'Bedroom 3' },
    { src: '/assets/millRental/mill-interior-8.png', caption: 'Shared Bathroom' },
    { src: '/assets/millRental/mill-interior-2.png', caption: 'Washer Drier Unit' },
    { src: '/assets/millRental/mill-layout.png', caption: 'Floor Plan' },
];

const PropertyImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLast = currentIndex === images.length - 1;
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const currentImage = images[currentIndex];

    return (
        // Using Bootstrap container structure for max width and centering
        <div className="container px-0 mx-auto" style={{ maxWidth: '850px' }}>
            {/* Main Carousel Area - Converted to Bootstrap classes */}
            <div
                className="overflow-hidden rounded-3 shadow-lg mb-4 position-relative"
                // Custom style for responsive height
                style={{ height: '400px', maxHeight: '500px' }}
            >

                {/* Image */}
                <img
                    src={currentImage.src}
                    alt={currentImage.caption}
                    // w-full h-full object-cover -> w-100 h-100 object-fit-cover
                    className="w-100 h-100"
                    // Inline style for transition and object fit
                    style={{ transition: 'opacity 0.5s', objectFit: 'cover' }}
                    loading={currentIndex === 0 ? 'eager' : 'lazy'} // Prioritize first image
                />

                {/* Caption Overlay - Converted to Bootstrap classes */}
                <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-50 p-3 text-white rounded-bottom-3">
                    <p className="h5 fw-bold mb-1">{currentImage.caption}</p>
                    <p className="small text-muted mb-0">
                        {currentIndex + 1} of {images.length}
                    </p>
                </div>

                {/* Left Arrow Button - Converted to positioned Bootstrap button */}
                <button
                    onClick={goToPrevious}
                    className="btn btn-dark opacity-75 rounded-circle position-absolute top-50 start-0 translate-middle-y ms-3 border-0"
                    style={{ '--bs-bg-opacity': '.5', padding: '10px' }}
                    aria-label="Previous image"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Right Arrow Button - Converted to positioned Bootstrap button */}
                <button
                    onClick={goToNext}
                    className="btn btn-dark opacity-75 rounded-circle position-absolute top-50 end-0 translate-middle-y me-3 border-0"
                    style={{ '--bs-bg-opacity': '.5', padding: '10px' }}
                    aria-label="Next image"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Thumbnail Navigation - Converted to Bootstrap classes */}
            <div className="d-flex flex-row overflow-auto gap-2 p-2 bg-light rounded-3 shadow-sm">
                {images.map((image, index) => (
                    <div
                        key={index}
                        // Replicating dimensions and transition with inline styles and Bootstrap classes
                        className={`flex-shrink-0 cursor-pointer border border-3 rounded-2 ${
                            index === currentIndex
                                ? 'border-primary shadow-sm' // Active state
                                : 'border-transparent opacity-75' // Inactive state
                        }`}
                        onClick={() => goToSlide(index)}
                        aria-label={`View image: ${image.caption}`}
                        style={{ width: '96px', height: '64px', transition: 'all 0.2s ease-in-out' }}
                    >
                        <img
                            src={image.src}
                            alt={image.caption}
                            className="w-100 h-100 object-fit-cover rounded-1"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertyImageGallery;