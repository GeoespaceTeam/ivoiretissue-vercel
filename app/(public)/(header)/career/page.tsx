"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// 提取的职位数据字典，方便维护
const jobsData = [
  {
    title: "AUTOMATION AND CONTROL TECHNICIAN",
    summary: [
      "The Automation Technician assumes a wide range of functions to support the control system for the various equipment in the factory. Activities include research and analysis of production needs, design of solutions for implement changes and upgrades requested by the parties stakeholders of the system. He installs and maintains equipment, develops and saves software, troubleshoots and resolves system problems and disruptions in the processes to ensure reliable and continuous operation of essential equipment.",
    ],
    duties: [
      "Respect at all times the Health and Safety policies and procedures of Sunset Converting and continually interacting with supervisors and colleagues to fully understand the ethics and values of the company",
      "Prepare preliminary procedural documents and contribute to the development POS and PTS.",
      "Correct, modify and optimize PLC programs and associated HMI graphics minor changes or system problems",
      "Help develop standards for programming and presentation of data",
      "Participate with the project team in the implementation of new equipment",
      "Help operators and other system stakeholders resolve issues Daily operational difficulties or production interruptions",
      "Respect at all times the change management procedures of control systems",
      "Assist in the training and development of other technicians and interns",
      "Troubleshoot and resolve failures related to communications networks",
      "Help operators develop plans, programs, sequences of control and HMI diagrams to improve access to data and process performance",
      "Maintain backups of all software, programs, drawing such as built and any other modifications",
      "Guarantee system integrity using robust antivirus software and secure machine access protocols",
      "Participate in the evaluation of new hardware and software",
      "Modify, force or bypass permissives (“interlock“) only when approved.",
    ],
    requirements: [
      "DEC in electricity or industrial electronics is strongly desired (or any experience deemed equivalent)",
      "At least 3 years of experience programming PLCs (Allen Bradley and Siemens or similar) - Siemens Step 7, WinCC, Simatic Series: S300-S400",
      "Knowledge of Drive/VFD configuration and adjustment and troubleshooting. - Power Flex Series, Mitsubishi",
      "Ability to read and understand drawings and diagrams",
      "Good knowledge of different types of communication and protocols (Optical fiber, Ethernet, TCP IP and Modbus)",
      "Knowledge of the electrical code.",
    ],
  },
  {
    title: "MECHANIC",
    summary: [
      "The incumbent will work under the supervision of the Maintenance Manager and will have as main responsibilities: The maintenance of facilities, equipment and premises, while respecting the Health and Safety program implemented by the company.",
    ],
    duties: [
      "Rigour, excellence in the execution of mechanical tasks;",
      "Carry out repairs, adjustments and maintenance of various equipment on different shifts (day, evening, night and weekends).",
      "Ensure daily cleanliness of the premises and good practices to maintain the facilities (equipment)",
      "In the event of a major breakdown, be able to make an initial diagnosis and establish priorities, undertake the work and, if necessary, communicate with the resource persons according to the analysis of the situation",
      "Be able to write a detailed intervention report and propose permanent solutions",
      "Carry out inspection routes, when requested",
      "Master the work order process",
      "Participate in the preventive maintenance program",
      "Carry out repairs on components in the workshop",
      "Collaborate in the resolution of problems related to the efficiency and improvement of equipment",
      "Perform any other related tasks.",
    ],
    requirements: [
      "DEC in Mechanical Engineering OR equivalent diploma;",
      "3 to 5 years of experience in a plant environment;",
      "Demonstrate rigour in the execution of tasks and the transmission of information;",
      "Be responsible for implementing actions by following a problem-solving process in case of repetitive breakdowns or equipment failure;",
      "Demonstrate a sense of initiative by being responsible for deepening and mastering the required knowledge;",
      "Know and apply all rules, procedures and regulations relating to health and safety;",
      "Be able to identify risks and act effectively in case of emergency;",
      "Have a toolbox with a minimum of equipment for an industrial application.",
    ],
  },
  {
    title: "LINE OPERATOR",
    summary: [
      "Under the responsibility of the supervisor of his shift, the Line Operator will be required to perform various tasks related to production operations and ensure that they run smoothly.",
    ],
    duties: [
      "Be alert and ensure that equipment never runs out of raw materials, such as Winder, Case Packer and robotic equipment;",
      "Be meticulous and ensure that equipment is calibrated and adjusted according to specifications;",
      "Ensure the quality of the products according to the standards and requirements of the plant;",
      "Operate and monitor various production equipment in our departments;",
      "Contribute to maintaining a clean and safe environment;",
      "Apply the required health and safety procedures;",
      "Work safely, making no compromises on this point;",
      "Be resourceful and respectful of regulations and procedures;",
      "Open to receiving training in order to be very polyvalent.",
    ],
    requirements: [
      "Possess a high school diploma or equivalent. A person without a high school diploma, but with sufficient experience could be considered;",
      "Be punctual;",
      "Be recognized as a safe person who does not compromise on safety;",
      "Good physical resistance and the ability to work safely in a team environment;",
      "Autonomy, resourcefulness and availability for special calls or overtime if needed;",
      "Demonstrate the ability to organize himself and his work environment.",
    ],
  },
  {
    title: "LINE HELPER",
    summary: [
      "Under the leadership of the Production Shift Supervisor, the Line Helper will work as needed in various departments of the plant.",
    ],
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
  {
    title: "FORKLIFT OPERATOR",
    summary: [
      "Under the supervision of the Lead shipper, the incumbent is responsible for the handling of goods stored in the plant as well as equipment and products received.",
    ],
    duties: [
      "Load, unload and move products and materials, manually or with the aid of handling accessories;",
      "Execute other material handling duties such as counting, weighing, sorting, packing and unpacking a variety of products and materials;",
      "Sort and place materials or objects on shelves, racks or bins according to organizational standards;",
      "Organize the handling and work area in an orderly fashion at all times;",
      "Wear appropriate safety equipment;",
      "Maintain constant communication with the receiving/shipping team and report any discrepancies;",
      "Operate and maintain storage vehicles and equipment in a preventive way;",
      "Any other related tasks, as required.",
    ],
    requirements: [
      "3 to 5 years of experience in shipping/receiving handling;",
      "Certified forklift operator with knowledge of pallet trucks, double reach truck, counterweight;",
      "A valid Class 1 driver’s license is required to use the company’s truck to transport materials between storage locations;",
      "Must be able to operate safely and efficiently in a fast-paced warehouse environment.",
    ],
  },
  {
    title: "PRODUCTION SUPERVISOR",
    summary: [
      "Under the supervision of the Production Manager, the Production Supervisor will have the challenge of directing production as well as playing a key role in managing the production team in a dynamic work environment.",
      "The supervisor must be very vigilant regarding compliance with the occupational health and safety rules and procedures put in place by the company.",
    ],
    duties: [
      "Ensure that production targets are met;",
      "Supervise a team in the factory;",
      "Manage activities related to the production of automated tissue paper converting lines;",
      "Optimize activities related to production in order to meet established objectives in terms of OHS efficiency, profitability, quality and supply;",
      "Participate effectively in cost reduction and control, by seeking innovative options in order to respect budgets;",
      "Identify and control risks by ensuring the implementation of corrective and preventive measures as well as coordinate the OHS activities of his shift;",
      "Ensure a healthy work environment conducive to the development of employees through a regular presence on the floor;",
      "Motivate employees and ensure rigor in daily management;",
      "Be responsible for training, evaluating and hiring team members;",
      "Build, develop and maintain a high-performance and motivated work team;",
      "Participate in improvement projects.",
    ],
    requirements: [
      "DEC in operations management or other applicable training combined with experience;",
      "3 to 5 years of experience in work team management in a manufacturing environment;",
      "Leadership, dynamic, unifying, innovative and able to communicate effectively;",
      "Knowledge of computer tools (Microsoft Office Suite, etc.)",
      "OSH and continuous improvement oriented;",
      "A good analytical mind and great rigor;",
      "Autonomy, sense of initiative and active listening.",
      "Fluency in English (spoken and written)",
    ],
  },
];

export default function CareerPage() {
  // 状态：记录当前打开的手风琴面板索引
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    // 如果点击当前已打开的，就关闭它；否则打开点击的这个
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white w-full pb-0">
      {/* 顶部 Hero 区域 */}
      <section className="pt-20 pb-10 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Image
            src="https://ivoiretissue.com/wp-content/uploads/2024/03/We-are-hiring-1.png"
            alt="We are hiring"
            width={578}
            height={112}
            className="mb-12"
            priority
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 tracking-wide">
            OPEN POSITIONS
          </h1>
          <div className="w-16 h-1 bg-[#00a698] mt-6"></div>
        </div>
      </section>

      {/* 职位列表手风琴 (Accordion) 区域 */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto border-t border-gray-200">
          {jobsData.map((job, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-gray-200">
                {/* 手风琴头部 (点击区域) */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 flex justify-between items-center focus:outline-none group transition-colors hover:text-[#00a698]"
                >
                  <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide text-left text-gray-800 group-hover:text-[#00a698] transition-colors">
                    {job.title}
                  </h2>
                  <span className="ml-4 flex-shrink-0 text-gray-400 group-hover:text-[#00a698]">
                    {/* SVG 箭头，根据展开状态旋转 */}
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#00a698]" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* 手风琴内容区域 */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "max-h-[3000px] opacity-100 pb-10"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-8 text-gray-600 text-[15px] leading-relaxed">
                    {/* Job Summary */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                        Job Summary and Responsibilities
                      </h4>
                      {job.summary.map((para, pIdx) => (
                        <p key={pIdx} className="mb-3">
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Scope of Duties */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                        Scope of Duties
                      </h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {job.duties.map((duty, dIdx) => (
                          <li key={dIdx} className="pl-1">
                            {duty}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Job Requirements */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                        Job Requirements
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 mb-6">
                        {job.requirements.map((req, rIdx) => (
                          <li key={rIdx} className="pl-1">
                            {req}
                          </li>
                        ))}
                      </ul>
                      <p className="font-semibold text-gray-900 text-base mt-8">
                        Please send your CV to :{" "}
                        <a
                          href="mailto:rh@ivoiretissue.com"
                          className="bg-[#00a698]/10 text-[#00a698] font-bold px-2 py-1 rounded hover:bg-[#00a698] hover:text-white transition-colors"
                        >
                          rh@ivoiretissue.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 底部 Google Maps */}
      <section className="w-full h-[400px]">
        <iframe
          src="https://maps.google.com/maps?q=222%20Rue%20Poirier,%20%2330,%20Saint-Eustache,%20J7R%206B1&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          title="Ivoire Tissue Location"
        ></iframe>
      </section>
    </div>
  );
}
