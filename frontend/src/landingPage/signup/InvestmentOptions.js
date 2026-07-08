import React from "react";

const options = [
  {
    image: "/Media/images/stocks-acop.svg",
    title: "Stocks",
    copy: "Invest in all exchange-listed securities",
  },
  {
    image: "/Media/images/mf-acop.svg",
    title: "Mutual funds",
    copy: "Invest in commission-free direct mutual funds",
  },
  {
    image: "/Media/images/ipo-acop.svg",
    title: "IPO",
    copy: "Apply to the latest IPOs instantly via UPI",
  },
  {
    image: "/Media/images/fo-acop.svg",
    title: "Futures & options",
    copy: "Hedge and mitigate market risk through simplified F&O trading",
  },
];

function InvestmentOptions() {
  return (
    <section className="signup-section investment-options">
      <div className="container">
        <h2>Investment options with Zerodha demat account</h2>

        <div className="row">
          {options.map((item) => (
            <div className="col-md-6 col-lg-3" key={item.title}>
              <div className="investment-item">
                <img src={item.image} alt={`Invest in ${item.title}`} />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a className="signup-link" href="/">
            Explore Investments
          </a>
        </div>
      </div>
    </section>
  );
}

export default InvestmentOptions;
