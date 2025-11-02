// src/components/Services.tsx
import React from "react";

export default function Services() {
  return (
    <section id="services" className="services section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Making the exchange of used goods smarter, simpler, and safer.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {[
            {
              icon: "bi bi-arrow-left-right",
              title: "Peer-to-Peer Exchange",
              desc: "Swap your gadgets or gear directly with others, safely and securely.",
            },
            {
              icon: "bi bi-shield-lock",
              title: "Verified Listings",
              desc: "Every item is manually or AI-verified to ensure authenticity and quality.",
            },
            {
              icon: "bi bi-phone",
              title: "Mobile-first Experience",
              desc: "Browse and manage exchanges on the go with our mobile-friendly platform.",
            },
            {
              icon: "bi bi-geo-alt",
              title: "Local Deals",
              desc: "Discover items near your location and arrange easy meetups for exchange.",
            },
          ].map((service, idx) => (
            <div key={idx} className="col-lg-6" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
              <div className="service-card d-flex">
                <div className="icon flex-shrink-0">
                  <i className={service.icon}></i>
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
