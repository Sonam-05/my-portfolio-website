import React, { useState } from "react";
import styled from "styled-components";
import { send } from "@emailjs/browser";
import { validateContact } from "../utils/validators";
import { motion } from "framer-motion";

const Wrap = styled.section`
  padding: 48px 16px;
  box-sizing: border-box;

  &.container {
    max-width: 980px;
    margin: 0 auto;
  }

  h2 {
    margin: 0 0 8px 0;
    font-size: 28px;
  }

  p {
    margin: 0 0 18px 0;
    color: var(--muted);
    font-size: 15px;
  }

  form {
    width: 100%;
  }

  /* grid: single column on mobile, two columns for name+email on tablet+ */
  .form-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .row {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 13px;
    margin-bottom: 6px;
    color: var(--muted);
  }

  input,
  textarea {
    padding: 12px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.14);
    background: transparent;
    color: var(--text);
    width: 100%;
    box-sizing: border-box;
    font-size: 15px;
    outline: none;
    transition: box-shadow 120ms ease, border-color 120ms ease;
  }

  input:focus,
  textarea:focus {
    border-color: rgba(124, 92, 255, 0.8);
    box-shadow: 0 6px 18px rgba(124, 92, 255, 0.06);
  }

  textarea {
    min-height: 140px;
    resize: vertical;
  }

  .controls {
    margin-top: 14px;
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
  }

  button[type="submit"] {
    padding: 10px 16px;
    border-radius: 10px;
    border: none;
    background: var(--accent);
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    min-width: 140px;
    box-shadow: 0 8px 20px rgba(124, 92, 255, 0.12);
  }

  button[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .error {
    color: #ef4444;
    font-size: 13px;
    margin-top: 6px;
  }

  .status {
    margin-top: 10px;
    font-size: 14px;
    color: var(--muted);
  }

  @media (min-width: 768px) {
    & {
      padding: 64px 24px;
    }

    .form-grid {
      grid-template-columns: 1fr 1fr; /* name & email side-by-side */
      gap: 18px;
      align-items: start;
    }

    /* make message occupy both columns */
    .message-row {
      grid-column: 1 / -1;
    }

    .controls {
      justify-content: flex-start;
    }
  }

  @media (min-width: 1100px) {
    & {
      padding: 72px 0;
    }
  }
`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, msg: "" });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateContact(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus({ loading: true, msg: "" });
    try {
      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("Email service not configured. Check .env.local");
      }

      const templateParams = {
        user_name: form.name,
        user_email: form.email,
        message: form.message,
      };

      await send(serviceID, templateID, templateParams, publicKey);
      setStatus({ loading: false, msg: "Message sent — thank you!" });
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        msg: "Could not send message. Try again later.",
      });
    }
  };

  return (
    <Wrap id="contact" className="container" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact</h2>
      <p>
        Use the form below or email me directly at{" "}
        <a href="mailto:isonamdangi@gmail.com">isonamdangi@gmail.com</a>.
      </p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        noValidate
      >
        <div className="form-grid">
          <div className="row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={onChange}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <div id="name-error" className="error" role="alert">
                {errors.name}
              </div>
            )}
          </div>

          <div className="row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={onChange}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <div id="email-error" className="error" role="alert">
                {errors.email}
              </div>
            )}
          </div>

          <div className="row message-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={form.message}
              onChange={onChange}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <div id="message-error" className="error" role="alert">
                {errors.message}
              </div>
            )}
          </div>
        </div>

        <div className="controls">
          <button
            type="submit"
            disabled={status.loading}
            aria-busy={status.loading}
          >
            {status.loading ? "Sending…" : "Send message"}
          </button>

          {status.msg && (
            <div className="status" role="status" aria-live="polite">
              {status.msg}
            </div>
          )}
        </div>
      </motion.form>
    </Wrap>
  );
}
