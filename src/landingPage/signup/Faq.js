import React from "react";

const faqs = [
  {
    question: "What is a Zerodha account?",
    answer:
      "A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.",
  },
  {
    question: "What documents are required to open a demat account?",
    answer:
      "PAN number, Aadhaar linked with a phone number, cancelled cheque or bank statement, and income proof if you wish to trade futures and options.",
  },
  {
    question: "Is Zerodha account opening free?",
    answer: "Yes, it is completely free.",
  },
  {
    question: "Can I open a demat account without a bank account?",
    answer:
      "To open a demat account, you must have a bank account in your name.",
  },
  {
    question: "Can I open a demat and trading account using the mobile app?",
    answer:
      "Yes, you can open a demat and trading account completely online using the Zerodha Kite mobile app.",
  },
];

function Faq() {
  return (
    <section className="signup-section faq-section">
      <div className="container">
        <h2>FAQs</h2>

        <div className="accordion" id="signupFaq">
          {faqs.map((item, index) => (
            <div className="accordion-item" key={item.question}>
              <h3 className="accordion-header">
                <button
                  className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#signupFaq${index}`}
                >
                  {item.question}
                </button>
              </h3>

              <div
                id={`signupFaq${index}`}
                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                data-bs-parent="#signupFaq"
              >
                <div className="accordion-body">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
