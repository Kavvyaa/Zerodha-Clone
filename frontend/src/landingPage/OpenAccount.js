import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5 text-center mt-5'>
            <div className='row'>
                <h1 className='mt-3 fs-3 text-muted'>Open a Zerodha account</h1>
                <p className='fs-6 mt-4 text-muted'><b>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</b></p>
                <button className=' btn btn-primary fs-5 mt-4' style={{width:'20%', margin: '0 auto', hover:'black'}}><b>Sign up for free</b></button>
            </div>
        </div>
     );
}

export default OpenAccount;