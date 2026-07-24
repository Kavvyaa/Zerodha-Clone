import React from 'react';

function Pricing() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>

                {/* Left Section */}
                <div className='col-5'>
                    <h3>Unbeatable pricing</h3>
                    <p>We pioneered the concept of discount broking and price
                        transparency in India. Flat fees and no hidden charges.
                    </p>
                   <a href='/' className='fs-6 text-decoration-none'>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>

                {/* Right Section */}
                <div className='col-7 mt-4 mb-5'>
                    <div className='row my-0'>
                        <div className='col-4 d-flex align-items-center'>
                            <img src='Media/images/pricingMF.svg' style={{ width: "60%" }} alt='pricing' />
                            <p className='mb-0 text-muted' style={{fontSize:"11px", lineHeight:"1.5"}}>Free account opening</p>
                        </div>

                        <div className='col-4 d-flex align-items-center mx-0 my-0'>
                            <img src='Media/images/pricingMF.svg' style={{ width: "60%" }} alt='pricing' />
                            <p className='mb-0 text-muted' style={{fontSize:"10px", lineHeight:"1.3"}}>Free equity delivery and direct mutual funds </p>
                        </div>

                        <div className='col-4 d-flex align-items-center'>
                            <img src='Media/images/intradayTrades.svg' style={{ width: "60%" }} alt='pricing' />
                            <p className='mb-0 text-muted' style={{fontSize:"11px", lineHeight:"1.5"}}>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;