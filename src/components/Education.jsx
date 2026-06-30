import { useRef, useEffect, useState } from "react";

function useInView(threshold = 0.15) {
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

const educationData = [
  {
    degree: "Financial Computing Engineering Student",
    school: "ESPRIT",
    fullName: "École Supérieure Privée d'Ingénierie et de Technologies",
    period: "2022 — 2025",
    type: "current",
    description:
      "Specialized in Software Engineering, Financial Computing, and Information Systems. Developed a strong expertise in bridging financial markets, quantitative methods, and advanced computing technologies.",
    highlights: [
      "Financial Computing & IS",
      "Software Architecture",
      "Machine Learning & Data Science",
      "Databases & Cloud Engineering",
      "Fintech Innovation",
    ],
    color: "#8b5cf6",
    icon: "🎓",
  },
  {
    degree: "Baccalaureate in Technical Sciences",
    school: "Ibn Rachik High School",
    fullName: "Ibn Rachik High School, Ezzahra",
    period: "2021 — 2022",
    type: "completed",
    description:
      "Completed secondary education with a specialization in Technical Sciences, building a strong foundation in physics, technology, engineering, and mathematics.",
    highlights: [
      "Technical Sciences",
      "Mathematics",
      "Physical Sciences",
      "Engineering Technology",
    ],
    color: "#00f5ff",
    icon: "🏫",
  },
];

export default function Education() {
  const [ref, inView] = useInView();
  const [activeEdu, setActiveEdu] = useState(0);

  return (
    <section id="education" style={{ position: "relative", zIndex: 1 }}>
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(0,245,255,0.3), rgba(236,72,153,0.3), transparent)",
        }}
      />
      <div className="section-wrapper">
        {/* Header */}
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
              color: "#10b981",
              fontSize: "0.85rem",
              marginBottom: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            — Academic Journey
          </p>
          <h2 className="section-title gradient-text">Education</h2>
        </div>

        <div
          className="education-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* LEFT: Timeline */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            <div style={{ position: "relative", paddingLeft: 48 }}>
              {/* Timeline line */}
              <div className="timeline-line" />

              {educationData.map((edu, i) => (
                <div
                  key={edu.degree}
                  style={{
                    marginBottom: i < educationData.length - 1 ? 36 : 0,
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveEdu(i)}
                >
                  {/* Timeline dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: 14,
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: activeEdu === i ? edu.color : "#1e293b",
                      border: `2px solid ${edu.color}`,
                      boxShadow:
                        activeEdu === i ? `0 0 12px ${edu.color}80` : "none",
                      transition: "all 0.3s ease",
                      zIndex: 1,
                    }}
                  />

                  <div
                    className="glass"
                    style={{
                      padding: "22px 24px",
                      borderColor:
                        activeEdu === i
                          ? `${edu.color}50`
                          : "rgba(139,92,246,0.18)",
                      boxShadow:
                        activeEdu === i ? `0 0 20px ${edu.color}15` : "none",
                      transition: "all 0.35s ease",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 6,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: "1.3rem" }}>{edu.icon}</span>
                        <h3
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            color: activeEdu === i ? edu.color : "#e2e8f0",
                            transition: "color 0.3s",
                          }}
                        >
                          {edu.school}
                        </h3>
                      </div>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontFamily: "var(--font-mono)",
                          color:
                            edu.type === "current" ? "#10b981" : "#475569",
                          background:
                            edu.type === "current"
                              ? "rgba(16,185,129,0.1)"
                              : "transparent",
                          padding: edu.type === "current" ? "2px 8px" : "0",
                          borderRadius: 9999,
                          border:
                            edu.type === "current"
                              ? "1px solid rgba(16,185,129,0.3)"
                              : "none",
                        }}
                      >
                        {edu.type === "current" ? "● Current" : edu.period}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.78rem", color: "#475569", lineHeight: 1.5 }}>
                      {edu.degree}
                    </p>
                    <p
                      style={{
                        fontSize: "0.7rem",
                        color: "#334155",
                        marginTop: 4,
                        fontStyle: "italic",
                      }}
                    >
                      {edu.fullName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Details panel */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.8s ease 0.4s",
            }}
          >
            {/* Active edu detail */}
            <div
              className="glass"
              style={{
                padding: "32px",
                borderColor: `${educationData[activeEdu].color}40`,
              }}
            >
              <div
                style={{
                  height: 4,
                  borderRadius: 9999,
                  background: educationData[activeEdu].color,
                  boxShadow: `0 0 15px ${educationData[activeEdu].color}60`,
                  marginBottom: 24,
                  width: "40%",
                }}
              />

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: educationData[activeEdu].color,
                  marginBottom: 6,
                }}
              >
                {educationData[activeEdu].degree}
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginBottom: 4 }}>
                {educationData[activeEdu].fullName}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "#475569",
                  marginBottom: 20,
                }}
              >
                📅 {educationData[activeEdu].period}
              </p>

              <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: "0.88rem", marginBottom: 24 }}>
                {educationData[activeEdu].description}
              </p>

              <div>
                <p
                  style={{
                    fontSize: "0.7rem",
                    color: "#475569",
                    fontFamily: "var(--font-mono)",
                    marginBottom: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {"// Key Subjects"}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {educationData[activeEdu].highlights.map((h) => (
                    <span
                      key={h}
                      style={{
                        padding: "5px 12px",
                        borderRadius: 8,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        background: `${educationData[activeEdu].color}12`,
                        color: educationData[activeEdu].color,
                        border: `1px solid ${educationData[activeEdu].color}28`,
                        transition: "all 0.25s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        const c = educationData[activeEdu].color;
                        e.currentTarget.style.background = `${c}25`;
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        const c = educationData[activeEdu].color;
                        e.currentTarget.style.background = `${c}12`;
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}