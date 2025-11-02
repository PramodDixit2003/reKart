// src/components/Header.tsx
import React from "react";

export default function Header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
          {/* <img src="assets/img/logo.png" alt="Logo" /> */}
          <h1 className="sitename">reKart</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="#about">Get Started</a>
      </div>
    </header>
  );
}
