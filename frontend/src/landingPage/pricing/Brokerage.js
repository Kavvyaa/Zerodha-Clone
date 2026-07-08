import React from "react";

function Brokerage() {
  return (
    <div className="container p-5">
      <div className="row mb-5">
        <h2 className="mt-4 mb-4 fs-4" style={{ color: "#131313" }}>
          Charges for account opening
        </h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <td>Type of account</td>
              <td>Charges</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Individual account</td>
              <td>
                <span className="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td>Minor account</td>
              <td>
                <span className="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td>NRI account</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>HUF account</td>
              <td>
                <span
                  className="badge bg-success"
                  style={{ backgroundColor: "red" }}
                >
                  FREE
                </span>{" "}
                (online) / ₹ 500 (offline)
              </td>
            </tr>
            <tr>
              <td>Partnership, LLP, and Corporate accounts (offline only)</td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <h2 className="fs-4 mb-5">Demat AMC (Annual Maintenance Charge)</h2>
        <div style={{ display: "inline-block" }}>
          <span
            className="fs-5"
            style={{
              display: "inline-block",
              backgroundColor: "#f5f8fc",
              borderLeft: "4px solid #387ed1",
              padding: "10px 18px",
              color: "#424242",
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            Free for first year*
          </span>
        </div>
        <p className="mt-4 text-muted" style={{ fontSize: "0.80rem" }}>From second year onwards, for BSDA accounts:</p>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <td>Value of holdings</td>
              <td>AMC</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td>
                <span className="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td>₹4 lakh – ₹10 lakh</td>
              <td>	₹100 per year + 18% GST, charged quarterly</td>
            </tr>
            <tr>
              <td>Above ₹10 lakh</td>
              <td>	₹100 per year + 18% GST, charged quarterly</td>
            </tr>
          </tbody>
        </table>
        <p className="text-muted" style={{ fontSize: "0.80rem" }}>For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.</p>

<p className="mt-2 text-muted" style={{ fontSize: "0.80rem" }}>To learn more about BSDA, click here. To learn more about AMC, click here.</p>

<p className="mt-2 text-muted mb-5" style={{ fontSize: "0.80rem" }}>*Resident individual accounts only.</p>
      </div>
      <div className="row">
        <h2 className="fs-4 mt-5 mb-4">Charges for optional value added services</h2>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <td>Service</td>
                    <td>Billing Frequency</td>
                    <td>Charges</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tickertape</td>
                    <td>Monthly / Quarterly / Annual</td>
                    <td>Free: 0 | Pro: 249/699/2399</td>
                </tr>
                <tr>
                    <td>Smallcase</td>
                    <td>Per transaction</td>
                    <td>Buy & Invest More: 100 | SIP: 10</td>
                </tr>
                <tr>
                    <td>Kite Connect</td>
                    <td>Monthly</td>
                    <td>Connect: 500 | Personal: Free</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default Brokerage;
