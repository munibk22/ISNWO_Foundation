import React from 'react'

export default function Nav() {
    return (
        <nav
            className="navbar font600 width100 flexwrap navul sub-banner sticky" >
            <li className="home">
                <a href="#home">Home</a>
            </li>

            <li className="mobilehide">
                <a href="#learnmore">Learn More</a>
            </li>
            <li className="">
                <a href="#about">Donate Now</a>
            </li>

            <li className="">
                <a href="#contactUs">Contact</a>
            </li>
        </nav>
    )
}
