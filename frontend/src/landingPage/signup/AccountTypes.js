import React from "react";

const accountTypes = [
  {
    icon: "bi-person",
    title: "Individual Account",
    copy: "Invest in equity, mutual funds and derivatives",
  },
  {
    icon: "bi-people",
    title: "HUF Account",
    copy: "Make tax-efficient investments for your family",
  },
  {
    icon: "bi-globe2",
    title: "NRI Account",
    copy: "Invest in equity, mutual funds, debentures, and more",
  },
  {
    icon: "bi-mortarboard",
    title: "Minor Account",
    copy: "Teach your little ones about money & invest for their future with them",
  },
  {
    icon: "bi-building",
    title: "Corporate / LLP/ Partnership",
    copy: "Manage your business surplus and investments easily",
  },
];

function AccountTypes() {
  return (
    <section className="signup-section account-types-section">
      <div className="container">
        <h2>Explore different account types</h2>

        <div className="account-grid">
          {accountTypes.map((item) => (
            <a href="/" className="account-type" key={item.title}>
              <i className={`bi ${item.icon}`}></i>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountTypes;
