import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 text-center mt-5'>
            <div className='row mt-4'>
                <img src='media/images/homeHero.png' className='mb-5 text-center' style={{width:'70%', margin: 'auto'}}/>
                <h1 className='mt-3'>Invest in everything</h1>
                <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more</p>
                <button className=' btn btn-primary fs-5 mt-3' style={{width:'20%', margin: '0 auto', hover:'black'}}><b>Sign up for free</b></button>
            </div>
        </div>
     );
}

export default Hero;