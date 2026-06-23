"use client";

import { useState } from "react";
import { site } from "./site.config";

export default function LeadForm({ id }) {
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [form, setForm] = useState({
    address: "",
    name: "",
    phone: "",
    email: "",
    timeline: "ASAP",
  });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    // If no endpoint is configured yet, we just simulate success so the
    // demo works. Once you paste a Formspree URL into site.config.js,
    // real submissions will be emailed to you.
    if (!site.leadEndpoint) {
      console.log("LEAD CAPTURED (no endpoint configured):", form);
      setTimeout(() => setStatus("done"), 600);
      return;
    }

    try {
      const res = await fetch(site.leadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "done" : "error");
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="card" id={id}>
        <div className="success">
          <h3>Request received</h3>
          <p className="sub" style={{ marginBottom: 0 }}>
            Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""}! We&apos;ll review your
            property and reach out within 24 hours with a no-obligation cash offer.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="card" id={id} onSubmit={handleSubmit}>
      <h3>Get your cash offer</h3>
      <p className="sub">No obligation. No spam. Just an honest number.</p>

      <div className="field">
        <label htmlFor="address">Property address</label>
        <input
          id="address"
          required
          placeholder="123 Main St, Los Angeles, CA"
          value={form.address}
          onChange={update("address")}
        />
      </div>

      <div className="row2">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" required placeholder="Jane Doe" value={form.name} onChange={update("name")} />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            required
            type="tel"
            placeholder="(555) 555-5555"
            value={form.phone}
            onChange={update("phone")}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="you@email.com" value={form.email} onChange={update("email")} />
      </div>

      <div className="field">
        <label htmlFor="timeline">How soon do you want to sell?</label>
        <select id="timeline" value={form.timeline} onChange={update("timeline")}>
          <option>ASAP</option>
          <option>Within 30 days</option>
          <option>1–3 months</option>
          <option>Just exploring</option>
        </select>
      </div>

      <button className="btn btn-primary" type="submit" style={{ width: "100%" }} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Get my cash offer"}
      </button>

      {status === "error" && (
        <p className="form-note" style={{ color: "#e88" }}>
          Something went wrong. Please call us at {site.phone}.
        </p>
      )}
      <p className="form-note">Your information is private and never sold.</p>
    </form>
  );
}
