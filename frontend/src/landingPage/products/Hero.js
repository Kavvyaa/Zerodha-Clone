import React from "react";

function Hero() {
    return ( 
        <div className="container text-center">
            <div className="row mt-5">
                <h1 className="fs-3 mt-5" style={{color: "#424242"}}>Zerodha Products</h1>
                <p className="fs-5 mt-2" style={{color: "#424242"}}>Sleek, modern, and intuitive trading platforms</p>
                <p className="fs-6 mt-2">Check out our <a href="/" className="text-decoration-none">investment offerings → </a></p>
            </div>
        </div>
     );
}

export default Hero;