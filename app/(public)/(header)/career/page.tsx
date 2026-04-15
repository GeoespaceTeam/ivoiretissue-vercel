"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "../../../components/ScrollReveal";
import Link from "next/link";
const jobsData = [
  {
    title: "Automation and Control Technician",
    category: "Technical",
    summary:
      "The Automation Technician assumes a wide range of functions to support the control system for the various equipment in the factory, ensuring reliable and continuous operation of essential equipment.",
    duties: [
      "Optimize PLC programs and associated HMI graphics",
      "Participate in the implementation of new equipment",
      "Troubleshoot failures related to communications networks",
      "Maintain backups of all software and programs",
      "Respect change management procedures of control systems",
    ],
    requirements: [
      "DEC in electricity or industrial electronics",
      "3+ years of PLC programming (Allen Bradley/Siemens)",
      "Knowledge of Drive/VFD configuration",
      "Ability to read and understand technical drawings",
    ],
  },
  {
    title: "Mechanic",
    category: "Maintenance",
    summary:
      "Responsible for the maintenance of facilities, equipment, and premises, while strictly respecting the Health and Safety program.",
    duties: [
      "Carry out repairs and maintenance on different shifts",
      "Perform daily inspections and cleanliness of premises",
      "Diagnose major breakdowns and establish priorities",
      "Participate in the preventive maintenance program",
    ],
    requirements: [
      "DEC in Mechanical Engineering or equivalent",
      "3 to 5 years of experience in a plant environment",
      "Knowledge of OHS procedures and regulations",
      "Own an industrial equipment toolbox",
    ],
  },
  {
    title: "Line Operator",
    category: "Production",
    summary:
      "Perform various tasks related to production operations and ensure smooth workflow under the shift supervisor's responsibility.",
    duties: [
      "Ensure raw material supply for winders and packers",
      "Calibrate and adjust equipment to specifications",
      "Monitor quality according to plant standards",
      "Operate and monitor various production equipment",
    ],
    requirements: [
      "High school diploma or equivalent experience",
      "Strong commitment to safety and punctuality",
      "Physical resistance for plant environment",
      "Ability to organize personal work area",
    ],
  },
  {
    title: "Production Supervisor",
    category: "Management",
    summary:
      "Lead and manage the production team in a dynamic environment, ensuring OHS compliance and production targets.",
    duties: [
      "Manage activities for automated converting lines",
      "Optimize OHS efficiency and profitability",
      "Train, evaluate, and hire team members",
      "Identify risks and implement corrective measures",
    ],
    requirements: [
      "DEC in operations management or equivalent",
      "3-5 years of team management in manufacturing",
      "Proficient in Microsoft Office Suite",
      "Fluent in English (spoken and written)",
    ],
  },
  {
    title: "Forklift Operator",
    category: "Logistics",
    summary:
      "Responsible for the handling of goods stored in the plant as well as incoming equipment and products.",
    duties: [
      "Load, unload and move products manually or with accessories",
      "Execute counting, sorting, and packing duties",
      "Maintain constant communication with receiving team",
      "Operate storage vehicles in a preventive way",
    ],
    requirements: [
      "3 to 5 years of shipping/receiving experience",
      "Certified operator (pallet/reach/counterweight)",
      "Valid Class 1 driver’s license (for transport between sites)",
      "Ability to operate in a fast-paced environment",
    ],
  },
  {
    title: "Line Helper",
    category: "Support",
    summary:
      "Work across various departments to assist production and maintain a clean environment.",
    duties: [
      "Assist line operators with assigned tasks",
      "Perform basic maintenance on equipment",
      "Verify quality of finished products",
      "Comply with all health and safety regulations",
    ],
    requirements: [
      "Organized, proactive, and punctual",
      "Manufacturing environment experience",
      "Physical fitness and dexterity",
      "Availability for overtime if required",
    ],
  },
];

