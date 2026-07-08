import React from "react";

const benefits = [
  {
    title: "Unbeatable pricing",
    copy: "Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.",
  },
  {
    title: "Best investing experience",
    copy: "Simple and intuitive trading platform with an easy-to-understand user interface.",
  },
  {
    title: "No spam or gimmicks",
    copy: 'Committed to transparency - no gimmicks, spam, "gamification", or intrusive push notifications.',
  },
  {
    title: "The Zerodha universe",
    copy: "More than just an app - gain free access to the entire ecosystem of our partner products.",
  },
];

function Benefits() {
  return (
    <section className="signup-section benefits-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <img
              src="/Media/images/acop-benefits.svg"
              alt="Benefits of Zerodha"
              className="benefits-img"
            />
          </div>

          <div className="col-lg-6">
            <h2>Benefits of opening a Zerodha demat account</h2>
            <div className="benefits-list">
              {benefits.map((item) => (
                <div className="benefit-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
