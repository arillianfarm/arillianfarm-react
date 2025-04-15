import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Correct imports for these
import { faYoutube } from '@fortawesome/free-brands-svg-icons'; // YouTube is a brand icon
import '../Footer.css';


function ThumbNails() {
    return (
        <div className="row thumb-nails">
            <div className="col-xs-12 text-center">
                <a
                    className="btn btn-primary btn-sm pointer email-button thumb-nails-buttons"
                    style={{ fontWeight: 'bold' }}
                    href="mailto:arillianfarm@gmail.com"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a
                    href="https://www.youtube.com/channel/UC7meaKCW2UsPMQOSeHV5lKQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-danger btn-sm youtube-button thumb-nails-buttons"
                >
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a
                    className="btn btn-success btn-sm pointer gofundme-button thumb-nails-buttons"
                    style={{ fontWeight: 'bold' }}
                    href="https://gofund.me/335c2958"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Go Fund Me
                </a>
                <a
                    className="btn btn-warning btn-sm pointer zazzle-button thumb-nails-buttons"
                    href="https://www.zazzle.com/collections/fall_2024-119118606070157890"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faShoppingCart} />
                </a>
            </div>
        </div>
    );
}

export default ThumbNails;