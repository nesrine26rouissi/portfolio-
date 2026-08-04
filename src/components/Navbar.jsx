import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["hero", "about", "skills", "projects", "experience", "associative", "education", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { href: "#about",       label: "About"       },
    { href: "#skills",      label: "Skills"      },
    { href: "#projects",    label: "Projects"    },
    { href: "#experience",  label: "Experience"  },
    { href: "#associative", label: "Associative" },
    { href: "#education",   label: "Education"   },
    { href: "#contact",     label: "Contact"     },
    { href: "/Nesrine_ROUISSI_CV.pdf", label: "CV", external: true },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 24px",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={handleLinkClick}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.1rem",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 10,
              zIndex: 201,
              position: "relative",
            }}
          >
            <span
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                background: "linear-gradient(135deg, #8b5cf6, #00f5ff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
                fontWeight: 800,
                color: "#050814",
              }}
            >
              NR
            </span>
            <span className="gradient-text-2" style={{ letterSpacing: "-0.02em" }}>
              Nesrine<span style={{ color: "#fff", WebkitTextFillColor: "#fff" }}> Rouissi</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul
            className="nav-links"
            style={{
              display: "flex",
              gap: 36,
              listStyle: "none",
              alignItems: "center",
            }}
          >
            {links.map(({ href, label, external }) => (
              <li key={href}>
                <a
                  href={href}
                  className="nav-link"
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  style={{
                    color: activeSection === href.slice(1) ? "#fff" : undefined,
                  }}
                >
                  {activeSection === href.slice(1) && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: -2,
                        left: 0,
                        width: "100%",
                        height: 2,
                        background: "linear-gradient(90deg, #8b5cf6, #00f5ff)",
                        borderRadius: 9999,
                        boxShadow: "0 0 8px rgba(0,245,255,0.5)",
                      }}
                    />
                  )}
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Buttons (desktop) */}
          <div className="nav-cta-buttons" style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <a
              href="/Nesrine_ROUISSI_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: "9px 20px", fontSize: "0.8rem", height: "fit-content" }}
            >
              CV
            </a>
            <a
              href="https://github.com/Nesnousa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "9px 20px", fontSize: "0.8rem", height: "fit-content" }}
            >
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ display: "inline", marginRight: 6, verticalAlign: -2 }}>
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </span>
            </a>
          </div>

          {/* Hamburger button (mobile) */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map(({ href, label, external }) => (
          <a
            key={href}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            onClick={handleLinkClick}
          >
            {label}
          </a>
        ))}
        {/* CTA buttons inside mobile menu */}
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <a
            href="/Nesrine_ROUISSI_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ fontSize: "0.9rem" }}
            onClick={handleLinkClick}
          >
            CV
          </a>
          <a
            href="https://github.com/Nesnousa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "0.9rem" }}
            onClick={handleLinkClick}
          >
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </>
  );
}