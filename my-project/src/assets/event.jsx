import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { useRegistration } from "../context/RegistrationContext";

const speakers = [
  { name: "Dr. Aisha Kamara", role: "AI Research Lead, DeepMind", topic: "The Future of Generative Systems" },
  { name: "Marcus Chen", role: "CTO, Vercel", topic: "Edge Computing at Scale" },
  { name: "Priya Nair", role: "Founder, BuildSpace", topic: "Developer Experience in 2025" },
  { name: "James Okonkwo", role: "Open Source Advocate", topic: "Community-Driven Innovation" },
];

const highlights = [
  { num: "40+", label: "Speakers" },
  { num: "2K+", label: "Attendees" },
  { num: "3",   label: "Days" },
  { num: "12",  label: "Workshops" },
];

export default function EventInfo() {
  const navigate = useNavigate();
  const { isRegistered } = useRegistration();

  return (
    <div className="page">
      <Nav />

      {/* ── Hero Section ── */}
      <section style={{ padding: "80px 40px 60px", maxWidth: 900, margin: "0 auto", width: "100%" }}>
        <div className="fade-up">
          <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
            <span className="tag tag-accent">September 12–14, 2025</span>
            <span className="tag tag-orange">Kigali Convention Centre</span>
            <span className="tag tag-purple">Rwanda</span>
          </div>
        </div>

        <div className="fade-up-1">
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: 24,
          }}>
            Tech Innovation<br />
            <span style={{ color: "var(--accent)" }}>Conference</span>
            <span style={{ color: "var(--text-muted)" }}>_2025</span>
          </h1>
        </div>

        <div className="fade-up-2">
          <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 600, marginBottom: 40 }}>
            Three days of deep technical sessions, hands-on workshops, and unfiltered
            conversations with the builders shaping the next decade of software.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {/* 👇 Smart button — changes based on registration status */}
            <button
              className="btn btn-primary"
              onClick={() => navigate(isRegistered ? "/already-registered" : "/register")}
            >
              {isRegistered ? "View My Registration →" : "Register Now →"}
            </button>
            <a href="#speakers" className="btn btn-outline">View Speakers</a>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ padding: "40px", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--border)" }}>
          {highlights.map(({ num, label }) => (
            <div key={label} style={{ background: "var(--bg)", padding: "32px 24px", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 8 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Speakers ── */}
      <section id="speakers" style={{ padding: "80px 40px", maxWidth: 900, margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: 40 }}>
          <div className="tag tag-accent" style={{ marginBottom: 16 }}>Featured Speakers</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Learn from the best
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 1, background: "var(--border)" }}>
          {speakers.map((s, i) => (
            <div key={i} className="card" style={{ background: "var(--surface)" }}>
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                background: `hsl(${i * 60 + 180}, 60%, 40%)`,
                marginBottom: 16,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff"
              }}>
                {s.name[0]}
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: 4 }}>{s.name}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--accent)", marginBottom: 12 }}>{s.role}</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5 }}>"{s.topic}"</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Footer ── */}
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 800, marginBottom: 16, letterSpacing: "-0.02em" }}>
            Seats are limited.<br />
            <span style={{ color: "var(--accent)" }}>Secure yours now.</span>
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: 32, lineHeight: 1.7 }}>
            Join 2,000+ developers, designers, and founders.
          </p>
          <button
            className="btn btn-primary"
            style={{ fontSize: "1rem", padding: "18px 40px" }}
            onClick={() => navigate(isRegistered ? "/already-registered" : "/register")}
          >
            {isRegistered ? "View My Registration →" : "Register for Free →"}
          </button>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid var(--border)", padding: "24px 40px", display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--accent)", fontSize: "0.9rem" }}>TECHCONF_2025</div>
        <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>© 2025 Tech Innovation Conference</div>
      </footer>
    </div>
  );
}