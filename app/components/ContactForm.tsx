"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const maxMessageLength = 180;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // TODO: 替换成你的实际表单提交逻辑（API route）
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <h3 style={{ color: "var(--color-primary)", marginBottom: 12 }}>
          Thank you!
        </h3>
        <p style={{ color: "var(--color-gray-600)" }}>
          Your message has been sent successfully. We will get back to you soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          style={{
            marginTop: 20,
            padding: "10px 24px",
            background: "var(--color-primary)",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontFamily: "var(--font-body)",
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="contact-name">
          Name <span className="required">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="E.g. John"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-company">Company Name</label>
        <input
          id="contact-company"
          type="text"
          placeholder="E.g. Apple"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-email">
          Email Address <span className="required">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder="E.g. john@doe.com"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-phone">Phone Number</label>
        <input
          id="contact-phone"
          type="tel"
          placeholder="E.g. +1 3004005000"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          placeholder="Enter your message..."
          maxLength={maxMessageLength}
          rows={6}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <div className="char-count">
          {formData.message.length} / {maxMessageLength}
        </div>
      </div>

      <button type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : "Send Message"}
      </button>
    </form>
  );
}
