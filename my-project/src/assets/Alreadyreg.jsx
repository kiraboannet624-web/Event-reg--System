import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { useRegistration } from "../context/RegistrationContext";

const ticketColors = {
  Student:  "#a78bfa",
  Standard: "var(--accent)",
  VIP:      "var(--accent2)",
};

export default function AlreadyRegistered() {
  const navigate = useNavigate();
  const { savedRegistration, cancelRegistration, startEditing } = useRegistration();

  // Safety redirect if somehow there's no data
  if (!savedRegistration) {
    navigate("/");
    return null;
  }

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel your registration? This cannot be undone.")) {
      cancelRegistration();   // Clears localStorage + resets state
      navigate("/");
    }
  };

  const handleEdit = () => {
    startEditing();           // Loads saved data into formData, then clears saved state
    navigate("/register");    // Sends user back to form — pre-filled with their old data
  };

  const date = new Date(savedRegistration.registeredAt).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  const fields = [
    ["Full Name",            savedRegistration.fullName],
    ["Email Address",        savedRegistration.email],
    ["Phone Number",         savedRegistration.phone        || "—"],
    ["Organization",         savedRegistration.organization || "—"],
    ["Dietary Requirements", savedRegistration.dietary      || "No restrictions"],
    ["Additional Notes",     savedRegistration.notes        || "None"],
  ];

  return (
    <div className="page">
      <Nav />

      <main style={{ flex: 1, padding: "60px 40px", maxWidth: 900, margin: "0 auto", width: "100%" }}>

        {/* ── Page Header ── */}
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
            <span className="tag" style={{ color: "var(--success)", borderColor: "rgba(0,214,143,0.3)", background: "rgba(0,214,143,0.05)" }}>
              ✓ Already Registered
            </span>
            <span className="tag tag-accent">{date}</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>
            Welcome back, {savedRegistration.fullName.split(" ")[0]}.
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            You're registered for TechConf 2025. Here are your details.
          </p>
        </div>

        {/* ── Ticket Highlight ── */}
        <div className="fade-up-1" style={{
          border: `1px solid ${ticketColors[savedRegistration.ticketType] || "var(--accent)"}`,
          background: "rgba(0,229,255,0.04)",
          padding: "24px 32px",
          marginBottom: 24,
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16,
        }}>
          <div>
            <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>Your Ticket</div>
            <div style={{
              fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 800,
              color: ticketColors[savedRegistration.ticketType] || "var(--accent)",
              letterSpacing: "-0.02em",
            }}>
              {savedRegistration.ticketType}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>Event</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>TechConf 2025</div>
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Sep 12–14 · Kigali, Rwanda</div>
          </div>
        </div>

        {/* ── Details Table ── */}
        <div className="card fade-up-2" style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: 24, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
            Registration Details
          </div>
          <table className="review-table">
            <tbody>
              {fields.map(([label, value]) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Actions ── */}
        <div className="fade-up-3" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button className="btn btn-primary" onClick={handleEdit}>
            ✏ Edit Registration
          </button>
          <button className="btn btn-outline" onClick={() => navigate("/")}>
            ← Back to Home
          </button>
          {/* Danger action pushed to the right */}
          <button className="btn btn-danger" onClick={handleCancel} style={{ marginLeft: "auto" }}>
            Cancel Registration
          </button>
        </div>

      </main>
    </div>
  );
}