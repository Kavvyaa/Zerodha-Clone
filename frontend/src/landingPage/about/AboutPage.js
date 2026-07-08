import React from "react";
import Hero from "../about/Hero";
import Team from "../about/Team";
import OpenAccount from "../OpenAccount"

function AboutPage() {
    return ( 
        <div>
            <Hero />
            <OpenAccount />
            <Team />
        </div>
     );
}

export default AboutPage;