import React from 'react';
import '../styles/About.css'

const About = () => {
    return (
        <>
            <div className="web-body home-background about">
                <div className="about-item glass-item blue-shadow">
                    <div className="about-item-inner">
                        <div className="about-title">
                            <h1 style={{color: "#0084ff", fontSize: "3rem"}}> About Jack (Sapphire)</h1>
                        </div>
                        <div className="about-item-sub">
                            <img className="about-image border" src="/Sapphire.png" alt="Sapphire"/>
                            <div className="about-text">

                                Sapphire is the founder and owner os Sapphire Designs. Sapphire aspires to be an
                                entrepreneur and through that, aspires to use their design skills to be creative. They
                                also are a: Computer science student, Web dev, Programmer, and much more.
                            </div>
                        </div>

                        <div className="about-title">
                            <h1 style={{color: "#0084ff", fontSize: "3rem"}}> Contact: helakjack@gmail.com</h1>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About;