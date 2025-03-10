import React from 'react';
import "../css/mobile.css"; // Import the CSS file

// Images
import profilePicture from '../images/test.jpg';
import city from "../images/city.jpeg"
import mail from "../images/mail.webp"
import linkedin from "../images/linkedin.webp"

function MobileApp() {
    return (
        <div className='main'>
            <section className='section-one'>
                <div className="desktop-left">
                    <div className="center-image">
                        <img src={city} id="city" alt="City" />
                    </div>
                </div>
                <div className="desktop-right">
                    <div className='name-line'>
                        <div className="text-box">
                            <section>
                                Lebron&nbsp;
                                <br/>
                                <section id="surname">
                                    James
                                </section>
                            </section>
                        </div>
                    </div>

                    <div id='socials'>
                    <img src={mail} alt="Mail" id="socials-icon"/>
                    <img src={linkedin} alt="Mail" id="socials-icon"/>
                    </div>
                </div>

                <div className="desktop-whole-box">
                    <div className='desktop-whole-box picture' >
                        <img src={profilePicture} alt="Profile" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MobileApp;
