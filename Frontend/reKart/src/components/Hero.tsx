// src/components/Hero.tsx
import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
              <div className="company-badge mb-4">
                <i className="bi bi-gear-fill me-2"></i>
                Trusted Peer-to-Peer Marketplace
              </div>

              <h1 className="mb-4">
                ReKart Exchange <br />
                <span className="accent-text">Buy Smart. Sell Easy.</span>
              </h1>

              <p className="mb-4 mb-md-5">
                We connect people to trade used products.
                <br />
                Safe, direct, and simple.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-image" data-aos="zoom-out" data-aos-delay="300">
              <img src="assets/img/exchange.png" alt="Hero" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
