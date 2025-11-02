// src/components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">reKart</span>
            </a>
            <div className="footer-contact pt-3">
              <p>Vijayanagar, Bengaluru</p>
              <p>Karnataka 560040, India</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+91 8217870976</span>
              </p>
              <p>
                <strong>Email:</strong> <span>pramoddixit608@gmail.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Buy Pre-owned Products</a></li>
              <li><a href="#">Sell Used Items</a></li>
              <li><a href="#">Peer-to-Peer Trading</a></li>
              <li><a href="#">Product Listing & Search</a></li>
              <li><a href="#">User Verification</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span> <strong className="px-1 sitename">reKart</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
}
