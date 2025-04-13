import React from 'react';
import '../Footer.css';
import { Link } from 'react-router-dom'; // Import Link

function Footer() {
    return (
        <footer className="main-footer">
            <p>&copy; {new Date().getFullYear()} Arillian Farm. All Rights Reserved.</p>
            <p>
                <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-service">Terms of Service</Link>
            </p>
        </footer>
    );
}

export default Footer;

