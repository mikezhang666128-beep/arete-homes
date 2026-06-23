import LeadForm from "./LeadForm";
import { site, cities } from "./site.config";

export default function Home() {
  return (
    <>
      {/* ── Header ─────────────────────────────── */}
      <header className="header">
        <div className="wrap nav">
          <a className="brand" href="#top">
            <img src="/logo.png" alt="Arete" />
            ARETE
          </a>
          <nav className="nav-links">
            <a href="#how">How it works</a>
            <a href="#buy">What we buy</a>
            <a href="#compare">Why Arete</a>
            <a href="#faq">FAQ</a>
            <a className="btn btn-primary" href="#offer">Get cash offer</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────── */}
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">100% cash · zero fees · 7-day close</div>
            <h1>
              Sell your California home <span className="shine">for cash</span>, on your terms.
            </h1>
            <p>
              Skip the repairs, the showings, and the agent commissions. Arete makes a fair,
              no-obligation cash offer and closes when it works for you.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#offer">Get my cash offer</a>
              <a className="btn btn-ghost" href={site.phoneHref}>Call {site.phone}</a>
            </div>
            <div className="trust">
              <div>
                <div className="num">7 days</div>
                <div className="lbl">Fastest close</div>
              </div>
              <div>
                <div className="num">$0</div>
                <div className="lbl">Fees &amp; commissions</div>
              </div>
              <div>
                <div className="num">As-is</div>
                <div className="lbl">Any condition</div>
              </div>
            </div>
          </div>
          <LeadForm id="offer" />
        </div>
      </section>

      {/* ── Value props ────────────────────────── */}
      <section className="section tight">
        <div className="wrap grid3">
          <div className="feature">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 5.5a3.5 3.5 0 0 1-4.7 4.7L4 16l4 4 5.8-5.8a3.5 3.5 0 0 0 4.7-4.7l-2.3 2.3-2-2 2.3-2.3z" />
              </svg>
            </div>
            <h3>No repairs needed</h3>
            <p>Leave the house exactly as it is. We handle every fix after closing.</p>
          </div>
          <div className="feature">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.6 12.4 12 21l-8.6-8.6A3 3 0 0 1 2.5 10V5a2.5 2.5 0 0 1 2.5-2.5h5a3 3 0 0 1 2 .9l8.6 8.6a1.4 1.4 0 0 1 0 2z" />
                <circle cx="7.5" cy="7.5" r="1.2" />
              </svg>
            </div>
            <h3>No hidden fees</h3>
            <p>The offer we give you is the cash you keep. No commissions, no surprises.</p>
          </div>
          <div className="feature">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="13" r="8" />
                <path d="M12 9v4l2.5 1.5M9 2h6" />
              </svg>
            </div>
            <h3>Fast and simple</h3>
            <p>Close in days, not months, and pick the date that fits your life.</p>
          </div>
        </div>
      </section>

      {/* ── How it works ───────────────────────── */}
      <section className="section" id="how">
        <div className="wrap">
          <div className="center mb-lg">
            <div className="eyebrow">How it works</div>
            <h2>Three steps to cash in hand</h2>
            <p className="lead center">Tell us about your property and we&apos;ll do the rest.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="n">1</div>
              <h3>Share your property</h3>
              <p>Enter your address and a few details. It takes under two minutes — no obligation.</p>
            </div>
            <div className="step">
              <div className="n">2</div>
              <h3>Get a cash offer</h3>
              <p>We review comparable sales and condition, then send a fair, transparent offer within 24 hours.</p>
            </div>
            <div className="step">
              <div className="n">3</div>
              <h3>Choose your close date</h3>
              <p>Accept the offer and pick your timeline. Close in as little as 7 days and get paid.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we buy ────────────────────────── */}
      <section className="section" id="buy">
        <div className="wrap">
          <div className="center mb-lg">
            <div className="eyebrow">What we buy</div>
            <h2>Any home, any situation</h2>
            <p className="lead center">
              From inherited homes to sudden relocations, we buy as-is so you can move forward.
            </p>
          </div>
          <div className="tags" style={{ justifyContent: "center", maxWidth: 820, margin: "0 auto" }}>
            {[
              "Inherited homes", "Foreclosure", "Divorce sale", "Tenant-occupied",
              "Vacant property", "Fire or water damage", "Foundation issues",
              "Code violations & liens", "Outdated or “ugly”", "Single-family",
              "Multi-family", "Condos & townhomes", "Behind on payments", "Job relocation",
            ].map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compare ────────────────────────────── */}
      <section className="section" id="compare">
        <div className="wrap">
          <div className="center mb-lg">
            <div className="eyebrow">Why Arete</div>
            <h2>Arete vs. a traditional listing</h2>
          </div>
          <div className="compare" style={{ maxWidth: 820, margin: "0 auto" }}>
            <div className="crow head">
              <div>&nbsp;</div>
              <div className="us">Arete</div>
              <div>Traditional listing</div>
            </div>
            {[
              ["Commissions", "$0", "5–6%"],
              ["Timeline", "7–14 days", "60–90 days"],
              ["Repairs", "None — sold as-is", "Often required"],
              ["Showings & open houses", "None", "Ongoing"],
              ["Closing costs", "We cover them", "Paid by you"],
              ["Certainty of sale", "Guaranteed cash", "Deals fall through"],
            ].map(([label, us, them]) => (
              <div className="crow" key={label}>
                <div>{label}</div>
                <div className="us">{us}</div>
                <div className="them">{them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service area ───────────────────────── */}
      <section className="section tight">
        <div className="wrap">
          <div className="center mb-lg">
            <div className="eyebrow">Where we buy</div>
            <h2>Serving homeowners across California</h2>
          </div>
          <div className="tags" style={{ justifyContent: "center", maxWidth: 760, margin: "0 auto" }}>
            {cities.map((c) => (
              <span className="tag" key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────── */}
      <section className="section" id="faq">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="center mb-lg">
            <div className="eyebrow">FAQ</div>
            <h2>Questions, answered</h2>
          </div>
          <div className="faq">
            {[
              ["What's the fastest way to sell my house?", "Selling directly to a cash buyer like Arete. We buy as-is with no repairs or showings, and can close in as little as 7 days."],
              ["How do you decide on the offer?", "We look at your home's current condition, any repairs needed, and recent comparable sales nearby. The offer is transparent and there's no obligation to accept."],
              ["Are there any fees or closing costs?", "No. We cover standard closing costs and charge zero commissions. The number we quote is the cash you walk away with."],
              ["Can you buy an inherited or probate property?", "Yes. We regularly buy inherited homes and can guide you through the probate steps for a smooth sale."],
              ["Will you buy a home that needs major work?", "Absolutely — foundation issues, fire or water damage, outdated interiors, you name it. We buy as-is."],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ───────────────────────────── */}
      <section className="section tight">
        <div className="wrap">
          <div className="band">
            <h2>Ready for an honest cash offer?</h2>
            <p>Tell us about your property and we&apos;ll get you a number. No pressure, no obligation.</p>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <a className="btn btn-primary" href="#offer">Get my cash offer</a>
              <a className="btn btn-ghost" href={site.phoneHref}>Call {site.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────── */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <a className="brand" href="#top" style={{ marginBottom: 14 }}>
                <img src="/logo.png" alt="Arete" />
                ARETE
              </a>
              <p style={{ maxWidth: 320, fontSize: 15 }}>
                We buy houses for cash across California — fair offers, no fees, and a close date that
                works for you.
              </p>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#how">How it works</a>
              <a href="#buy">What we buy</a>
              <a href="#compare">Why Arete</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <h4>Contact</h4>
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span style={{ display: "block", paddingTop: 8, fontSize: 14 }}>{site.city}</span>
            </div>
          </div>
          <div className="legal">
            <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
            <span>{site.city} · Cash home buyers</span>
          </div>
        </div>
      </footer>
    </>
  );
}