export default function CareerPage() {
  return (
    <main style={{ backgroundColor: "#fff" }}>
      {/* 1. HERO SECTION - 模仿东实的大气背景 */}
      <div
        style={{
          height: "500px",
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://ivoiretissue.com/wp-content/uploads/2024/03/bamboo-1-scaled.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <ScrollReveal direction="up">
          <Image
            src="https://ivoiretissue.com/wp-content/uploads/2024/03/We-are-hiring-1.png"
            alt="We are hiring"
            width={400}
            height={80}
            style={{ marginBottom: "30px", filter: "brightness(0) invert(1)" }}
          />
          <h1
            style={{
              fontSize: "48px",
              fontWeight: 700,
              letterSpacing: "2px",
              margin: 0,
            }}
          >
            CAREERS AT IVOIRE TISSUE
          </h1>
          <p
            style={{
              fontSize: "28px",
              marginTop: "20px",
              maxWidth: "900px",
              opacity: 1,
              lineHeight: 1.8,
            }}
          >
            Join a team where sustainability and innovation meet. We are looking
            for passionate talents to help us lead Canada's transition toward
            eco-friendly bamboo tissue solutions.
          </p>
        </ScrollReveal>
      </div>

      {/* 2. JOBS GRID - 采用结构化网格排版 */}
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 20px" }}
      >
        <ScrollReveal direction="up">
          <div style={{ textAlign: "center", marginBottom: "70px" }}>
            <h2 style={{ fontSize: "36px", color: "#111", fontWeight: 700 }}>
              Open Positions
            </h2>
            <div
              style={{
                width: "60px",
                height: "4px",
                backgroundColor: "#00a698",
                margin: "20px auto",
              }}
            ></div>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "30px",
          }}
        >
          {jobsData.map((job, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <div
                style={{
                  padding: "40px",
                  border: "1px solid #eee",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#fafafa",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00a698";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.05)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#eee";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span
                  style={{
                    color: "#00a698",
                    fontSize: "26px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {job.category}
                </span>
                <h3
                  style={{
                    fontSize: "24px",
                    margin: "15px 0",
                    color: "#111",
                    fontWeight: 700,
                  }}
                >
                  {job.title}
                </h3>
                <p
                  style={{
                    fontSize: "18px",
                    color: "#666",
                    lineHeight: 1.6,
                    marginBottom: "25px",
                    flexGrow: 1,
                  }}
                >
                  {job.summary}
                </p>

                <div
                  style={{ borderTop: "1px solid #eee", paddingTop: "20px" }}
                >
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      marginBottom: "10px",
                      color: "#333",
                    }}
                  >
                    Key Duties:
                  </h4>
                  <ul
                    style={{
                      paddingLeft: "18px",
                      margin: 0,
                      fontSize: "18px",
                      color: "#777",
                      lineHeight: 1.6,
                    }}
                  >
                    {job.duties.slice(0, 3).map((d, i) => (
                      <li key={i} style={{ marginBottom: "5px" }}>
                        {d}
                      </li>
                    ))}
                    <li
                      style={{
                        listStyle: "none",
                        color: "#00a698",
                        fontWeight: 500,
                        marginTop: "10px",
                        fontSize: "20px"
                      }}
                    >
                      And more...
                    </li>
                  </ul>
                </div>

                <Link
                  href="mailto:sales@ivoiretissue.com"
                  style={{
                    marginTop: "30px",
                    display: "inline-block",
                    padding: "12px 25px",
                    backgroundColor: "#111",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "4px",
                    textAlign: "center",
                    fontWeight: 600,
                    fontSize: "20px",
                    transition: "background 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#00a698")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#111")
                  }
                >
                  APPLY NOW
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 3. CONTACT BAR - 模仿东实的底部转化区 */}
      <div
        style={{
          backgroundColor: "#f4f7f6",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <ScrollReveal direction="up">
          <h2 style={{ fontSize: "36px", color: "#111", fontWeight: 700 }}>
            Didn't find the right role?
          </h2>
          <p style={{ color: "#666", marginTop: "15px", fontSize: "24px" }}>
            We are always looking for great talent. Send your spontaneous
            application to:
          </p>
          <a
            href="mailto:sales@ivoiretissue.com"
            style={{
              display: "inline-block",
              marginTop: "25px",
              fontSize: "24px",
              color: "#00a698",
              fontWeight: 700,
              textDecoration: "none",
              borderBottom: "2px solid #00a698",
            }}
          >
            sales@ivoiretissue.com
          </a>
        </ScrollReveal>
      </div>

      {/* 4. MAP SECTION */}
      <section
        style={{
          width: "100%",
          height: "450px",
          overflow: "hidden",
          borderTop: "1px solid #eee",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.644131560946!2d-73.8967964!3d45.5574516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc923984d762029%3A0x7d6f5f3e9c60e0a5!2s222%20Rue%20Poirier%2C%20Saint-Eustache%2C%20QC%20J7R%206B1!5e0!3m2!1sen!2sca!4v1712690000000!5m2!1sen!2sca"
          style={{ width: "100%", height: "100%", border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Ivoire Tissue Location"
        ></iframe>
      </section>
    </main>
  );
}
