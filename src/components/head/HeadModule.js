import React from 'react'
import './header.css'
import Search from '../search/Search.js';
import Nav from './Nav.js'
import { LoginModule } from '../utils/LoginModule.js';
import { HeadSlogan } from './HeadSlogan.js';
// import Icon from '../../assests/fav.png';
// import CarouselApp from './Carousel'

export default function HeadModule() {
    return (
        <section className="head relative" id="home">
            {/* Row-Top-Spacer */}
            {/* <section className="mobilehide headrow0"> </section> */}
            {/* Row-1 */}
            {/* Row-1 Col-1/2 */}
            {/* <div className="headrow1 mobilehide"></div> */}



            {/* <HeadSlogan /> */}
            {/* <img src='https://i.imgur.com/KcNlmcE.png' alt='ISNWO logo' className="logo drop-shadow-filter desktophide" /> */}


            {/* Row-1 Col-2 */}
            {/* <section className="mobilehide headrow1 search-container">
                <Search />
            </section> */}
            {/* Row-1 Col-2 */}
            {/* <section className="header-login headrow1 sub-banner " style={{ borderRadius: "2rem" }}>
                <LoginModule />
            </section> */}
            {/* <div className="logo-container2 headerimg headrow1 mobilehide">
            <img src='https://i.imgur.com/VPecYgG.png' alt='company logo'  className="logo drop-shadow-filter" />
        </div>  */}
            {/* <div className="headrow1 mobilehide"></div> */}
            {/* Row-1 End*/}

            {/* Row-2 Start*/}
            {/* Row-2 Col-1/2 */}
            <div className="headrow2 ">
                <div className="headerimg headrow2b ">
                    <img src='https://i.imgur.com/KcNlmcE.png[/img]'
                        alt='company logo' style={{ width: "", float: '' }} className="logo drop-shadow-filter " />
                </div>
            </div>

            {/* Row-2 Col-3 logo-container2 */}

            <div className="flex alignitems headrow2 headrow-2-attributes">

                <div className="font500 textalign text-shadow-light" data-aos='zoom-in'>
                    <h1 className="main-header">
                        Islamic Society of Northwest Ohio Foundation</h1>
                    <p style={{
                        color: "black"
                    }}>Serving Communities in Northwest Ohio</p>
                    <br />
                    <div className="">
                        <p>PO Box 67</p>
                        <p>Holland, OH 43528</p>
                        {/* <a href="tel:6368754054" className="tel" >Call us 419-329-0745 </a> */}
                    </div>
                </div>

            </div>


            <div className="header-login headrow3"></div>

            <div className="header-login headrow3 donate-link">Your donation can change lives. Start making a difference today.
                <a href="#donate" class="donate-button">Donate Now</a></div>
            {/* <div className="header-login headrow3"></div> */}
            {/* <section className="header-login headrow3 sub-banner " style={{borderRadius:"2rem"}}>
                <LoginModule />
            </section>                       */}

            <div className="headrow3 mobilehide"></div>
        </section>
    )
}
