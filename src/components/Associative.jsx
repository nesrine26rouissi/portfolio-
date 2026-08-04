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

const activities = [
  {
    role: "Middle Manager — MoGX+TM Specialist",
    organization: "AIESEC University",
    type: "Leadership",
    period: "2023 — 2025",
    duration: "2 yrs",
    description:
      "Active member of AIESEC University's IR and Data department, serving as MoGX+TM Specialist (Marketing Outgoing Global Volunteer / Talent Management Specialist & Information Management). I contributed to international volunteer programs, talent management, and data-driven decision-making within the organization.",
    skills: ["Talent Management", "Information Management", "Marketing", "Leadership", "International Programs", "Data Management"],
    color: "#10b981",
    icon: "🌍"
  },
  {
    role: "Treasurer",
    organization: "ESEN Club Android",
    type: "Club Leadership",
    period: "2022 — 2024",
    duration: "2 yrs",
    description:
      "Served as Treasurer of the ESEN Club Android during my Business Computing studies. Managed club finances, organized tech events and workshops, and supported mobile development initiatives among students at the Ecole Supérieure d'Economie Numérique.",
    skills: ["Financial Management", "Event Organization", "Club Leadership", "Team Coordination", "Mobile Development Community"],
    color: "#00f5ff",
    icon: "📱"
  }
];

export default function Associative() {
  const [ref, inView] = useInView();

  return (
    <section id="associative" style={{ position: "relative", zIndex: 1 }}>
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(16,185,129,0.3), rgba(0,245,255,0.3), transparent)",
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
              color: "#10b981",
              fontSize: "0.85rem",
              marginBottom: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            — Community & Leadership
          </p>
          <h2 className="section-title gradient-text">Associative Experience</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 900, margin: "0 auto" }}>
          {activities.map((act, index) => (
            <div
              key={act.organization}
              className="glass"
              style={{
                padding: "36px",
                borderColor: `${act.color}30`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.8s ease ${0.2 * (index + 1)}s`,
              }}
            >
              {/* Top Row */}
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
                    background: `linear-gradient(135deg, ${act.color}15, ${act.color}30)`,
                    border: `1px solid ${act.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    flexShrink: 0,
                    boxShadow: `0 0 20px ${act.color}15`,
                  }}
                >
                  {act.icon}
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
                    {act.role}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: act.color,
                      }}
                    >
                      {act.organization}
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
                      {act.type}
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
                    {act.period}
                  </p>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "#64748b",
                    }}
                  >
                    ⏱️ {act.duration}
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
                {act.description}
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
                  {"// Leadership & Volunteering"}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {act.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: "5px 12px",
                        borderRadius: 8,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        background: `${act.color}10`,
                        color: act.color,
                        border: `1px solid ${act.color}25`,
                        transition: "all 0.25s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${act.color}25`;
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${act.color}10`;
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
