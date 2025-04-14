import React from 'react';
import { Link } from 'react-router-dom';
import '../About.css';
import Thumbnails from './ThumbNails';


function AboutView() {
    return (
        <div className="container br20 border2px text-white text-justified">
            <div className="row">
                <div className="col-xs-12 text-center">
                    {/* Replace pic-banner directive with an image or component */}
                    <img src="/images/about-banner.jpg" alt="Arillian Farm Banner" className="about-banner" />
                </div>
                <div className="col-xs-12 text-center">
                    <h1>Arillian Farm</h1>
                    <h6>An Eggcellent Place To Be</h6>
                </div>
            </div>
            <div className="mt-5 mb-5">
                <div className="click-icons">
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-lg-9 col-lg-offset-1">
                    <h4>
                        Welcome friend! If you’re into farmy, DIY, quirkiness, then you're in the right spot!
                    </h4>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-lg-9 col-lg-offset-1">
                    <h5>
                        Arillian = Arthur + Jillian (A mashup of my boyfriend’s and my names).
                    </h5>
                </div>
                <div className="col-xs-12 col-lg-9 col-lg-offset-1">
                    <h5>
                        Arillian Farm is the (self-labeled) micro-farm in our backyard… which is to say, we have a bunch of raised garden beds, a small flock of chickens, a couple (wether) goats, three dogs and a lil pond with a few hundred mosquito fish on about a third of an acre in Mesa, AZ.
                    </h5>
                </div>
                <div className="col-xs-12 col-lg-9 col-lg-offset-1">
                    <h4>
                        Our Backyard is my home-gym, salad bar, animal sanctuary and Personal HG TV Channel
                    </h4>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-lg-9 col-lg-offset-1">
                    <h5>
                        <p>
                            When it’s too hot to tinker around outdoors, I spend a lot of time writing humorous and/or thought-provoking{' '}
                            <Link to="/books">books</Link>
                            and{' '}
                            <Link to="/blog">blog entries</Link>. Recently, I also started cataloging our favorite{' '}
                            <Link to="/recipes">recipes.</Link>
                        </p>
                    </h5>
                </div>
                <div className="col-xs-12 col-lg-9 col-lg-offset-1">
                    <h3>Arthur is my high-tech, hottie, handyman, hero.</h3>
                </div>
                <div className="col-xs-12 col-lg-9 col-lg-offset-1 mb-2">
                    <h5>
                        He’s an electrical engineer who loves to “work on things” –especially cars, audio and lighting and especially audio and lighting for cars.
                    </h5>
                    <p>
                        Sometimes Arthur and I work on <Link to="/projects">DIY projects</Link> together - Like transforming a tough shed into a divided goat and chicken barn, building a catio at my rental property in Tempe, or making a little fishpond / chicken wading pool for our chickens.
                    </p>
                    <h4>
                        If you’ve enjoyed wandering through our little corner of the web and want to help support my lumber and hardware habit, click a couple bucks our way on our{' '}
                        <a href="https://gofund.me/335c2958" target="_blank" rel="noopener noreferrer">
                            Go Fund Me
                        </a>
                        ,{' '}
                        <a
                            href="https://www.zazzle.com/collections/fall_2024-119118606070157890"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Buy some Merch
                        </a>{' '}
                        or tell a friend or check out videos of our critters on our{' '}
                        <a
                            href="https://www.youtube.com/channel/UC7meaKCW2UsPMQOSeHV5lKQ"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            You Tube!
                        </a>
                    </h4>
                </div>
                <div className="col-xs-12 col-lg-9 col-lg-offset-1 mb-5">
                    <b className="mb-5">
                        As of 9-10-24 we have some extra seeds for the fall.{' '}
                        <a href="mailto:arillianfarm@gmail.com">Email</a> if you would like me to mail some.
                    </b>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <div className="section-thumbnails">
                        <ThumbNails />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutView;