import React from 'react';
import './footer.css';
import Social from './Social';
import { TiSocialAtCircular, TiSocialTwitter, TiSocialFacebook, TiSocialYoutube } from "react-icons/ti";



function Footer({ aosStyle }) {
    return (
        <footer className='contact' data-aos={aosStyle} >
            <div>
                <div className="textalign padding1" style={{ marginTop: '3%' }}>
                    <h2>Visit Us:</h2>
                </div>
                <div className="flex justify margintop " style={{ width: "auto" }}>
                    <iframe title="stlouis"

                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199412.48684898255!2d-90.38388875470163!3d38.653016509678444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a9faed8ef9%3A0xbe39eaca22bbe05b!2sSt.%20Louis%2C%20MO!5e0!3m2!1sen!2sus!4v1619128150811!5m2!1sen!2sus" width="320" height="250" style="border:0;" allowfullscreen="" loading="lazy'>

                    </iframe>
                </div>
            </div>
            <article id='contactUs' className='footer-contact'>
                <p>Contact Us:</p>
                <p>📞Call us at: (419) 329-0745</p>
                <p className='footer-info-section'>📧 Email us at info@isnowfoundation.com</p>
                <span><TiSocialAtCircular />  <TiSocialTwitter /> <TiSocialFacebook /> <TiSocialYoutube /></span>
                {/* <p>We are always ready to assist you.</p> */}
                <hr />
                <Social />
            </article>

            <div className="flexcol justifyend  padding1" style={{ color: 'burlywood', }}>
                <p className="" >
                    &ldquo;Whoever helps ease a difficulty in this world, Allah will ease their difficulty in this world and the Hereafter.&rdquo;
                    - Prophet Muhammad ﷺ
                    <em>
                    </em>
                </p>
                <br></br>
                <div id="app">
                </div>
                <a href="https://theperfectdev.info/" target="blank" className="anchor">
                    @ThePerfectDev</a>
            </div>


        </footer>
    );
}

export default Footer;