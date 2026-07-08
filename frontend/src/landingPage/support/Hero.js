import React from "react";
import './Hero.css';

function Hero() {
  return (
    <section className="support-section py-5">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="">Support Portal</h1>

          <button className="btn btn-primary px-4 py-2">
            My tickets
          </button>
        </div>

        {/* Search Bar */}

        <div className="search-box">
          <i className="bi bi-search search-icon"></i>

          <input
            type="text"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
