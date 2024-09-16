import React from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {

    const navigate = useNavigate(); // I feel like there's a better way of doing this

    const navAbout = () => {
        navigate('/about');
    }

    const navPricing = () => {
        navigate('/pricing');
    }

    const navGallery = () => {
        navigate('/gallery');
    }

    const navHome = () => {
        navigate('/');
    }


    return ( // Stable enough
        <>
            <nav className="navbar blue-shadow">
                <div className="navbar-container">
                    <div className="navbar-left ">

                        <img src="/Sapphire-Designs.png" alt="logo" className="navbar-logo " />
                        <span className="navbar-name"> <button className="nav-button" onClick={navHome}> Sapphire Designs </button></span>
                    </div>

                    <div className="navbar-right">
                        <button className="nav-button" onClick={navAbout}>About</button>
                        <button className="nav-button" onClick={navGallery}>Gallery</button>
                        <button className="nav-button" onClick={navPricing}>Pricing</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;