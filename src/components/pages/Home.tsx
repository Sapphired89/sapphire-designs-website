import '../styles/Home.css'

import React from 'react'

const Home = () => { // I could use better naming conventions
    return (
        <>
            <div className="web-body home home-background">

                <div className="home-brand border blue-shadow unselectable">
                    <div className="home-brand-inner">
                        <img src="/Sapphire-Designs.png" alt="logo" className="home-logo"/>
                        <div className="text-container">
                            <h1 className="text-item">Sapphire</h1>
                            <h1 className="text-item">Designs</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;