import React from "react";

import '../styles/Pricing.css'

const Pricing: React.FC = () => {
    return (
        <>
            <div className="web-body pricing home-background">
                <div className="pricing-container">
                    <div className="pricing-container-inner">
                        <div className="pricing-item glass-item blue-shadow">
                            <h1 style={{textAlign: "center", color: "#0084ff", fontSize: "3rem"}}> Logo </h1>
                            <>
                                <h2> $50.00 USD </h2>
                            </>
                            <br/>
                            <>
                                <img className="ratio-logo" src="/LogoRatio.png" alt="Logo" />
                            </>
                        </div>
                        <div className="pricing-item glass-item blue-shadow">
                            <h1 style={{textAlign: "center", color: "#0084ff", fontSize: "3rem"}}> Web App UI </h1>
                            <>
                                <h2> $100.00 USD </h2>
                            </>
                            <br/>
                            <>
                                <img className="ratio-ui" src="/UIRatio.png" alt="UI"/>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing