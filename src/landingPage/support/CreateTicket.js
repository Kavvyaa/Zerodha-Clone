import React from "react";
import './CreateTicket.css';

const categories = [
  {
    icon: "bi-plus-circle",
    title: "Account Opening",
  },
  {
    icon: "bi-person-circle",
    title: "Your Zerodha Account",
  },
  {
    icon: "bi-compass",
    title: "Kite",
  },
  {
    icon: "bi-currency-rupee",
    title: "Funds",
  },
  {
    icon: "bi-bullseye",
    title: "Console",
  },
  {
    icon: "bi-clock-history",
    title: "Coin",
  },
];

function CreateTicket() {
    return ( 
    <section className="support-category py-5">
      <div className="container">

        <div className="row">

          {/* LEFT */}

          <div className="col-lg-8">

            <div className="accordion" id="supportAccordion">

              {categories.map((item, index) => (

                <div className="accordion-item mb-4" key={index}>

                  <h2 className="accordion-header">

                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                    >
                      <i className={`bi ${item.icon} me-3 fs-4`}></i>

                      <span>{item.title}</span>

                    </button>

                  </h2>

                  <div
                    id={`collapse${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#supportAccordion"
                  >

                    <div className="accordion-body">

                      <ul>

                        <li>Sample Help Topic 1</li>
                        <li>Sample Help Topic 2</li>
                        <li>Sample Help Topic 3</li>

                      </ul>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="col-lg-4">

            {/* Notice */}

            <div className="notice-box mb-4">

              <ul>

                <li>
                  <a href="/">
                    Surveillance measure on scrips - July 2026
                  </a>
                </li>

                <li>
                  <a href="/">
                    Current Buybacks - July 2026
                  </a>
                </li>

              </ul>

            </div>

            {/* Quick Links */}

            <div className="quick-links">

              <h5>Quick links</h5>

              <ol>

                <li><a href="/">Track account opening</a></li>

                <li><a href="/">Track segment activation</a></li>

                <li><a href="/">Intraday margins</a></li>

                <li><a href="/">Kite user manual</a></li>

                <li><a href="/">Learn how to create a ticket</a></li>

              </ol>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CreateTicket;