import React from "react";

function Team() {
    return ( 
        <div className="container">
            <div className="row mt-5 mb-5">
                <h2 className="text-center text-muted">People</h2>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5 p-5 text-center">
                    <img src="Media/images/nithinKamath.jpg" alt="ceo" style={{borderRadius:'100%', width: '80%'}}/>
                    <h5 className="mt-3 text-muted">Nithin Kamath</h5>
                    <h6 className="mt-3 text-muted">Founder, CEO</h6>
                </div>
                <div className="col-6 p-5 mt-5">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on Homepage / TradingQnA / Twitter
                    </p>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-4 p-5">
                    <img src="Media/images/Nikhil.jpg" alt="co-founder" style={{borderRadius:'100%', width: '80%'}} />
                    <h5 className="mt-3 text-muted">Nikhil Kamath</h5>
                    <h6 className="mt-3 text-muted">Co-founder, CFO</h6>
                </div>
                <div className="col-4 p-5">
                    <img src="Media/images/Kailash.jpg" alt="cto" style={{borderRadius:'100%', width: '80%'}}/>
                    <h5 className="mt-3 text-muted">Dr. Kailash Nadh</h5>
                    <h6 className="mt-3 text-muted">CTO</h6>
                </div>
                <div className="col-4 p-5">
                    <img src="Media/images/Venu.jpg" alt="coo" style={{borderRadius:'100%', width: '80%'}}/>
                    <h5 className="mt-3 text-muted">Venu Madhav</h5>
                    <h6 className="mt-3 text-muted">COO</h6>
                </div>
            </div>
            <div className="row text-center mb-5">
                <div className="col-4 p-5">
                    <img src="Media/images/Seema.jpg" alt="director" style={{borderRadius:'100%', width: '80%'}}/>
                    <h5 className="mt-3 text-muted">Seema Patil</h5>
                    <h6 className="mt-3 text-muted">Director</h6>
                </div>
                <div className="col-4 p-5">
                    <img src="Media/images/Karthik.jpg" alt="chief of ed" style={{borderRadius:'100%', width: '80%'}}/>
                    <h5 className="mt-3 text-muted">Karthik Rangappa</h5>
                    <h6 className="mt-3 text-muted">Chief of Education</h6>
                </div>
                <div className="col-4 p-5 ">
                    <img src="Media/images/Austin.jpg" alt="director str" style={{borderRadius:'100%', width: '80%'}}/>
                    <h5 className="mt-3 text-muted">Austin Prakash</h5>
                    <h6 className="mt-3 text-muted">Director Strategy</h6>
                </div>
            </div>
        </div>
     );
}

export default Team;