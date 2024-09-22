import '../styles/Home.css'

import React from 'react'

const Home = () => { // I could use better naming conventions
    return (
        <>
            <div className="web-body home home-background">

                <div className="home-container border blue-shadow unselectable">
                    <div className="home-container-inner" >
                        <div className="home-logo-container" >
                            <img src="/Sapphire-Designs.png" alt="logo" className="home-logo"/>
                        </div>
                        <div className="text-container">
                            <h1 className="title-footer">Sapphire</h1>
                            <h1 className="title-footer">Designs</h1>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;