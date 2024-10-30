import React, { useEffect } from 'react';
// import './css/default.css'
// import Body from './body/Body'
// import './body/body.css'
import './body/body.css';
import HeadModule from './head/HeadModule.js';
import Nav from './head/Nav.js';
import Banner from './head/Banner.js';
import Hero from './hero/Hero.js';
import Pricing from './pricing/Pricing.js';
import Card from './card/Card.js';
import Footer from './footer/Footer.js';
import Form from './form/Form.js';
import MobileHeader from './nav/MobileHeader.js';

import Main1 from './main/Main1.js';
import Main2 from './main/Main2.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Footer from './footer/Footer'
// import PricePanel from './pricepanel/PricePanel'
// import Team from './body/Team'
import BodyHeader from './body/BodyHeader.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const art1 = <article className='card-article' data-aos="fade-right">
  <p>At ISNWO Foundation, your donations make a tangible difference in the lives of those in need. Join us in our mission to alleviate poverty,
    hunger, and suffering in our community.
  </p>
  <ul className='card-article-list'>
    <li>Emergency Relief: Providing immediate assistance to disaster-affected communities.</li>
    <li>Water Projects: Delivering clean water solutions to water-scarce regions. </li>
    <li>Food Security: Distributing food packages to families in crisis.</li>
    <li>Medical Aid: Facilitating access to essential healthcare services.</li>
    <li>Education: Building schools and supporting students' educational journey.</li>

  </ul>
</article>;
export const art2 = <h4 className='card-article '>
  "Remember, even a small act of charity can have a profound impact. The Prophet ﷺ said: 'Protect yourself from hellfire, even with half a date.'"
</h4>;

export const pricing1 = <Pricing />;
export const imgOne = <img alt='Group charity poster' src='https://i.imgur.com/d2ClI7D.png' className='imgOne ' />;
export const img2 = <img alt='Donation poster' src='https://i.imgur.com/8KJ2Kmz.png' className='img3 box-' />;





function Imports() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
    });

  }, []);
  return <></>

}


export {
  Imports, HeadModule as Head, Nav, Banner, BodyHeader,
  Card,
  Footer,
  Form,
  MobileHeader,
  Hero,
  Main1, Main2,
  Pricing,
  AOS,
  // PricePanel,Team ,
  ToastContainer,
};