import { useRef, useEffect, useState } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const highlights = [
  { icon: "🎓", label: "Education", value: "ESPRIT Engineering" },
  { icon: "💡", label: "Specialty", value: "Financial Computing & IS" },
  { icon: "🌍", label: "Location", value: "Tunisia" },
  { icon: "🚀", label: "Goal", value: "Innovative Solutions" },
];

const passions = [
  { label: "Software Engineering", color: "#8b5cf6" },
  { label: "Machine Learning", color: "#ec4899" },
  { label: "Financial Technology", color: "#10b981" },
  { label: "Backend Development", color: "#f59e0b" },
  { label: "Data Analytics", color: "#6366f1" },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" style={{ position: "relative", zIndex: 1 }}>
      <div className="section-wrapper">
        {/* Section header */}
        <div
          ref={ref}
          style={{
            textAlign: "center",
            marginBottom: 72,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              color: "#8b5cf6",
              fontSize: "0.85rem",
              marginBottom: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            — Who I Am
          </p>
          <h2 className="section-title gradient-text">About Me</h2>
        </div>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            <div
              className="glass"
              style={{ padding: "36px 40px", marginBottom: 24 }}
            >
              {/* Quote decoration */}
              <div
                style={{
                  fontSize: "5rem",
                  lineHeight: 0.8,
                  color: "rgba(139,92,246,0.2)",
                  fontFamily: "Georgia, serif",
                  marginBottom: 16,
                  userSelect: "none",
                }}
              >
                "
              </div>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.9,
                  fontSize: "0.95rem",
                  marginBottom: 20,
                }}
              >
                Passionate about the convergence of technology and finance, I am a{" "}
                <span style={{ color: "#a78bfa", fontWeight: 600 }}>
                  Financial Computing Engineering
                </span>{" "}
                student dedicated to developing innovative solutions that bridge business needs with advanced information systems.
              </p>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: 1.9,
                  fontSize: "0.95rem",
                  marginBottom: 20,
                }}
              >
                Throughout my academic journey, I have cultivated a strong analytical mindset, problem-solving abilities, and a genuine interest in digital transformation within the financial sector. I am particularly inspired by the role that information systems play in improving operational efficiency, supporting strategic decisions, and driving sustainable innovation across banking and financial services.
              </p>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: 1.9,
                  fontSize: "0.95rem",
                }}
              >
                Driven by curiosity and a commitment to excellence, I continuously seek opportunities to expand my knowledge and contribute to projects that create meaningful value. I am passionate about leveraging technology and innovation to address complex challenges, foster digital transformation, and support the development of efficient and sustainable solutions in an ever-evolving global environment.
              </p>
            </div>

            {/* Passions */}
            <div>
              <p
                style={{
                  fontSize: "0.78rem",
                  fontFamily: "var(--font-mono)",
                  color: "#475569",
                  marginBottom: 14,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {"// Passions"}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {passions.map(({ label, color }) => (
                  <span
                    key={label}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 9999,
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      background: `${color}18`,
                      color: color,
                      border: `1px solid ${color}30`,
                      transition: "all 0.25s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${color}30`;
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 4px 15px ${color}25`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${color}18`;
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.8s ease 0.4s",
            }}
          >
            {/* Info cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 24,
              }}
            >
              {highlights.map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="glass"
                  style={{
                    padding: "22px 20px",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.borderColor = "rgba(0,245,255,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(139,92,246,0.18)";
                  }}
                >
                  <div style={{ fontSize: "1.6rem", marginBottom: 10 }}>{icon}</div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "#475569",
                      fontFamily: "var(--font-mono)",
                      marginBottom: 4,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {label}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#e2e8f0" }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal card */}
            <div
              className="glass"
              style={{ padding: 0, overflow: "hidden" }}
            >
              {/* Terminal header */}
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                  <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
                ))}
                <span
                  style={{
                    marginLeft: 8,
                    fontSize: "0.75rem",
                    color: "#475569",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  rouissinadhmi11@gmail.com
                </span>
              </div>

              {/* Terminal body */}
              <div style={{ padding: "20px 20px 24px", fontFamily: "var(--font-mono)", fontSize: "0.82rem" }}>
                {[
                  { prompt: "$", cmd: " whoami", color: "#00f5ff" },
                  { output: "Nadhmi Rouissi — Engineering Student", indent: true },
                  { prompt: "$", cmd: " echo $SCHOOL", color: "#00f5ff" },
                  { output: "Ecole Supérieure Privée d'Ingénierie et de Technologies - ESPRIT", indent: true },
                  { prompt: "$", cmd: " git status", color: "#00f5ff" },
                  { output: "✓ Open to new opportunities", indent: true, green: true },
                  { prompt: "$", cmd: " _", color: "#00f5ff", blink: true },
                ].map((line, i) =>
                  line.output ? (
                    <div
                      key={i}
                      style={{
                        color: line.green ? "#10b981" : "#64748b",
                        marginBottom: 6,
                        paddingLeft: line.indent ? 14 : 0,
                      }}
                    >
                      {line.output}
                    </div>
                  ) : (
                    <div key={i} style={{ display: "flex", marginBottom: 4 }}>
                      <span style={{ color: "#8b5cf6", marginRight: 4 }}>{line.prompt}</span>
                      <span style={{ color: line.color }}>{line.cmd}</span>
                      {line.blink && (
                        <span
                          style={{
                            display: "inline-block",
                            width: 7,
                            height: "1em",
                            background: "#00f5ff",
                            marginLeft: 2,
                            animation: "blink 1s step-end infinite",
                            verticalAlign: -1,
                          }}
                        />
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}