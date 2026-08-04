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

const contactLinks = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    label: "Email",
    value: "rouissinesrine3@gmail.com",
    href: "mailto:rouissinesrine3@gmail.com",
    color: "#8b5cf6",
    description: "Best for professional inquiries",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/nesrine-rouissi-b19614266",
    href: "https://linkedin.com/in/nesrine-rouissi-b19614266",
    color: "#0077b5",
    description: "Connect professionally",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    label: "GitHub",
    value: "github.com/Nesnousa",
    href: "https://github.com/Nesnousa",
    color: "#00f5ff",
    description: "Browse my repositories",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    label: "Location",
    value: "Ennasr 2, Ariana, Tunisia",
    href: "https://maps.google.com/?q=Ennasr+Ariana,Tunisia",
    color: "#ec4899",
    description: "Based in North Africa",
  },
];

function ContactCard({ item, index, inView }) {
  return (
    <a
      href={item.href}
      target={item.href.startsWith("mailto") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 18,
        padding: "22px 24px",
        borderRadius: 16,
        background: `${item.color}08`,
        border: `1px solid ${item.color}20`,
        textDecoration: "none",
        color: "inherit",
        transition: "all 0.3s ease",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-20px)",
        transitionDelay: `${index * 0.08}s`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `${item.color}15`;
        e.currentTarget.style.borderColor = `${item.color}45`;
        e.currentTarget.style.transform = "translateX(8px)";
        e.currentTarget.style.boxShadow = `0 8px 24px ${item.color}15`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = `${item.color}08`;
        e.currentTarget.style.borderColor = `${item.color}20`;
        e.currentTarget.style.transform = "translateX(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: `${item.color}18`,
          border: `1px solid ${item.color}30`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: item.color,
          flexShrink: 0,
        }}
      >
        {item.icon}
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: "0.72rem", color: "#475569", fontFamily: "var(--font-mono)", marginBottom: 3, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          {item.label}
        </p>
        <p style={{ fontWeight: 600, fontSize: "0.9rem", color: "#e2e8f0", marginBottom: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {item.value}
        </p>
        <p style={{ fontSize: "0.72rem", color: "#475569" }}>{item.description}</p>
      </div>

      {/* Arrow */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth={2} style={{ opacity: 0.6, flexShrink: 0 }}>
        <path d="M7 17L17 7M17 7H7M17 7v10"/>
      </svg>
    </a>
  );
}

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section id="contact" style={{ position: "relative", zIndex: 1 }}>
      <div
        style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(236,72,153,0.3), rgba(139,92,246,0.3), transparent)",
        }}
      />

      {/* Glow */}
      <div style={{
        position: "absolute",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        filter: "blur(80px)",
        pointerEvents: "none",
      }} />

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
          <p style={{
            fontFamily: "var(--font-mono)",
            color: "#8b5cf6",
            fontSize: "0.85rem",
            marginBottom: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}>
            — Let's Talk
          </p>
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p style={{
            color: "#475569",
            marginTop: 24,
            maxWidth: 480,
            margin: "24px auto 0",
            fontSize: "0.95rem",
            lineHeight: 1.7,
          }}>
            I'm always open to exciting opportunities, collaborations, or just a friendly chat about tech and innovation.
          </p>
        </div>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>

          {/* LEFT — Contact cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {contactLinks.map((item, i) => (
              <ContactCard key={item.label} item={item} index={i} inView={inView} />
            ))}
          </div>

          {/* RIGHT — CTA card + availability */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(30px)",
            transition: "all 0.8s ease 0.3s",
          }}>

            {/* Big CTA */}
            <div
              className="glass"
              style={{ padding: "40px", marginBottom: 24, textAlign: "center" }}
            >
              {/* Emoji */}
              <div style={{ fontSize: "3rem", marginBottom: 20 }}>👋</div>

              <h3 style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.5rem",
                marginBottom: 12,
                background: "linear-gradient(135deg, #e2e8f0, #94a3b8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Let's Build Something Together
              </h3>

              <p style={{ color: "#475569", lineHeight: 1.75, fontSize: "0.9rem", marginBottom: 32 }}>
                Whether you have a project idea, an internship opportunity, or want to discuss data science, BI, and AI — I'd love to connect!
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a
                  href="mailto:rouissinesrine3@gmail.com"
                  className="btn-primary"
                  style={{ justifyContent: "center", fontSize: "0.9rem" }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    Send Me an Email
                  </span>
                </a>
                <a
                  href="https://linkedin.com/in/nesrine-rouissi-b19614266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ justifyContent: "center", fontSize: "0.9rem" }}
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Availability status */}
            <div
              className="glass"
              style={{ padding: "20px 24px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(16,185,129,0.12)",
                  border: "1px solid rgba(16,185,129,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <div style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#10b981",
                    boxShadow: "0 0 10px #10b981",
                    animation: "pulse-ring 2s infinite",
                  }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#10b981", marginBottom: 2 }}>
                    Available for Opportunities
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "#475569" }}>
                    Open to internships & projects • Response within 24h
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: "center",
          marginTop: 80,
          paddingTop: 40,
          borderTop: "1px solid rgba(255,255,255,0.05)",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.7s ease 0.8s",
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 16,
          }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: 9,
              background: "linear-gradient(135deg, #8b5cf6, #00f5ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "0.75rem",
              color: "#050814",
            }}>
              NR
            </div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#334155" }}>
              Nesrine Rouissi
            </span>
          </div>
          <p style={{ fontSize: "0.78rem", color: "#1e293b", fontFamily: "var(--font-mono)" }}>
            © 2026 · Built with React + Vite · Designed with ❤️
          </p>
        </div>
      </div>
    </section>
  );
}
