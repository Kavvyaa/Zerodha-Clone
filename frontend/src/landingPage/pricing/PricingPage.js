import React from "react";
import Hero from '../pricing/Hero';
import Brokerage from "../pricing/Brokerage";
import Charges from "../pricing/Charges";
function PricingPage() {
    return ( 
        <div>
            <Hero />
            <Brokerage />
            <Charges />
        </div>
     );
}

export default PricingPage;