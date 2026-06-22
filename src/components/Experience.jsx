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

const experiences = [
  {
    role: "Credit Risk Analysis Intern",
    company: "STB Bank",
    arabicName: "الشركة التونسية للبنك",
    type: "Internship",
    period: "Jun 2025 — Aug 2025",
    duration: "3 mos",
    description:
      "During my internship in the Credit Risk Department at STB Bank, I participated in a credit risk analysis and data modeling project focused on enhancing financial assessment and decision-making processes. I worked on cleaning and transforming banking datasets, automating the computation of key financial indicators, and conducting statistical analyses to identify significant predictive variables. Additionally, I integrated multiple data sources into a unified analytical dataset and documented the entire data preparation pipeline, strengthening my expertise in financial data analytics and risk modeling within the banking industry.",
    skills: ["Credit Risk", "Data Modeling", "Financial Indicators", "Data Pipeline", "Python / SQL", "Risk Assessment"],
    color: "#ec4899",
    icon: "🏦"
  },
  {
    role: "IT Asset Management & Help Desk Intern",
    company: "Express Display",
    type: "Internship",
    period: "Jul 2023",
    duration: "1 mo",
    description:
      "During my internship at Express Display, I gained hands-on experience with GLPI, an IT Asset Management and Help Desk solution. I was involved in asset inventory management, ticket handling, system configuration, reporting, and user support. Additionally, I had the opportunity to observe recruitment activities, including CV screening, interviews, technical assessments, and onboarding procedures. This experience strengthened my understanding of IT service management and business operations.",
    skills: ["GLPI", "Asset Management", "IT Support", "ITSM", "Recruitment Observation", "Business Operations"],
    color: "#8b5cf6",
    icon: "🖥️"
  }
];

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" style={{ position: "relative", zIndex: 1 }}>
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(236,72,153,0.3), rgba(139,92,246,0.3), transparent)",
        }}
      />
      <div className="section-wrapper">
        {/* Header */}
        <div
          ref={ref}
          style={{
            textAlign: "center",
            marginBottom: 60,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              color: "#ec4899",
              fontSize: "0.85rem",
              marginBottom: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            — Professional Path
          </p>
          <h2 className="section-title gradient-text">Professional Experience</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 900, margin: "0 auto" }}>
          {experiences.map((exp, index) => (
            <div
              key={exp.role}
              className="glass"
              style={{
                padding: "36px",
                borderColor: `${exp.color}30`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.8s ease ${0.2 * (index + 1)}s`,
              }}
            >
              {/* Top Row: Icon, Role, Company, Period */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 20,
                  marginBottom: 20,
                  flexWrap: "wrap",
                }}
              >
                {/* Icon Container */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: `linear-gradient(135deg, ${exp.color}15, ${exp.color}30)`,
                    border: `1px solid ${exp.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    flexShrink: 0,
                    boxShadow: `0 0 20px ${exp.color}15`,
                  }}
                >
                  {exp.icon}
                </div>

                {/* Role Details */}
                <div style={{ flex: 1, minWidth: 250 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: "#e2e8f0",
                      marginBottom: 4,
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: exp.color,
                      }}
                    >
                      {exp.company}
                      {exp.arabicName && (
                        <span style={{ fontSize: "0.85rem", fontWeight: 400, color: "#64748b", marginLeft: 6 }}>
                          ({exp.arabicName})
                        </span>
                      )}
                    </span>
                    <span style={{ color: "#475569", fontSize: "0.8rem" }}>•</span>
                    <span
                      style={{
                        padding: "2px 10px",
                        borderRadius: 9999,
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        background: "rgba(255,255,255,0.05)",
                        color: "#94a3b8",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Period */}
                <div style={{ textAlign: "right", minWidth: 150 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.85rem",
                      color: "#e2e8f0",
                      fontWeight: 600,
                      marginBottom: 2,
                    }}
                  >
                    {exp.period}
                  </p>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "#64748b",
                    }}
                  >
                    ⏱️ {exp.duration}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.8,
                  fontSize: "0.92rem",
                  marginBottom: 24,
                }}
              >
                {exp.description}
              </p>

              {/* Skills Tags */}
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
                  {"// Competencies & Tools"}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: "5px 12px",
                        borderRadius: 8,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        background: `${exp.color}10`,
                        color: exp.color,
                        border: `1px solid ${exp.color}25`,
                        transition: "all 0.25s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${exp.color}25`;
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${exp.color}10`;
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
