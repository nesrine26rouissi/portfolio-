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

const skillCategories = [
  {
    icon: "⚡",
    title: "Programming Languages",
    color: "#8b5cf6",
    skills: [
      { name: "Python", level: 88 },
      { name: "R", level: 82 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 72 },
      { name: "C++", level: 68 },
      { name: "PHP", level: 65 },
      { name: "HTML/CSS", level: 78 },
    ],
  },
  {
    icon: "📊",
    title: "Business Intelligence & Data",
    color: "#00f5ff",
    skills: [
      { name: "Power BI", level: 90 },
      { name: "DAX", level: 85 },
      { name: "Power Query", level: 88 },
      { name: "ETL", level: 85 },
      { name: "Dimensional Modeling", level: 82 },
      { name: "Heflo", level: 70 },
    ],
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    color: "#ec4899",
    skills: [
      { name: "TensorFlow/Keras", level: 82 },
      { name: "Scikit-learn", level: 85 },
      { name: "Deep Learning", level: 80 },
      { name: "NLP", level: 75 },
      { name: "CRISP-DM", level: 88 },
      { name: "Medical Imaging", level: 78 },
    ],
  },
  {
    icon: "🔧",
    title: "Frameworks & Libraries",
    color: "#10b981",
    skills: [
      { name: "Node.js", level: 72 },
      { name: "Symfony", level: 68 },
      { name: "JavaFX", level: 65 },
      { name: "FlutterFlow", level: 70 },
    ],
  },
  {
    icon: "🗄️",
    title: "Databases",
    color: "#f59e0b",
    skills: [
      { name: "Oracle", level: 78 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    icon: "🛠️",
    title: "Tools & Methodologies",
    color: "#6366f1",
    skills: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "UML", level: 78 },
      { name: "Merise", level: 72 },
      { name: "Statistical Analysis", level: 85 },
      { name: "StarUML", level: 70 },
    ],
  },
];

function SkillBar({ name, level, color, inView }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 6,
          fontSize: "0.8rem",
        }}
      >
        <span style={{ color: "#94a3b8", fontWeight: 500 }}>{name}</span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: color,
          }}
        >
          {level}%
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: inView ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: `0 0 10px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();
  const [activeTab, setActiveTab] = useState(0);
  const [cardInView, setCardInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCardInView(true); },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" style={{ position: "relative", zIndex: 1 }}>
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
              color: "#00f5ff",
              fontSize: "0.85rem",
              marginBottom: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            — What I Know
          </p>
          <h2 className="section-title gradient-text">Technical Skills</h2>
          <p
            style={{
              color: "#475569",
              marginTop: 24,
              maxWidth: 500,
              margin: "24px auto 0",
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            Technologies and tools I use to design, analyze, and deploy
            data-driven solutions and intelligent systems.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(i)}
              style={{
                padding: "8px 18px",
                borderRadius: 10,
                border: `1px solid ${activeTab === i ? cat.color + "60" : "rgba(255,255,255,0.08)"}`,
                background:
                  activeTab === i ? `${cat.color}15` : "rgba(255,255,255,0.03)",
                color: activeTab === i ? cat.color : "#64748b",
                fontSize: "0.8rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.25s",
                fontFamily: "var(--font-sans)",
                display: "flex",
                alignItems: "center",
                gap: 6,
                boxShadow:
                  activeTab === i ? `0 0 15px ${cat.color}20` : "none",
              }}
            >
              <span>{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active category card */}
        <div
          ref={cardRef}
          className="glass skills-card"
          style={{
            padding: "40px",
            maxWidth: 800,
            margin: "0 auto 60px",
            opacity: cardInView ? 1 : 0,
            transform: cardInView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.5s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: `${skillCategories[activeTab].color}20`,
                border: `1px solid ${skillCategories[activeTab].color}40`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4rem",
              }}
            >
              {skillCategories[activeTab].icon}
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: skillCategories[activeTab].color,
                }}
              >
                {skillCategories[activeTab].title}
              </h3>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#475569",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {skillCategories[activeTab].skills.length} skills
              </p>
            </div>
          </div>

          <div
            className="skills-bars-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4px 40px",
            }}
          >
            {skillCategories[activeTab].skills.map((s) => (
              <SkillBar
                key={s.name}
                name={s.name}
                level={s.level}
                color={skillCategories[activeTab].color}
                inView={cardInView}
              />
            ))}
          </div>
        </div>

        {/* All skills overview grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="glass"
              style={{
                padding: "24px",
                opacity: cardInView ? 1 : 0,
                transform: cardInView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${idx * 0.07}s`,
                cursor: "pointer",
              }}
              onClick={() => setActiveTab(idx)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = cat.color + "50";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 12px 30px ${cat.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(139,92,246,0.18)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: `${cat.color}18`,
                    border: `1px solid ${cat.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: cat.color,
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="skill-pill tag-mono"
                    style={{ padding: "4px 10px", borderRadius: 8, fontSize: "0.74rem" }}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}