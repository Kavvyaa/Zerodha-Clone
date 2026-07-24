import React from 'react';

function Awards() {
    return ( 
        <div className='container pt-5 mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-3'>
                    <img src='Media/images/largestBroker.svg' alt='Award' />
                </div>
                <div className='col-6 p-3'>
                    <h1 className='mt-3 mb-3'> Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row '>
                        <div className='col-6'>
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>Stocks and IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. security</p></li>
                            </ul>
                        </div>
                    </div>
                        <img className='mt-3' src='Media/images/pressLogos.png' alt='press logo' style={{width:'90%'}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;