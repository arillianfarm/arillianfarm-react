// src/pages/Rent1110.js

import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropertyImageGallery from '../components/PropertyImageGallery';

const APPLICATION_ROUTE = "/apply"; // The new universal application route



const Rent1110 = () => {
    const location = useLocation();

    // Determine the rental price and the application link based on the current URL
    const { rentalPrice, applicationLink } = useMemo(() => {
        const params = new URLSearchParams(location.search);
        const rateId = params.get('formId');

        // Determine price based on query string:
        // '1' for $2,100.00 /month (Friends/Family)
        // anything else (null, etc.) for $2,350.00 /month (Market Rate)

        let price = '$2,350.00 /month'; // Default to Market Rate
        let linkQuery = ''; // Default application link query

        if (rateId === '1') {
            price = '$2,100.00 /month'; // Set Friends/Family rate
            linkQuery = '?formId=1'; // Application link gets the query string
        }
        // Note: For the market rate ($2,350.00), the linkQuery remains empty ("")
        // for subtlety, as requested.

        return {
            rentalPrice: price,
            applicationLink: `${APPLICATION_ROUTE}${linkQuery}`
        };
    }, [location.search]); // Depend only on the search portion of the URL

    const propertyFeatures = [
        { icon: '🎓', text: 'Directly across from **ASU** on **Mill Ave**.' },
        { icon: '🚶', text: '**Light rail, restaurants, and shopping** within walking distance.' },
        { icon: '🐾', text: '**Pets allowed** (upon approval).' },
        { icon: '🛏️', text: 'Spacious **3 Bed / 2 Bath** House.' },
        { icon: '📅', text: 'Available starting **11/05/2025**.' },
    ];

    return (
        <div className="container p-4 my-5">
            <header className="text-center mb-5">
                <h1 className="display-4 text-white">House For Rent: 1110 S Mill Ave, Tempe, AZ</h1>
                <p className="lead">Prime Location Directly Across from ASU!</p>
            </header>

            <div className="card shadow-lg mb-5">
                <div className="card-body">
                    <div className="row">
                        {/* Placeholder for images/slideshow */}
                        <div className="col-md-7 mb-4">
                            <h2 className="text-primary">Property Gallery</h2>
                            <p className="text-muted"></p>
                            <div className="col-md-7 mb-4">
                                <PropertyImageGallery />  {/* <-- Use the component here! */}
                            </div>
                        </div>

                        <div className="col-md-5">
                            <h2 className="text-success">Monthly Rent:</h2>
                            <p className="display-3 fw-bold text-success mb-4">{rentalPrice}</p>

                            <h3 className="mb-3">Key Features:</h3>
                            <ul className="list-unstyled">
                                {propertyFeatures.map((feature, index) => (
                                    <li key={index} className="mb-2 fs-5">
                                        <span className="me-2">{feature.icon}</span>
                                        <span dangerouslySetInnerHTML={{ __html: feature.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                    </li>
                                ))}
                            </ul>

                            <hr />
                            <h3 className="mt-4">Ready to Apply?</h3>
                            <p>Click below to start your rental application:</p>
                            <Link
                                to={applicationLink} // Use the generated link with the correct query string
                                className="btn btn-danger btn-lg w-100"
                            >
                                Go To Rental Application
                            </Link>
                            <p className="mt-2 text-center small text-muted">A separate landing page will open.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="mt-5">
                <h2 className="text-center">More Information</h2>
                <p className="text-center">[Detailed floor plan, neighborhood info, etc. goes here]</p>
            </section>
        </div>
    );
};

export default Rent1110;