import React from "react";

import '../styles/Pricing.css'

const Pricing: React.FC = () => {
    return (
        <>
            <div className="web-body pricing home-background">
                <div className="pricing-item glass-item blue-shadow">
                    <h1 className="title-footer"> Standard Logo </h1>
                    <h2> $50.00 USD </h2>
                    <br/>
                    <img src="/LogoRatio.png" alt="logo" className="pricing-image"/>
                </div>

                <div className="pricing-item glass-item blue-shadow">
                    <h1 className="title-footer"> Standard UI </h1>
                    <h2> $100.00 USD </h2>
                    <br/>
                    <img src="/UIRatio.png" alt="ui" className="pricing-image"/>
                </div>
            </div>
        </>
    )
}

export default Pricing