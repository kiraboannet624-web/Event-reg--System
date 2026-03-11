import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import ProgressBar from "../components/ProgressBar";
import { useRegistration } from "../context/RegistrationContext";

const ticketColors = {
  Student:  "#a78bfa",
  Standard: "var(--accent)",
  VIP:      "var(--accent2)",
};

export default function ReviewPage() {
  const navigate = useNavigate();
  const { formData, confirmRegistration } = useRegistration();

  // 🛡️ Guard: if name/email is missing, send back to form
  if (!formData.fullName || !formData.email) {
    return (
      <div className="page">
        <Nav />
        <div style={{ padding: "80px 40px", textAlign: "center" }}>
          <p style={{ color: "var(--text-muted)", marginBottom: 24 }}>
            No registration data found.
          </p>
          <button className="btn btn-primary" onClick={() => navigate("/register")}>
            Go to Registration →
          </button>
        </div>
      </div>
    );
  }

  const handleConfirm = () => {
    confirmRegistration();   // Save to localStorage
    navigate("/confirmation");
  };

  // Build rows for the summary table
  const rows = [
    ["Full Name",             formData.fullName],
    ["Email Address",         formData.email],
    ["Phone Number",          formData.phone        || "—"],
    ["Organization",          formData.organization || "—"],
    ["Ticket Type",           formData.ticketType],
    ["Dietary Requirements",  formData.dietary      || "No restrictions"],
    ["Additional Notes",      formData.notes        || "None"],
  ];

  return (
    <div className="page">
      <Nav />
      <ProgressBar current={2} />

      <main style={{ flex: 1, padding: "60px 40px", maxWidth: 900, margin: "0 auto", width: "100%" }}>

        {/* Page Header */}
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <div className="tag tag-orange" style={{ marginBottom: 16 }}>Step 2 of 3</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>
            Review Your Details
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            Please confirm everything looks correct before submitting.
          </p>
        </div>

        {/* Summary Table */}
        <div className="card fade-up-1" style={{ marginBottom: 24 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: 24, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
            Registration Summary
          </div>

          <table className="review-table">
            <tbody>
              {rows.map(([label, value]) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>
                    {/* Special styling for Ticket Type */}
                    {label === "Ticket Type" ? (
                      <span style={{
                        color: ticketColors[value] || "var(--accent)",
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                      }}>
                        {value}
                      </span>
                    ) : value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Info Note */}
        <div className="fade-up-2" style={{
          border: "1px solid rgba(0,229,255,0.2)",
          background: "rgba(0,229,255,0.04)",
          padding: "16px 20px",
          marginBottom: 40,
          fontSize: "0.8rem",
          color: "var(--text-muted)",
          lineHeight: 1.6,
        }}>
          <span style={{ color: "var(--accent)" }}>ℹ️ Note: </span>
          By confirming, your registration will be saved and your spot at TechConf 2025
          will be reserved. You can return at any time to view or edit your registration.
        </div>

        {/* Actions */}
        <div className="fade-up-3" style={{ display: "flex", gap: 12, justifyContent: "space-between" }}>
          <button className="btn btn-outline" onClick={() => navigate("/register")}>
            ← Edit Details
          </button>
          <button className="btn btn-primary" onClick={handleConfirm}>
            Confirm Registration ✓
          </button>
        </div>

      </main>
    </div>
  );
}