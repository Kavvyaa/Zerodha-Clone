import React from "react";

function Hero() {
  return (
    <section className="signup-hero">
      <div className="container">
        <div className="text-center signup-heading">
          <h1>Open a free demat and trading account online</h1>
          <p>
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>
        </div>

        <div className="row align-items-center signup-hero-content">
          <div className="col-lg-6 text-center">
            <img
              src="/Media/images/account_open.svg"
              alt="Open a Zerodha demat and trading account"
              className="signup-main-img"
            />
          </div>

          <div className="col-lg-5 offset-lg-1">
            <div className="signup-form-box">
              <h2>Open a free demat &amp; trading account online</h2>
              <h3>Signup now</h3>
              <p className="track-copy">Or track your existing application</p>

              <div className="phone-input">
                <span>+91</span>
                <input type="tel" aria-label="Mobile number" />
              </div>

              <p className="nri-copy">
                NRI account? <a href="/">Click here</a>
              </p>

              <button className="btn btn-primary signup-btn" type="button">
                Get OTP
              </button>

              <p className="terms-copy">
                By proceeding, you agree to the Zerodha{" "}
                <a href="/">terms</a> &amp; <a href="/">privacy policy</a>
              </p>
            </div>
          </div>
        </div>

        <div className="nri-strip">
          Looking to open NRI account? <a href="/">Click here</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
