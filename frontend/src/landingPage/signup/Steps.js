import React from "react";

const steps = [
  "Enter the requested details",
  "Complete e-sign & verification",
  "Start investing!",
];

function Steps() {
  return (
    <section className="signup-section steps-section">
      <div className="container">
        <h2>Steps to open a demat account with Zerodha</h2>

        <div className="steps-row">
          {steps.map((step, index) => (
            <div className="step-item" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
