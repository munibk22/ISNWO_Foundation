import React, { useEffect } from 'react';
// import './css/default.css'
// import Body from './body/Body'
// import './body/body.css'
import './body/body.css';
import HeadModule from './head/HeadModule.js';
import Nav from './head/Nav.js';
import Banner from './head/Banner.js';
import Hero from './hero/Hero.js';
import Payments from './pricing/Payments.js';
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
  <p>Our mission is to support the Islamic Society of Northwest Ohio and foster a community rooted
    in the principles of Islam, promoting peace, compassion, and social justice.
  </p>
  {/* <p> We are dedicated to foster a community rooted in the principles of Islam, promoting peace,
    compassion, and social justice.</p> */}
  <ul className='card-article-list'>
    <li><strong>Community Outreach:</strong> Actively engaging with our local and global communities to provide support, build relationships, and address social
      issues through Islamic values and teachings.</li>
    <li><strong>Education and Awareness:</strong>  Providing comprehensive Islamic education and resources to enhance understanding and practice of the faith. </li>
  </ul>

</article>;
export const art2 = <h4 className='card-article payment-article'>
  "Remember, even a small act of charity can have a profound impact. The Prophet ﷺ said: 'Protect yourself from hellfire, even with half a date.'"
</h4>;

export const pricing1 = <Payments />;
export const imgOne = <img alt='Group charity poster' src='https://i.imgur.com/d2ClI7D.png' className='imgOne ' />;
export const img2 = <img alt='Donation poster' src='https://i.imgur.com/8KJ2Kmz.png' className='img3 box-' />;
export const art3 = <article className='card-article' data-aos="fade-left">
  <ul className='card-article-list' style={{ marginTop: '10px' }}>
    <li><strong>Community Support:</strong> Offering support and services to meet the spiritual, social, and economic needs of our community members.</li>
    <li><strong>Charitable Initiatives:</strong> Engaging in charitable activities to alleviate poverty, support the needy, and contribute to the well-being of society.</li>
    <li><strong>Interfaith Dialogue:</strong> Encouraging respectful and meaningful dialogue between different faith communities to promote mutual understanding and harmony.</li>
    <li><strong>Youth Empowerment:</strong> Empowering the younger generation with the knowledge, skills, and values to become responsible and active members of society.</li>
  </ul>
</article>;




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
  Payments,
  AOS,
  // PricePanel,Team ,
  ToastContainer,
};