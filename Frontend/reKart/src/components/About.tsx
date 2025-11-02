// src/components/About.tsx
import React from "react";

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 align-items-center justify-content-between">
          <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
            <span className="about-meta">MORE ABOUT US</span>
            <h2 className="about-title">Smart Platform for Used Product Exchange</h2>
            <p className="about-description">
              reCart connects individuals to safely buy and sell pre-owned products directly with one another. We
              simplify the process and ensure a secure, hassle-free experience.
            </p>

            <div className="row feature-list-wrapper">
              <div className="col-md-6">
                <ul className="feature-list">
                  <li><i className="bi bi-check-circle-fill"></i> Peer-to-peer marketplace</li>
                  <li><i className="bi bi-check-circle-fill"></i> Secure product listings</li>
                  <li><i className="bi bi-check-circle-fill"></i> Real user reviews</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="feature-list">
                  <li><i className="bi bi-check-circle-fill"></i> Smart search & filters</li>
                  <li><i className="bi bi-check-circle-fill"></i> Verified user profiles</li>
                  <li><i className="bi bi-check-circle-fill"></i> Trusted local deals</li>
                </ul>
              </div>
            </div>

            <div className="info-wrapper">
              <div className="row gy-4">
                <div className="col-lg-5">
                  <div className="profile d-flex align-items-center gap-3">
                    <img src="assets/img/profile.png" alt="CEO" className="profile-image" />
                    <div>
                      <h4 className="profile-name">Pramod Dixit</h4>
                      <p className="profile-position">Founder</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="contact-info d-flex align-items-center gap-2">
                    <i className="bi bi-telephone-fill"></i>
                    <div>
                      <p className="contact-label">Call me anytime</p>
                      <p className="contact-number">+91 82178 70976</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
            <div className="image-wrapper">
              <div className="images position-relative" data-aos="zoom-out" data-aos-delay="400">
                <img src="assets/img/about-5.webp" alt="Business Meeting" className="img-fluid main-image rounded-4" />
                <img src="assets/img/about-2.webp" alt="Team Discussion" className="img-fluid small-image rounded-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
