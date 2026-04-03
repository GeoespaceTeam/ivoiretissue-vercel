"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 接入你的表单提交逻辑 (例如 Resend, EmailJS, 或你的后端 API)
    alert("Message sent!");
  };

  return (
    <div className="bg-white pb-20">
      {/* 页面标题区 */}
      <section className="bg-gray-50 py-16 text-center">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-serif text-[#00a698] tracking-wide animate-fade-in-left">
            CONTACT US
          </h1>
        </div>
      </section>

      {/* 主体内容区：左右网格布局 */}
      <section className="container mx-auto px-6 max-w-6xl mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 左侧：留言表单 (对应原站的 Forminator 表单) */}
          <div className="form-wrapper bg-white p-8 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="form-group">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="E.g. John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00a698] focus:ring-1 focus:ring-[#00a698] transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E.g. john@doe.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00a698] focus:ring-1 focus:ring-[#00a698] transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="form-group">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="E.g. Subject here"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00a698] focus:ring-1 focus:ring-[#00a698] transition-colors"
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={180}
                  placeholder="Enter your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#00a698] focus:ring-1 focus:ring-[#00a698] transition-colors resize-y"
                ></textarea>
                <div className="text-right text-xs text-gray-400 mt-1">
                  {formData.message.length} / 180
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#00a698] hover:bg-[#008f83] text-white font-semibold py-3 px-6 rounded transition-colors duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* 右侧：联系方式信息 (提取自你提供的文本 block) */}
          <div className="contact-info flex flex-col justify-center space-y-8 text-gray-700">
            {/* Hours */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-[#00a698] inline-block pb-1">
                HOURS
              </h3>
              <p className="text-md">Monday – Friday</p>
              <p className="text-md">8:30 AM to 05:00 PM</p>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-[#00a698] inline-block pb-1">
                OUR ADDRESS
              </h3>
              <p className="text-md mb-4 leading-relaxed">
                222 Rue Poirier, Saint-Eustache, #32, <br />
                Quebec, Canada, J7R 6B1
              </p>

              <table className="w-full text-left text-md">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 font-semibold w-24 align-top">Email</td>
                    <td className="py-3">
                      <a
                        href="mailto:sales@ivoiretissue.com"
                        className="hover:text-[#00a698] transition-colors"
                      >
                        sales@ivoiretissue.com
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 font-semibold align-top">Tel</td>
                    <td className="py-3">
                      <a
                        href="tel:514-971-8238"
                        className="block hover:text-[#00a698] transition-colors mb-1"
                      >
                        514-971-8238
                      </a>
                      <a
                        href="tel:514-291-8063"
                        className="block hover:text-[#00a698] transition-colors"
                      >
                        514-291-8063
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold align-top">Website</td>
                    <td className="py-3">
                      <a
                        href="https://www.ivoiretissue.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#00a698] transition-colors"
                      >
                        www.ivoiretissue.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Social Icons (使用 SVG 完美复刻) */}
            <div className="pt-4 flex items-center space-x-4">
              {/* Facebook */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#00a698] hover:text-white transition-all transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </a>
              {/* Twitter (X) */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#00a698] hover:text-white transition-all transform hover:-translate-y-1"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/watch?v=Cw_H_hXJ3SA&t=15s"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#00a698] hover:text-white transition-all transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 576 512">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#00a698] hover:text-white transition-all transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#00a698] hover:text-white transition-all transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
