// src/components/Stats.tsx
import React from "react";

export default function Stats() {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {["Active Users", "Products Listed", "Successful Resales", "Cities Covered"].map((text, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="0"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
