import React, { useEffect, useRef } from "react"
import './mobileheader.css';
import MobileNav from "./MobileNav";
import { LoginModule } from "../utils/LoginModule";


const MobileHeader = () => {
    //     const headerRef = useRef(null);

    // useEffect(() => {
    //     const header = headerRef.current;
    //     window.addEventListener('scroll',()=> window.scrollY >= 10 ? header.classList.add('active')
    //     : header.classList.remove('active'));
    // } , []);


    return (
        <header className='mobileheader text-shadow-header'>
            {/* <MobileNav />             */}
            <section className="textalign text-shadow mobile-text-header">
                <h1 className="">
                    ISNWO Foundation</h1>
                <p style={{
                    color: "rgb(151, 212, 81)"
                }}>Your Trusted Invesment Partner 🪙</p>
            </section>

            <nav style={{ background: "none" }}
                className="navbar-mobile  width100  navul sub-banner" >
                <li className="home">
                    <a href="#home">Home</a>
                </li>

                <li className="mobilehide">
                    <a href="#learnmore">Learn More</a>
                </li>
                <li className="">
                    <a href="#about">About</a>
                </li>

                <li className="">
                    <a href="#contact">Contact</a>
                </li>

                <li className="">
                    <a href="/signup">Sign Up</a>
                </li>
                {/* <div className="header-login headrow3 sub-banner"><LoginModule /></div>   */}
            </nav>
        </header>
    )
}


export default MobileHeader;