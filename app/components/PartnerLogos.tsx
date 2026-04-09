"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

const PARTNERS = [
  {
    name: "FSC",
    img: "https://ivoiretissue.com/wp-content/uploads/2024/03/fsc-logo.png",
  },
  {
    name: "Eco-Cert",
    img: "https://ivoiretissue.com/wp-content/uploads/2024/03/eco-cert.png",
  },
  { name: "Logistics Partner", img: "/images/partner-logistics.png" },
  { name: "Retailer A", img: "/images/partner-retail.png" },
];

export default function PartnerLogos() {
  return (
    <section
      style={{
        background: "#fcfcfc",
        padding: "80px 20px",
        borderTop: "1px solid #f0f0f0",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ScrollReveal direction="up">
          <div style={{ marginBottom: "50px" }}>
            <h1
              style={{
                fontSize: "32px",
                color: "#999",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "2px",
                textAlign: "center",
              }}
            >
              Trusted Partners & Certifications
            </h1>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "40px",
            }}
          >
            {PARTNERS.map((p, i) => (
              <div
                key={i}
                style={{
                  filter: "grayscale(100%)",
                  opacity: 0.6,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0%)";
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(100%)";
                  e.currentTarget.style.opacity = "0.6";
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.name}
                  style={{ height: "60px", width: "auto", display: "block" }}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
