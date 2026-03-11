import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { useRegistration } from "../context/RegistrationContext";

export default function ConfirmationPage() {
  const navigate = useNavigate();
  const { savedRegistration } = useRegistration();

  // Format the registration timestamp nicely
  const date = savedRegistration?.registeredAt
    ? new Date(savedRegistration.registeredAt).toLocaleString()
    : "just now";

  return (
    <div className="page">
      <Nav />

      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 40px" }}>
        <div style={{ maxWidth: 600, width: "100%", textAlign: "center" }}>

          {/* ── Success Icon ── */}
          <div className="fade-up" style={{
            width: 80, height: 80,
            margin: "0 auto 32px",
            border: "2px solid var(--success)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "2rem", color: "var(--success)",
            position: "relative",
          }}>
            ✓
            {/* Outer ring effect */}
            <div style={{ position: "absolute", inset: -8, border: "1px solid rgba(0,214,143,0.2)" }} />
          </div>

          {/* ── Heading ── */}
          <div className="fade-up-1">
            <div className="tag" style={{
              color: "var(--success)",
              borderColor: "rgba(0,214,143,0.3)",
              background: "rgba(0,214,143,0.05)",
              marginBottom: 20
            }}>
              Registration Confirmed
            </div>

            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.2rem", fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: 16, lineHeight: 1.1,
            }}>
              You're in,{" "}
              {/* Show first name only */}
              <span style={{ color: "var(--accent)" }}>
                {savedRegistration?.fullName?.split(" ")[0] || "friend"}
              </span>.
            </h1>

            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 40, fontSize: "0.95rem" }}>
              Your seat at <strong style={{ color: "var(--text)" }}>TechConf 2025</strong> has
              been reserved. We'll see you at the Kigali Convention Centre, September 12–14.
            </p>
          </div>

          {/* ── Summary Card ── */}
          <div className="card fade-up-2" style={{ textAlign: "left", marginBottom: 40 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div>
                <div style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6 }}>Attendee</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>{savedRegistration?.fullName}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6 }}>Ticket</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--accent)" }}>{savedRegistration?.ticketType}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6 }}>Email</div>
                <div style={{ fontSize: "0.85rem" }}>{savedRegistration?.email}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6 }}>Registered</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{date}</div>
              </div>
            </div>
          </div>

          {/* ── Actions ── */}
          <div className="fade-up-3" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-primary" onClick={() => navigate("/already-registered")}>
              View Full Registration →
            </button>
            <button className="btn btn-outline" onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}