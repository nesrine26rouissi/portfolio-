import { useRef, useEffect, useState } from "react";

function useInView(threshold = 0.1) {
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

const projects = [
  {
    id: "alia",
    title: "ALIA",
    subtitle: "AI Avatar for Medical & Pharmaceutical Excellence",
    type: "AI / NLP Project",
    role: "AI Developer",
    teamSize: "Academic Project",
    gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
    accentColor: "#8b5cf6",
    icon: (
      <div style={{
        width: 90, height: 90, borderRadius: "50%",
        background: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(236,72,153,0.2))",
        border: "2px solid rgba(139,92,246,0.5)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 0 30px rgba(139,92,246,0.3)",
      }}>
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
          <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7v1a2 2 0 01-2 2h-1v3a2 2 0 01-2 2h-2a2 2 0 01-2-2v-3h-2v3a2 2 0 01-2 2H7a2 2 0 01-2-2v-3H4a2 2 0 01-2-2v-1a7 7 0 017-7h1V5.73A2 2 0 0112 2z" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
    description:
      "An intelligent conversational AI avatar designed for the pharmaceutical and medical sectors. ALIA enhances medical delegate training and improves interactions with healthcare professionals through natural language understanding and smart dialogue management.",
    technologies: ["Python", "NLP", "TensorFlow", "Machine Learning", "REST API", "Conversational AI"],
    contributions: [
      "Conversational AI Architecture",
      "NLP Model Integration",
      "Training Module Design",
      "Healthcare Domain Adaptation",
      "User Interaction Flow Design",
    ],
    features: [
      "Intelligent conversational avatar",
      "Medical delegate training support",
      "Healthcare professional interactions",
      "Pharmaceutical sector specialization",
      "Natural language understanding",
    ],
    github: "https://github.com/Nesnousa",
    demo: null,
  },
  {
    id: "tb-detect",
    title: "TB-Detect",
    subtitle: "Deep Learning Tuberculosis Detection",
    type: "Medical AI",
    role: "ML Engineer",
    teamSize: "Academic Project",
    gradient: "linear-gradient(135deg, #00f5ff, #10b981)",
    accentColor: "#00f5ff",
    icon: (
      <div style={{
        width: 90, height: 90, borderRadius: "50%",
        background: "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(16,185,129,0.2))",
        border: "2px solid rgba(0,245,255,0.5)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 0 30px rgba(0,245,255,0.3)",
      }}>
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#00f5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
    description:
      "A deep learning system for automatic tuberculosis detection on chest X-rays. Designed for rapid and accurate screening, even in resource-limited environments, using convolutional neural networks trained on medical imaging datasets.",
    technologies: ["Python", "TensorFlow/Keras", "Deep Learning", "OpenCV", "NumPy", "Medical Imaging"],
    contributions: [
      "CNN Model Architecture",
      "Medical Image Preprocessing",
      "Model Training & Evaluation",
      "Performance Optimization",
      "Deployment Interface Design",
    ],
    features: [
      "Automated TB detection on X-rays",
      "High-accuracy deep learning model",
      "Resource-limited environment support",
      "Fast screening capabilities",
      "Medical image classification pipeline",
    ],
    github: "https://github.com/Nesnousa",
    demo: null,
  },
  {
    id: "hospital-bi",
    title: "Hospital BI Dashboards",
    subtitle: "Complete Healthcare Analytics Solution",
    type: "Business Intelligence",
    role: "BI Developer",
    teamSize: "Academic Project",
    gradient: "linear-gradient(135deg, #ec4899, #f59e0b)",
    accentColor: "#ec4899",
    icon: (
      <div style={{
        width: 90, height: 90, borderRadius: "50%",
        background: "linear-gradient(135deg, rgba(236,72,153,0.15), rgba(245,158,11,0.15))",
        border: "2px solid rgba(236,72,153,0.5)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 0 30px rgba(236,72,153,0.3)",
      }}>
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="7" height="9" rx="1" stroke="#ec4899" strokeWidth="1.5"/>
          <rect x="14" y="3" width="7" height="5" rx="1" stroke="#ec4899" strokeWidth="1.5"/>
          <rect x="14" y="12" width="7" height="9" rx="1" stroke="#ec4899" strokeWidth="1.5"/>
          <rect x="3" y="16" width="7" height="5" rx="1" stroke="#ec4899" strokeWidth="1.5"/>
        </svg>
      </div>
    ),
    description:
      "A complete BI solution for hospital management using Power BI. Features snowflake data modeling, ETL processes, and interactive dashboards for real-time KPI tracking — patient satisfaction, occupancy rates, and costs per service — tailored for different decision-maker profiles.",
    technologies: ["Power BI", "DAX", "Power Query", "ETL", "SQL", "Dimensional Modeling"],
    contributions: [
      "Snowflake Data Modeling",
      "ETL Pipeline Design",
      "Interactive Dashboard Development",
      "KPI Definition & Tracking",
      "Multi-profile Decision Support",
    ],
    features: [
      "Real-time hospital KPI monitoring",
      "Patient satisfaction tracking",
      "Occupancy rate analytics",
      "Cost per service analysis",
      "Role-based dashboard views",
    ],
    github: "https://github.com/Nesnousa/poc-etl-ia",
    demo: null,
  },
];

function ProjectDetail({ project }) {
  return (
    <div
      className="glass"
      style={{ padding: 0, overflow: "hidden" }}
    >
      {/* Gradient top bar */}
      <div style={{ height: 5, background: project.gradient, boxShadow: `0 0 20px ${project.accentColor}50` }} />

      <div style={{ padding: "36px 40px" }} className="project-detail-inner">
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 28 }} className="project-header-row">
          <div style={{ flexShrink: 0 }}>
            {project.icon}
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "1.6rem", color: project.accentColor, marginBottom: 4,
            }}>
              {project.title}
            </h3>
            <p style={{ color: "#475569", fontSize: "0.88rem", marginBottom: 12 }}>{project.subtitle}</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span style={{
                padding: "4px 14px", borderRadius: 9999, fontSize: "0.72rem", fontWeight: 600,
                background: `${project.accentColor}15`, color: project.accentColor,
                border: `1px solid ${project.accentColor}35`,
              }}>
                {project.type}
              </span>
              <span className="tag tag-violet">👤 {project.role}</span>
              <span className="tag tag-green">👥 {project.teamSize}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: 28 }}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div style={{ marginBottom: 28 }}>
          <p style={{
            fontSize: "0.7rem", color: "#475569", fontFamily: "var(--font-mono)",
            marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.08em",
          }}>{"// Tech Stack"}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {project.technologies.map((t) => (
              <span key={t} className="tag tag-mono skill-pill" style={{ borderRadius: 8 }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Contributions + Features */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 32 }} className="project-contributions-grid">
          <div>
            <p style={{
              fontSize: "0.7rem", color: "#475569", fontFamily: "var(--font-mono)",
              marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.08em",
            }}>{"// My Contributions"}</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
              {project.contributions.map((c) => (
                <li key={c} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.83rem", color: "#94a3b8" }}>
                  <span style={{ color: project.accentColor, marginTop: 2, flexShrink: 0 }}>▸</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{
              fontSize: "0.7rem", color: "#475569", fontFamily: "var(--font-mono)",
              marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.08em",
            }}>{"// Key Features"}</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
              {project.features.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.83rem", color: "#94a3b8" }}>
                  <span style={{ color: "#10b981", marginTop: 2, flexShrink: 0 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="btn-primary" style={{ padding: "10px 24px", fontSize: "0.85rem" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              View on GitHub
            </span>
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="btn-outline" style={{ padding: "10px 24px", fontSize: "0.85rem" }}>
              ▶ Watch Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();
  const [selected, setSelected] = useState(0);

  return (
    <section id="projects" style={{ position: "relative", zIndex: 1 }}>
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), rgba(0,245,255,0.3), transparent)" }} />

      <div className="section-wrapper">
        {/* Header */}
        <div
          ref={ref}
          style={{
            textAlign: "center", marginBottom: 60,
            opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <p style={{
            fontFamily: "var(--font-mono)", color: "#ec4899",
            fontSize: "0.85rem", marginBottom: 12, letterSpacing: "0.12em", textTransform: "uppercase",
          }}>— What I've Built</p>
          <h2 className="section-title gradient-text">Projects</h2>
          <p style={{ color: "#475569", marginTop: 24, maxWidth: 540, margin: "24px auto 0", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Select a project to explore in detail — click on any icon below.
          </p>
        </div>

        {/* Icon selector row */}
        <div
          style={{
            display: "flex", justifyContent: "center", gap: 48, marginBottom: 56,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.2s",
          }}
          className="projects-icon-row"
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              onClick={() => setSelected(i)}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
                cursor: "pointer",
              }}
            >
              {/* Icon wrapper */}
              <div
                style={{
                  position: "relative",
                  padding: 6,
                  borderRadius: "50%",
                  background: selected === i
                    ? `conic-gradient(from 0deg, ${project.accentColor}, #8b5cf6, ${project.accentColor})`
                    : "transparent",
                  transition: "all 0.4s ease",
                  boxShadow: selected === i ? `0 0 30px ${project.accentColor}50` : "none",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    transform: selected === i ? "scale(1.12)" : "scale(1)",
                    transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                    filter: selected === i ? "none" : "grayscale(0.3) brightness(0.7)",
                  }}
                  onMouseEnter={(e) => {
                    if (selected !== i) {
                      e.currentTarget.style.filter = "brightness(1)";
                      e.currentTarget.style.transform = "scale(1.08)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selected !== i) {
                      e.currentTarget.style.filter = "grayscale(0.3) brightness(0.7)";
                      e.currentTarget.style.transform = "scale(1)";
                    }
                  }}
                >
                  {project.icon}
                </div>
                {/* Active dot */}
                {selected === i && (
                  <div style={{
                    position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)",
                    width: 8, height: 8, borderRadius: "50%",
                    background: project.accentColor,
                    boxShadow: `0 0 8px ${project.accentColor}`,
                  }} />
                )}
              </div>

              {/* Label */}
              <div style={{ textAlign: "center" }}>
                <p style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: "0.95rem",
                  color: selected === i ? project.accentColor : "#475569",
                  transition: "color 0.3s",
                  marginBottom: 2,
                }}>
                  {project.title}
                </p>
                <p style={{ fontSize: "0.72rem", color: "#334155", maxWidth: 140, textAlign: "center" }}>
                  {project.type}
                </p>
              </div>

              {/* Connector line */}
              {selected === i && (
                <div style={{
                  width: 2, height: 24,
                  background: `linear-gradient(180deg, ${project.accentColor}, transparent)`,
                  borderRadius: 9999,
                }} />
              )}
            </div>
          ))}
        </div>

        {/* Selected project detail */}
        <div
          key={selected}
          style={{
            animation: "fadeInUp 0.45s ease",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <ProjectDetail project={projects[selected]} />
        </div>

        {/* GitHub CTA */}
        <div style={{
          textAlign: "center", marginTop: 48,
          opacity: inView ? 1 : 0, transition: "opacity 0.7s ease 0.6s",
        }}>
          <a href="https://github.com/Nesnousa" target="_blank" rel="noopener noreferrer"
            className="btn-outline" style={{ fontSize: "0.88rem" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 8 }}>
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            Explore All Repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
