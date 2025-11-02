// src/components/Contact.tsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Have a question or want to sell something? Reach out — we’ll get back to you soon.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-5">
            <div className="info-box" data-aos="fade-up" data-aos-delay="200">
              <h3>Contact Info</h3>
              <p>Feel free to reach out to us with any questions, suggestions, or feedback. We're here to help!</p>

              <div className="info-item" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box"><i className="bi bi-geo-alt"></i></div>
                <div className="content">
                  <h4>Our Location</h4>
                  <p>Vijayanagar, Bengaluru</p>
                  <p>Karnataka 560040, India</p>
                </div>
              </div>

              <div className="info-item" data-aos="fade-up" data-aos-delay="400">
                <div className="icon-box"><i className="bi bi-telephone"></i></div>
                <div className="content">
                  <h4>Phone Number</h4>
                  <p>+91 8217870976</p>
                </div>
              </div>

              <div className="info-item" data-aos="fade-up" data-aos-delay="500">
                <div className="icon-box"><i className="bi bi-envelope"></i></div>
                <div className="content">
                  <h4>Email Address</h4>
                  <p>pramoddixit608@gmail.com</p>
                  <p>pramoddixit098@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
              <h3>Get In Touch</h3>
              <p>Let’s connect! We’re always open to your ideas, questions, or partnerships.</p>

              <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                  </div>
                  <div className="col-12">
                    <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control" name="message" rows={6} placeholder="Message" required></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                    <button type="submit" className="btn">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
