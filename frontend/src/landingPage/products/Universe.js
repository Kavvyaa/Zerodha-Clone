import React from "react";

function Universe() {
    return ( 
        <div className="container text-center text-muted">
            <div className="row">
                <h1 className="fs-4">The Zerodha Universe</h1>
                <p className="fs-6 mt-4 mb-5">Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row p-5">
                <div className="col-4">
                    <img src="Media/images/zerodhaFundhouse.png" width={'60%'}/>
                    <p className="mt-4" style={{fontSize:'0.80rem', color:'gray', fontWeight:'500'}}>Our asset management venture <br/>that is creating simple and transparent index <br/>funds to help you save your goals</p>
                </div>
                <div className="col-4">
                    <img src="Media/images/sensibullLogo.svg" width={'75%'}/>
                    <p className="mt-4" style={{fontSize:'0.80rem', color:'gray', fontWeight:'500'}}>Options trading platforms that let you <br/> create strategies, analyze positions and examine <br/> data points like open interests, FII/DII, and more
                    </p>
                </div>
                <div className="col-4">
                    <img src="Media/images/tijori.svg" width={'50%'}/>
                    <p className="mt-4" style={{fontSize:'0.80rem', color:'gray', fontWeight:'500'}}>Investment research platform<br/> that offers detailed insights on stocks, <br/> sectors, supply chains, and more</p>
                </div>
            </div>
            <div className="row p-5">
                <div className="col-4 mb-5">
                    <img src="Media/images/streakLogo.png" width={'40%'}/>
                    <p className="mt-4" style={{fontSize:'0.80rem', color:'gray', fontWeight:'500'}}>
                        systematic trading platform <br/> that allows you to create and backtest <br/>strategies without coding.
                    </p>
                </div>
                <div className="col-4">
                    <img src="Media/images/smallcaseLogo.png" />
                    <p className="mt-4" style={{fontSize:'0.80rem', color:'gray', fontWeight:'500'}}>Thematic investment platform<br/> that help you invest in diversified<br/> baskets of stocks on ETFs.</p>
                </div>
                <div className="col-4">
                    <img src="Media/images/dittoLogo.png" width={'40%'}/>
                    <p className="mt-4" style={{fontSize:'0.80rem', color:'gray', fontWeight:'500'}}>Personalized advice on life <br/> and health insurance. No spam <br/> and no mis-selling.</p>
                </div>
                <button className=' btn btn-primary fs-5 mt-3 mb-5' style={{width:'20%', margin: '0 auto', hover:'black'}}><b>Sign up for free</b></button>
            </div>
        </div>
     );
}

export default Universe;