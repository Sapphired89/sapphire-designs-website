import React from 'react';
import '../styles/About.css'

const About = () => {
    return (
        <>
            <div className="web-body about home-background">
                <div className="about-item glass-item blue-shadow">
                    <div className="about-item-inner">


                        <div className="about-item-content title-footer">
                            About Jack ( Sapphire )
                        </div>

                        <br/>

                        <div className="about-item-content">
                            <img className="about-image border" src="/Sapphire.png" alt="Sapphire"/>
                        </div>

                        <br/>

                        <div className="about-item-content">
                            Sapphire is the founder and owner os Sapphire Designs. Sapphire aspires to be an
                            entrepreneur and through that, aspires to use their design skills to be creative. They
                            also are a: Computer science student, Web dev, Programmer, and much more.
                        </div>

                        <br/>

                        <div className="about-item-content title-footer">
                            helakjack@gmail.com
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default About;