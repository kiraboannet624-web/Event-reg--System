const steps = ["Register", "Review", "Confirm"];

export default function ProgressBar({ current }) {
  return (
    <div className="progress-bar">
      {steps.map((step, i) => {
        const status =
          i + 1 < current ? "done" :
          i + 1 === current ? "active" : "";

        return (
          <div
            key={step}
            style={{
              display: "flex",
              alignItems: "center",
              flex: i < steps.length - 1 ? 1 : 0,
            }}
          >
            <div className={`progress-step ${status}`}>
              <div className="step-num">
                {i + 1 < current ? "✓" : i + 1}
              </div>
              <span>{step}</span>
            </div>
            {i < steps.length - 1 && <div className="progress-line" />}
          </div>
        );
      })}
    </div>
  );
}