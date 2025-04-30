import React, { useState } from 'react';
import { titleCaps } from '../utils'; // Assuming you have titleCaps in your utils

const BooksView = () => {
    const data = {
        unfettered_display_pages:["frontCoverUnfet.jpg", "backCoverUnfet.jpg", "booksignunfet.png" ],
        unfettered_display_page:"frontCoverUnfet.jpg",
        hyperspear_display_pages:["hyperCover1.png", "hyperspear2.png", "hyperspear3.png" ],
        hyperspear_display_page:"hyperCover1.png"
    };

    const [hyperspearDisplayPage, setHyperspearDisplayPage] = useState(data.hyperspear_display_page);
    const [unfetteredDisplayPage, setUnfetteredDisplayPage] = useState(data.unfettered_display_page);

    const setNextDisplayPage = (book) => {
        if (book === 'hyperspear' && data.hyperspear_display_pages) {
            const currentIndex = data.hyperspear_display_pages.indexOf(hyperspearDisplayPage);
            const nextIndex = (currentIndex + 1) % data.hyperspear_display_pages.length;
            setHyperspearDisplayPage(data.hyperspear_display_pages[nextIndex]);
        } else if (data.unfettered_display_pages) {
            const currentIndex = data.unfettered_display_pages.indexOf(unfetteredDisplayPage);
            const nextIndex = (currentIndex + 1) % data.unfettered_display_pages.length;
            setUnfetteredDisplayPage(data.unfettered_display_pages[nextIndex]);
        }
        console.log(`Set next display page for ${book}`);
    };

    return (
        <div className="container border2px br20 mb-5 pb-5">
            <div className="row">
                <div className="col-xs-12">
                    <h2 className="text-white">Books</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-lg-6 mt-0 mb-2 text-center">
                    <div className="text-justify mb-3" onClick={() => setNextDisplayPage('hyperspear')} style={{ cursor: 'pointer' }}>
                        <a href="https://www.amazon.com/dp/B0DPJBCWYW" target="_blank" rel="noopener noreferrer">
                            <img src={`/assets/books/${hyperspearDisplayPage}`} style={{ height: '40em', maxWidth: '30em' }} alt="Hyperspear Cover" />
                        </a>
                        <h4 className="text-white">
                            Three unlikely souls. One mysterious supper club -- And obviously-- a multiverse.
                        </h4>
                        <h4><a href="https://www.amazon.com/dp/B0DPJBCWYW" target="_blank" rel="noopener noreferrer">Enter Hyperspear <i className="fa fa-external-link"></i></a></h4>

                        <p className="large text-white">
                            Fremont, California. A group of strangers, drawn together by a curious online invitation and a longing for fellowship, find themselves sharing a meal in the front yard of a charmingly odd hobby chef and gardener named Jeff.
                            Little does each know, as they settle around Jeff’s picnic table for a bowl of “odd-ball soup”, that this seemingly quiet supper club will serve as their gateway to a mysterious reality bending adventure inside Hyperspear.
                            As our narrators travel beyond the borders of their humble hometown, they are forced to embark on a tumultuous odyssey through a kaleidoscope of wonderlands – where they must battle mystical creatures, unravel hidden secrets, and grapple with the unsettling nature of reality itself.
                            Settle in, tuck your napkin, and enjoy every humor-packed, soul-searching bite of Hyperspear.
                        </p>
                    </div>
                </div>
                <div className="col-xs-12 col-lg-6 text-justified text-white mb-3" onClick={() => setNextDisplayPage('unfettered')} style={{ cursor: 'pointer' }}>
                    <a href="https://www.amazon.com/unFETTERed-Jillian-Fetter/dp/B00U1IJXPE" target="_blank" rel="noopener noreferrer">
                        <img src={`/assets/books/${unfetteredDisplayPage}`} style={{ height: '40em', maxWidth: '30em' }} alt="unFETTERed Cover" />
                    </a>
                    <span style={{ height: '10px', display: 'block' }}></span>
                    <h4 className="">If you like puns and self-deprecating humor...</h4>
                    <h4><a href="https://www.amazon.com/unFETTERed-Jillian-Fetter/dp/B00U1IJXPE" target="_blank" rel="noopener noreferrer">Then You Should Join The Ones and Ones of People Getting unFETTERed <i className="fa fa-external-link"></i></a></h4>
                    <p className="large text-white">UnFettered puts you behind the eyes of a late bloomer with an active imagination, a craving for romance, and a flawed sense of how to appropriately express herself. After twenty-nine years of playing it safe, Jillian steps away from the comfort of her functional life in search of something more. Her quest to define and obtain fulfillment lead her to explore new living situations, dip a toe in the Internet dating scene, battle blood-sucking insects and confront life’s irksome questions: What is a meaningful existence? When is the right time to walk away from love? are cold sores really that bad?</p>
                </div>
                <div className="col-lg-2 col-xs-12"></div>
            </div>
        </div>
    );
};

export default BooksView;