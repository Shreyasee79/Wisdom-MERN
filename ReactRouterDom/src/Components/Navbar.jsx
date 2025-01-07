import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <img src="logo1.png" alt="Books" />
                <ul>
                    <Link style={{textDecoration:'none', color:'goldenrod'}} to={'/'}><li>Home</li></Link>
                    <Link style={{textDecoration:'none', color:'goldenrod'}} to={'/explore'}><li>Explore</li></Link>
                    <Link style={{textDecoration:'none', color:'goldenrod'}} to={'/about_us'}><li>About Us</li></Link>
                    <Link style={{textDecoration:'none', color:'goldenrod'}} to={'/contact_us'}><li>Contact Us</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar