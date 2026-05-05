"use client";

import React, { useState } from "react";
import Image from "next/image";
import ScrollReveal from "../../../components/ScrollReveal";
import Link from "next/link";

// ============================================================
// 📌 基础数据与小图标
// ============================================================
const CheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#00a698"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0, marginTop: "2px" }}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// 弹窗关闭按钮的 X 图标
const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const jobsData = [
  {
    title: "Automation and Control Technician",
    category: "Technical",
    summary:
      "The Automation Technician assumes a wide range of functions to support the control system for the various equipment in the factory. Activities include research and analysis of production needs, design of solutions for implement changes and upgrades requested by the parties stakeholders of the system.",
    duties: [
      "Respect at all times the Health and Safety policies and procedures of Sunset Converting and continually interacting with supervisors and colleagues.",
      "Prepare preliminary procedural documents and contribute to the development POS and PTS.",
      "Correct, modify and optimize PLC programs and associated HMI graphics.",
      "Help develop standards for programming and presentation of data.",
      "Participate with the project team in the implementation of new equipment.",
      "Troubleshoot and resolve failures related to communications networks.",
      "Guarantee system integrity using robust antivirus software.",
    ],
    requirements: [
      "DEC in electricity or industrial electronics is strongly desired.",
      "At least 3 years of experience programming PLCs (Allen Bradley and Siemens or similar).",
      "Knowledge of Drive/VFD configuration and adjustment and troubleshooting.",
      "Ability to read and understand drawings and diagrams.",
      "Good knowledge of different types of communication and protocols (Optical fiber, Ethernet, TCP IP and Modbus).",
    ],
  },
  {
    title: "Mechanic",
    category: "Maintenance",
    summary:
      "The incumbent will work under the supervision of the Maintenance Manager and will have as main responsibilities: The maintenance of facilities, equipment and premises, while respecting the Health and Safety program implemented by the company.",
    duties: [
      "Rigour, excellence in the execution of mechanical tasks;",
      "Carry out repairs, adjustments and maintenance of various equipment on different shifts.",
      "Ensure daily cleanliness of the premises and good practices to maintain the facilities.",
      "Diagnose major breakdowns and establish priorities, undertake the work.",
      "Write a detailed intervention report and propose permanent solutions.",
      "Participate in the preventive maintenance program.",
      "Collaborate in the resolution of problems related to the efficiency and improvement of equipment.",
    ],
    requirements: [
      "DEC in Mechanical Engineering OR equivalent diploma;",
      "3 to 5 years of experience in a plant environment;",
      "Demonstrate rigour in the execution of tasks and the transmission of information;",
      "Know and apply all rules, procedures and regulations relating to health and safety;",
      "Have a toolbox with a minimum of equipment for an industrial application.",
    ],
  },
  {
    title: "Line Operator",
    category: "Production",
    summary:
      "Under the responsibility of the supervisor of his shift, the Line Operator will be required to perform various tasks related to production operations and ensure that they run smoothly.",
    duties: [
      "Be alert and ensure that equipment never runs out of raw materials, such as Winder, Case Packer and robotic equipment;",
      "Be meticulous and ensure that equipment is calibrated and adjusted according to specifications;",
      "Ensure the quality of the products according to the standards and requirements of the plant;",
      "Operate and monitor various production equipment in our departments;",
      "Contribute to maintaining a clean and safe environment;",
      "Open to receiving training in order to be very polyvalent.",
    ],
    requirements: [
      "Possess a high school diploma or equivalent. A person without a high school diploma, but with sufficient experience could be considered;",
      "Be punctual and recognized as a safe person who does not compromise on safety;",
      "Good physical resistance and the ability to work safely in a team environment;",
      "Autonomy, resourcefulness and availability for special calls or overtime if needed;",
      "Demonstrate the ability to organize himself and his work environment.",
    ],
  },
  {
    title: "Production Supervisor",
    category: "Management",
    summary:
      "Direct production as well as playing a key role in managing the production team in a dynamic work environment. The supervisor must be very vigilant regarding compliance with the occupational health and safety rules.",
    duties: [
      "Ensure that production targets are met and supervise a team in the factory;",
      "Manage activities related to the production of automated tissue paper converting lines;",
      "Optimize activities related to production to meet established objectives in terms of OHS efficiency, profitability, quality and supply;",
      "Participate effectively in cost reduction and control;",
      "Identify and control risks by ensuring the implementation of corrective and preventive measures;",
      "Ensure a healthy work environment conducive to the development of employees;",
      "Be responsible for training, evaluating and hiring team members;",
    ],
    requirements: [
      "DEC in operations management or other applicable training combined with experience;",
      "3 to 5 years of experience in work team management in a manufacturing environment;",
      "Leadership, dynamic, unifying, innovative and able to communicate effectively;",
      "Knowledge of computer tools (Microsoft Office Suite, etc.)",
      "OSH and continuous improvement oriented;",
      "Fluency in English (spoken and written).",
    ],
  },
  {
    title: "Forklift Operator",
    category: "Logistics",
    summary:
      "Under the supervision of the Lead shipper, the incumbent is responsible for the handling of goods stored in the plant as well as equipment and products received.",
    duties: [
      "Load, unload and move products and materials, manually or with the aid of handling accessories;",
      "Execute other material handling duties such as counting, weighing, sorting, packing and unpacking;",
      "Sort and place materials or objects on shelves, racks or bins according to organizational standards;",
      "Organize the handling and work area in an orderly fashion at all times;",
      "Maintain constant communication with the receiving/shipping team and report any discrepancies;",
      "Operate and maintain storage vehicles and equipment in a preventive way;",
    ],
    requirements: [
      "3 to 5 years of experience in shipping/receiving handling;",
      "Certified forklift operator with knowledge of pallet trucks, double reach truck, counterweight;",
      "A valid Class 1 driver’s license is required to use the company’s truck to transport materials between storage locations;",
      "Must be able to operate safely and efficiently in a fast-paced warehouse environment.",
    ],
  },
  {
    title: "Line Helper",
    category: "Support",
    summary:
      "Under the leadership of the Production Shift Supervisor, the Line Helper will work as needed in various departments of the plant.",
    duties: [
      "Assist the line operator in the various tasks related to the assigned production line;",
      "Perform various basic maintenance tasks on equipment and in the plant;",
      "Make sure to check the quality of the finished product;",
      "Participate in continuing education;",
      "Comply with health and safety regulations.",
    ],
    requirements: [
      "Be proactive, organized and punctual;",
      "Possess experience in a manufacturing environment;",
      "Physical fitness, dexterity, attention to detail and initiative;",
      "Availability to work overtime, if required;",
      "Have a good communication with the colleagues.",
    ],
  },
];

// ============================================================
// 🚀 PAGE COMPONENT
// ============================================================
export default function CareerPage() {
  // 状态：当前选中的职位对象（用于渲染 Modal），如果为 null 则关闭 Modal
  const [selectedJob, setSelectedJob] = useState<any | null>(null);

  // 禁止页面滚动逻辑 (当打开 modal 时)
  React.useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedJob]);

  return (
    <main style={{ backgroundColor: "#fff", position: "relative" }}>
      {/* 全局注入交互所需 CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* 限制卡片摘要为 3 行并显示省略号 */
        .job-summary {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Modal 进场动画 */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* 自定义 Modal 内的滚动条美化 */
        .modal-body::-webkit-scrollbar { width: 8px; }
        .modal-body::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 4px; }
        .modal-body::-webkit-scrollbar-thumb { background: #ccc; border-radius: 4px; }
        .modal-body::-webkit-scrollbar-thumb:hover { background: #00a698; }
      `,
        }}
      />

      {/* 1. HERO SECTION */}
      <div
        style={{
          height: "500px",
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/black-canada.png")',
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
          {/* <Image
            src="https://ivoiretissue.com/wp-content/uploads/2024/03/We-are-hiring-1.png"
            alt="We are hiring"
            width={400}
            height={80}
            style={{ marginBottom: "30px", filter: "brightness(0) invert(1)" }}
          /> */}
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
              fontSize: "24px",
              marginTop: "20px",
              /* 1. 将 maxWidth 从 900px 扩大，例如 1100px 或更高，给文字足够的空间排成两行 */
              maxWidth: "1100px",
              lineHeight: 1.8,
              margin: "20px auto 0", // 确保水平居中
              /* 2. 可选：稍微缩小一点字号（例如 22px），能更稳妥地保证在两行内 */
              // fontSize: "22px",
            }}
          >
            Join a team where sustainability and innovation meet. We are looking
            for passionate talents to help us lead Canada's transition toward
            eco-friendly bamboo tissue solutions.
          </p>
        </ScrollReveal>
      </div>

      {/* 2. CULTURE & VALUES SECTION */}
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 20px" }}
      >
        <ScrollReveal direction="up">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "36px", color: "#111", fontWeight: 700 }}>
              Let's Build the Future of Paper Converting Together
            </h2>
            <div
              style={{
                width: "60px",
                height: "4px",
                backgroundColor: "#00a698",
                margin: "20px auto",
              }}
            ></div>
            <p
              style={{
                fontSize: "20px",
                color: "#666",
                maxWidth: "800px",
                margin: "0 auto 30px",
                lineHeight: 1.8,
              }}
            >
              Our employer values reflect an inviting and exciting culture in an
              environment conducive to personal and professional development.
              Guided by respected and renowned industry leaders, a role on our
              team will inspire anyone who wants to grow and excel.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#00a698",
                fontWeight: 700,
                letterSpacing: "2px",
              }}
            >
              APPRECIATION • DEVELOPMENT • EVOLUTION • ACHIEVEMENT •
              ACKNOWLEDGMENT
            </p>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              title: "Promote Bamboo Paper Using",
              desc: "We actively encourage innovative ideas to meet industry challenges.",
            },
            {
              title: "Guarantee Safety and Welfare",
              desc: "We are committed to cultivating a secure working environment where everyone feels valued and inspired.",
            },
            {
              title: "Strive for Excellence",
              desc: "We constantly strive for perfection in everything we do, inviting every employee to go beyond.",
            },
            {
              title: "Guide with Integrity and Respect",
              desc: "Cultivating integrity as the foundation of our actions, we foster an environment of trust.",
            },
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} direction="up">
              <div
                style={{
                  padding: "40px",
                  backgroundColor: "#fafafa",
                  borderLeft: "4px solid #00a698",
                  borderRadius: "4px",
                  height: "100%",
                }}
              >
                <h3
                  style={{
                    fontSize: "22px",
                    color: "#111",
                    marginBottom: "15px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "18px", color: "#666", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 3. BENEFITS SECTION */}
      <div style={{ backgroundColor: "#f9fbfa", padding: "100px 20px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1 1 450px" }}>
            <ScrollReveal direction="left">
              <h3
                style={{
                  fontSize: "32px",
                  color: "#111",
                  marginBottom: "20px",
                }}
              >
                Operating in Cutting-Edge Bamboo-Centric Facilities
              </h3>
              <p style={{ fontSize: "18px", color: "#666", lineHeight: 1.8 }}>
                Our plant boasts state-of-the-art production lines, designed
                with a focus on sustainability through the use of bamboo
                products, ensuring the preservation of trees and the
                environment.
              </p>
            </ScrollReveal>
          </div>
          <div
            style={{
              flex: "1 1 450px",
              backgroundColor: "#fff",
              padding: "50px",
              borderRadius: "16px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.05)",
            }}
          >
            <ScrollReveal direction="right">
              <h3
                style={{
                  fontSize: "26px",
                  color: "#111",
                  marginBottom: "25px",
                }}
              >
                Benefits That Make A Difference
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Highly competitive remuneration",
                  "No shift rotation",
                  "State-of-the-art facilities",
                  "Online rewards with your contribution",
                ].map((benefit, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      marginBottom: "20px",
                      fontSize: "18px",
                      color: "#333",
                      fontWeight: 500,
                    }}
                  >
                    <CheckIcon /> {benefit}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* 4. JOBS GRID (高级卡片版) */}
      <div
        id="open-positions"
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
                  borderRadius: "16px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                  height: "100%", // 让卡片自然等高
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00a698";
                  e.currentTarget.style.boxShadow =
                    "0 15px 40px rgba(0, 166, 152, 0.1)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#eee";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.03)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* 分类标签 (Pill 形状) */}
                <div style={{ marginBottom: "20px" }}>
                  <span
                    style={{
                      backgroundColor: "#eaf6f5",
                      color: "#00a698",
                      padding: "6px 14px",
                      borderRadius: "50px",
                      fontSize: "14px",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    {job.category}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "15px",
                    color: "#111",
                    fontWeight: 800,
                    lineHeight: 1.3,
                  }}
                >
                  {job.title}
                </h3>

                <p
                  className="job-summary"
                  style={{
                    fontSize: "16px",
                    color: "#666",
                    lineHeight: 1.6,
                    marginBottom: "30px",
                    flexGrow: 1,
                  }}
                >
                  {job.summary}
                </p>

                {/* 底部按钮区 */}
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    marginTop: "auto",
                    paddingTop: "20px",
                    borderTop: "1px solid #f0f0f0",
                  }}
                >
                  <button
                    onClick={() => setSelectedJob(job)}
                    style={{
                      flex: 1,
                      padding: "12px 0",
                      backgroundColor: "transparent",
                      color: "#111",
                      border: "2px solid #e0e0e0",
                      borderRadius: "8px",
                      fontWeight: 600,
                      fontSize: "16px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#111";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#e0e0e0";
                    }}
                  >
                    View Details
                  </button>
                  <Link
                    href={`mailto:rh@ivoiretissue.com?subject=Application for ${job.title}`}
                    style={{
                      flex: 1,
                      padding: "12px 0",
                      backgroundColor: "#111",
                      color: "#fff",
                      border: "2px solid #111",
                      borderRadius: "8px",
                      textAlign: "center",
                      fontWeight: 600,
                      fontSize: "16px",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#00a698";
                      e.currentTarget.style.borderColor = "#00a698";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#111";
                      e.currentTarget.style.borderColor = "#111";
                    }}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 5. CONTACT BAR */}
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
          <p style={{ color: "#666", marginTop: "15px", fontSize: "20px" }}>
            We are always looking for great talent. Send your spontaneous
            application to:
          </p>
          <a
            href="mailto:rh@ivoiretissue.com"
            style={{
              display: "inline-block",
              marginTop: "20px",
              fontSize: "24px",
              color: "#00a698",
              fontWeight: 700,
              textDecoration: "none",
              borderBottom: "2px solid #00a698",
            }}
          >
            rh@ivoiretissue.com
          </a>
        </ScrollReveal>
      </div>

      {/* 6. MAP SECTION */}
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

      {/* ============================================================ */}
      {/* 🌟 优雅的 JOB DETAILS MODAL 弹窗 */}
      {/* ============================================================ */}
      {selectedJob && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeIn 0.2s ease-out",
          }}
          onClick={() => setSelectedJob(null)} // 点击遮罩层关闭
        >
          <div
            style={{
              backgroundColor: "#fff",
              width: "100%",
              maxWidth: "800px",
              maxHeight: "90vh", // 保证弹窗不会超出屏幕
              borderRadius: "20px",
              boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              animation: "slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              position: "relative",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()} // 防止点击内容区关闭
          >
            {/* Modal 头部: 标题与关闭按钮 */}
            <div
              style={{
                padding: "30px 40px",
                borderBottom: "1px solid #f0f0f0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                <span
                  style={{
                    backgroundColor: "#eaf6f5",
                    color: "#00a698",
                    padding: "6px 14px",
                    borderRadius: "50px",
                    fontSize: "13px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  {selectedJob.category}
                </span>
                <h2
                  style={{
                    fontSize: "32px",
                    color: "#111",
                    fontWeight: 800,
                    margin: "15px 0 0",
                  }}
                >
                  {selectedJob.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                style={{
                  background: "#f5f5f5",
                  border: "none",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#555",
                  transition: "0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#e0e0e0";
                  e.currentTarget.style.color = "#111";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f5f5f5";
                  e.currentTarget.style.color = "#555";
                }}
              >
                <CloseIcon />
              </button>
            </div>

            {/* Modal 内容区 (内部滚动) */}
            <div
              className="modal-body"
              style={{ padding: "40px", overflowY: "auto", flexGrow: 1 }}
            >
              <h4
                style={{
                  fontSize: "20px",
                  color: "#111",
                  marginBottom: "15px",
                  fontWeight: 700,
                }}
              >
                Job Summary
              </h4>
              <p
                style={{
                  fontSize: "16px",
                  color: "#555",
                  lineHeight: 1.8,
                  marginBottom: "40px",
                }}
              >
                {selectedJob.summary}
              </p>

              <h4
                style={{
                  fontSize: "20px",
                  color: "#111",
                  marginBottom: "20px",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ color: "#00a698" }}>■</span> Scope of Duties
              </h4>
              <ul
                style={{ listStyle: "none", padding: 0, margin: "0 0 40px 0" }}
              >
                {selectedJob.duties.map((duty: string, i: number) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "16px",
                      color: "#555",
                      lineHeight: 1.6,
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        marginTop: "6px",
                        width: "6px",
                        height: "6px",
                        backgroundColor: "#00a698",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    ></div>
                    {duty}
                  </li>
                ))}
              </ul>

              <h4
                style={{
                  fontSize: "20px",
                  color: "#111",
                  marginBottom: "20px",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ color: "#00a698" }}>■</span> Job Requirements
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {selectedJob.requirements.map((req: string, i: number) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "16px",
                      color: "#555",
                      lineHeight: 1.6,
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        marginTop: "6px",
                        width: "6px",
                        height: "6px",
                        backgroundColor: "#00a698",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    ></div>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal 底部常驻投递按钮 */}
            <div
              style={{
                padding: "20px 40px",
                borderTop: "1px solid #f0f0f0",
                backgroundColor: "#fafafa",
              }}
            >
              <Link
                href={`mailto:rh@ivoiretissue.com?subject=Application for ${selectedJob.title}`}
                style={{
                  display: "block",
                  padding: "16px 0",
                  backgroundColor: "#00a698",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "8px",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: "18px",
                  letterSpacing: "1px",
                  transition: "background 0.3s ease",
                  boxShadow: "0 10px 20px rgba(0, 166, 152, 0.2)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#008075")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#00a698")
                }
              >
                APPLY FOR THIS POSITION
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
