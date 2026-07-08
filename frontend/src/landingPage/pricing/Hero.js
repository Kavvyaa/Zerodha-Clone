import React from "react";

function Hero() {
    return ( 
        <div className="container">
            <div className="row text-center mt-5">
                <h1 className="fs-3 mt-5">Charges</h1>
                <h3 className="fs-5 mt-3 mb-5" style={{color:'gray'}}>List of all charges and taxes</h3>
            </div>
            <div className="row text-center">
                <div className="col-4 p-5">
                    <img src="Media/images/pricingEquity.svg" width={'90%'} className="img-fluid"/>
                    <h3 className="fs-3">Free equity delivery</h3>
                    <p className="mt-4 text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="Media/images/intradayTrades.svg" width={'90%'} className="img-fluid"/>
                    <h3 className="fs-4">Intraday and F&O trades</h3>
                    <p className="mt-4 text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="Media/images/pricingEquity.svg" width={'90%'} className="img-fluid"/>
                    <h3 className="fs-3">Free direct MF</h3>
                    <p className="mt-4 text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;