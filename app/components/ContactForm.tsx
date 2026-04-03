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
    // TODO: 接入实际API
    try {
      await new Promise((r) => setTimeout(r, 1000));
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
        <h3 style={{ color: "var(--color-primary)", marginBottom: 12, fontSize: 18 }}>
          Thank you!
        </h3>
        <p style={{ color: "var(--color-gray-600)", fontSize: 14 }}>
          Your message has been sent successfully.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="submit-btn"
          style={{ marginTop: 20, width: "auto", padding: "10px 28px" }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label>Name <span className="required">*</span></label>
        <input
          type="text"
          placeholder="E.g. John"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Company Name</label>
        <input
          type="text"
          placeholder="E.g. Apple"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Email Address <span className="required">*</span></label>
        <input
          type="email"
          placeholder="E.g. john@doe.com"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="E.g. +1 3004005000"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          placeholder="Enter your message..."
          maxLength={maxMessageLength}
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <div className="char-count">
          {formData.message.length} / {maxMessageLength}
        </div>
      </div>
      <button type="submit" className="submit-btn" disabled={submitting}>
        {submitting ? "Submitting..." : "Send Message"}
      </button>
    </form>
  );
}
