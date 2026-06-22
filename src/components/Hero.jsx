import { useState, useEffect, useRef } from "react";

const ROLES = [
  "Software Engineer",
  "Backend Developer",
  "Frontend Developer",
  "ML Engineer",
  "Financial Tech Builder",
];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setDisplay(current.slice(0, charIndex + 1));
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          if (charIndex > 0) {
            setDisplay(current.slice(0, charIndex - 1));
            setCharIndex((c) => c - 1);
          } else {
            setDeleting(false);
            setWordIndex((w) => (w + 1) % words.length);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return display;
}

// Floating particles component
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    dur: Math.random() * 6 + 6,
    dx: (Math.random() - 0.5) * 60,
    dy: (Math.random() - 0.5) * 60,
    op: Math.random() * 0.4 + 0.1,
    color: ["#8b5cf6", "#00f5ff", "#ec4899"][Math.floor(Math.random() * 3)],
  }));

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            "--dur": `${p.dur}s`,
            "--dx": `${p.dx}px`,
            "--dy": `${p.dy}px`,
            "--op": p.op,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

// Stat counter
function StatCounter({ value, label, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = Math.ceil(value / 40);
          const timer = setInterval(() => {
            start += step;
            if (start >= value) { setCount(value); clearInterval(timer); }
            else setCount(start);
          }, 40);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
          fontWeight: 800,
          background: "linear-gradient(135deg, #00f5ff, #8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {count}{suffix}
      </div>
      <div style={{ color: "#64748b", fontSize: "0.8rem", marginTop: 4, fontWeight: 500 }}>
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/nadhmi54",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/nadhmi-rouissi",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:rouissinadhmi11@gmail.com",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="hero"
      className="hero-section grid-bg"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Particles */}
      <Particles />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "clamp(40px, 8vw, 100px)",
          }}
        >
          {/* LEFT — Text */}
          <div>
            {/* Badge */}
            <div
              className="animate-fadeInUp"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 16px",
                borderRadius: 9999,
                background: "rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.3)",
                marginBottom: 24,
                fontSize: "0.78rem",
                fontFamily: "var(--font-mono)",
                color: "#a78bfa",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 8px #10b981",
                  animation: "pulse-ring 2s infinite",
                }}
              />
              Available for opportunities
            </div>

            {/* Name */}
            <h1
              className="animate-fadeInUp delay-100"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: 12,
                letterSpacing: "-0.03em",
              }}
            >
              Hi, I'm{" "}
              <span className="gradient-text">Nadhmi</span>
              <br />
              <span style={{ color: "#e2e8f0" }}>Rouissi</span>
            </h1>

            {/* Typewriter */}
            <div
              className="animate-fadeInUp delay-200"
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                fontFamily: "var(--font-mono)",
                color: "#94a3b8",
                marginBottom: 24,
                minHeight: "2rem",
              }}
            >
              <span style={{ color: "#00f5ff" }}>{">"}</span>{" "}
              <span className="neon-cyan">{role}</span>
              <span
                style={{
                  display: "inline-block",
                  width: 2,
                  height: "1.2em",
                  background: "#00f5ff",
                  marginLeft: 3,
                  verticalAlign: -3,
                  animation: "blink 1s step-end infinite",
                  boxShadow: "0 0 8px #00f5ff",
                }}
              />
            </div>

            {/* Bio */}
            <p
              className="animate-fadeInUp delay-300"
              style={{
                color: "#64748b",
                lineHeight: 1.8,
                maxWidth: 520,
                marginBottom: 36,
                fontSize: "1rem",
              }}
            >
              Financial Computing Engineering student at{" "}
              <span style={{ color: "#a78bfa", fontWeight: 600 }}>ESPRIT</span>,
              building innovative software at the intersection of{" "}
              <span style={{ color: "#67e8f9" }}>backend engineering</span>,{" "}
              <span style={{ color: "#00f5ff" }}>frontend development</span>, and{" "}
              <span style={{ color: "#6ee7b7" }}>machine learning</span> — dedicated to digital transformation in{" "}
              <span style={{ color: "#f9a8d4" }}>financial technology</span>.
            </p>

            {/* CTAs */}
            <div
              className="animate-fadeInUp delay-400"
              style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 44 }}
            >
              <a href="#projects" className="btn-primary">
                <span>
                  View My Work
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    style={{ display: "inline", marginLeft: 8, verticalAlign: -2 }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div
              className="animate-fadeInUp delay-500"
              style={{ display: "flex", gap: 12 }}
            >
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#64748b",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(139,92,246,0.15)";
                    e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)";
                    e.currentTarget.style.color = "#a78bfa";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "#64748b";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Avatar */}
          <div
            className="animate-fadeInRight"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}
          >
            {/* Avatar */}
            <div className="avatar-container" style={{ marginBottom: 8 }}>
              <div className="avatar-ring" />
              <img
                src="/images/profile.jpg"
                alt="Nadhmi Rouissi"
                style={{
                  width: "clamp(200px, 20vw, 280px)",
                  height: "clamp(200px, 20vw, 280px)",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  position: "relative",
                  zIndex: 1,
                  border: "4px solid #050814",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.querySelector(".avatar-fallback").style.display = "flex";
                }}
              />
              {/* Fallback Avatar */}
              <div
                className="avatar-fallback"
                style={{
                  display: "none",
                  width: "clamp(200px, 20vw, 280px)",
                  height: "clamp(200px, 20vw, 280px)",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #8b5cf6, #00f5ff)",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(3rem, 6vw, 4rem)",
                  color: "#050814",
                  position: "relative",
                  zIndex: 1,
                  border: "4px solid #050814",
                }}
              >
                NR
              </div>
            </div>

            {/* Stats */}
            <div
              className="glass"
              style={{
                padding: "20px 28px",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 24,
                minWidth: "clamp(220px, 20vw, 280px)",
              }}
            >
              <StatCounter value={3} label="Projects" />
              <StatCounter value={6} label="Tech Stacks" suffix="+" />
              <StatCounter value={2} label="Years Study" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "#334155",
          fontSize: "0.7rem",
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.1em",
        }}
      >
        <span>SCROLL</span>
        <div
          style={{
            width: 24,
            height: 40,
            borderRadius: 12,
            border: "2px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: 4,
          }}
        >
          <div
            style={{
              width: 3,
              height: 8,
              borderRadius: 9999,
              background: "linear-gradient(180deg, #8b5cf6, #00f5ff)",
              animation: "floatOrb 1.5s ease-in-out infinite alternate",
            }}
          />
        </div>
      </div>
    </section>
  );
}