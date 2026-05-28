import React from 'react';

function Stats() {
    return ( <div className='container mt-5 mb-5'>
        <div className='row mt-5'>
            <div className='col-6 p-5 my-4'>
                <h3 className='mb-5'>Trust with confidence</h3>
                <h4 className='text-muted'>Customer-first always</h4>
                <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                <h4 className='text-muted'>No spam or gimmicks</h4>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                <h4 className='text-muted'>The Zerodha universe</h4>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <h4 className='text-muted'>Do better with money</h4>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='col-6 p-5'>
                <img src='Media/images/ecosystem.png' style={{width:'100%'}} className='mb-5'/>
                <div className='text-center'>
                    <a href='' className='mx-4 fs-5 text-decoration-none'>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href='' className='fs-5 text-decoration-none'>Try kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Stats;