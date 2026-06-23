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
    botcheck: "", // honeypot — humans leave blank
  });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    // Until a Web3Forms key is set, fall back to demo success so the page works.
    if (!site.web3formsKey) {
      console.log("LEAD CAPTURED (no Web3Forms key configured yet):", form);
      setTimeout(() => setStatus("done"), 600);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject: "New cash offer request — Arete Homes website",
          from_name: "Arete Homes website",
          replyto: form.email,
          botcheck: form.botcheck,
          "Property address": form.address,
          Name: form.name,
          Phone: form.phone,
          Email: form.email,
          "Selling timeline": form.timeline,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "done" : "error");
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

      <input
        type="text"
        name="botcheck"
        value={form.botcheck}
        onChange={update("botcheck")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

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
