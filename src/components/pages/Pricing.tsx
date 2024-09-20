import React from "react";

import '../styles/Pricing.css'
import {size} from "@cloudinary/url-gen/qualifiers/textFit";

const Pricing: React.FC = () => {
    return (
        <>
            <div className="web-body pricing home-background">
                <div className="pricing-container glass-item blue-shadow">
                    <h1 style={{color: "#0084ff", fontSize: "3rem"}}> Pricing </h1>
                    <div className={'pricing-container-inner'}>

                        <div className="pricing-box border">
                            <div className="pricing-text"> Hello</div>
                        </div>

                        <div className="pricing-box border">
                            <div className="pricing-text"> Hello</div>
                        </div>

                        <div className="pricing-box border">
                            <div className="pricing-text"> Hello</div>
                        </div>

                        <div className="pricing-box border">
                            <div className="pricing-text"> Hello</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing