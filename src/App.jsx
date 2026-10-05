import { useState, useEffect, useRef } from "react";
import {
  profile, facts, experience, projects, skills,
  education, languages, certifications, beyond,
} from "./data";


const reduced = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

function useInView(once = true, threshold = 0.15) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(() => reduced() || !("IntersectionObserver" in window));
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (seen) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); if (once) io.disconnect(); }
    }, { threshold, rootMargin: "0px 0px -6% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold, seen]);
  return [ref, seen];
}

function Reveal({ children, delay = 0, className = "", as: Tag = "div", ...rest }) {
  const [ref, seen] = useInView();
  return (
    <Tag ref={ref} className={`rv ${seen ? "in" : ""} ${className}`} style={{ "--d": `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

function Counter({ to, suffix = "" }) {
  const [ref, seen] = useInView();
  const [v, setV] = useState(() => (reduced() ? to : 0));
  useEffect(() => {
    if (!seen || reduced()) return;
    let raf, t0;
    const step = (t) => {
      t0 ??= t;
      const p = Math.min((t - t0) / 1100, 1);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

function Typewriter({ words }) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState(reduced() ? words[0] : "");
  const [del, setDel] = useState(false);
  useEffect(() => {
    if (reduced()) return;
    const w = words[i];
    const t = setTimeout(() => {
      if (!del) {
        setTxt(w.slice(0, txt.length + 1));
        if (txt.length + 1 === w.length) setTimeout(() => setDel(true), 1400);
      } else {
        setTxt(w.slice(0, txt.length - 1));
        if (txt.length - 1 === 0) { setDel(false); setI((i + 1) % words.length); }
      }
    }, del ? 35 : 75);
    return () => clearTimeout(t);
  }, [txt, del, i, words]);
  return <span className="typed">{txt}<i className="caret" /></span>;
}

function Progress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      setP(h > 0 ? scrollY / h : 0);
    };
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);
  return <div className="progress" style={{ transform: `scaleX(${p})` }} />;
}

function useActive(ids) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [ids]);
  return active;
}

const NAV = [
  ["about", "About"], ["experience", "Experience"], ["projects", "Projects"],
  ["skills", "Skills"], ["education", "Education"], ["contact", "Contact"],
];

function Section({ id, num, title, children }) {
  return (
    <section id={id} className="section">
      <Reveal as="header" className="section-head">
        <span className="num">{num}</span>
        <h2>{title}</h2>
        <i />
      </Reveal>
      {children}
    </section>
  );
}

function Nav({ dark, setDark }) {
  const active = useActive(NAV.map(([id]) => id));
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo">N<span>R</span></a>
      <ul>
        {NAV.map(([id, l]) => (<li key={id}><a href={`#${id}`} className={active === id ? "act" : ""}>{l}</a></li>))}
      </ul>
      <button className="theme" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? "☀" : "☾"}</button>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="hero">
      <span className="blob b1" /><span className="blob b2" />
      <div className="hero-text">
        <p className="eyebrow rise" style={{ "--d": "0ms" }}>Portfolio · 2026</p>
        <h1>
          <span className="rise" style={{ "--d": "120ms" }}>{profile.first}</span>
          <em className="rise" style={{ "--d": "260ms" }}> {profile.last}</em>
        </h1>
        <p className="role rise" style={{ "--d": "400ms" }}>{profile.title}</p>
        <p className="tracks rise" style={{ "--d": "500ms" }}>
          <span className="prompt">✦</span> <Typewriter words={profile.tracks} />
        </p>
        <p className="lede rise" style={{ "--d": "600ms" }}>
          I turn complex data into actionable insights — and explore how generative AI can make Data &amp; BI workflows smarter.
        </p>
        <div className="cta rise" style={{ "--d": "720ms" }}>
          <a className="btn solid" href="#projects">See my work</a>
          <a className="btn" href="/Nesrine_ROUISSI_CV.pdf" target="_blank" rel="noreferrer">CV (EN)</a>
          <a className="btn" href="/Nesrine_ROUISSI_CV_FR.pdf" target="_blank" rel="noreferrer">CV (FR)</a>
        </div>
      </div>
      <figure className="arch rise-r" style={{ "--d": "300ms" }}>
        <span className="orb o1" /><span className="orb o2" />
        <span className="spark s1">✦</span><span className="spark s2">✦</span><span className="spark s3">✦</span>
        <img src="/images/profile.png" alt="Portrait of Nesrine Rouissi" />
        <figcaption><span>Next</span> ESEO Angers · Exchange semester 09/2026</figcaption>
      </figure>
    </header>
  );
}

function Marquee() {
  const words = ["Business Intelligence", "Data Science", "Artificial Intelligence", "Power BI", "Python", "Deep Learning", "ETL", "Generative AI"];
  return (
    <div className="marquee" aria-hidden="true">
      <div>{[...words, ...words].map((w, i) => (<span key={i}>{w}<b>✦</b></span>))}</div>
    </div>
  );
}

function About() {
  return (
    <Section id="about" num="01" title="About me">
      <div className="about">
        <Reveal as="p" className="about-text">{profile.about}</Reveal>
        <div className="facts">
          {facts.map((f, k) => (
            <Reveal key={f.label} delay={k * 110} className="fact">
              <strong>{/^\d+$/.test(f.n) ? <Counter to={+f.n} /> : f.n}</strong><span>{f.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  const [i, setI] = useState(0);
  const e = experience[i];
  return (
    <Section id="experience" num="02" title="Experience">
      <Reveal className="exp">
        <div className="exp-tabs" role="tablist">
          {experience.map((x, k) => (
            <button key={x.org} role="tab" aria-selected={k === i} className={k === i ? "on" : ""} onClick={() => setI(k)}>
              <b>{x.org}</b><small>{x.period}</small>
            </button>
          ))}
        </div>
        <article className="exp-card" key={e.org}>
          <p className="meta">{e.length} · {e.period}</p>
          <h3>{e.role}</h3>
          <p className="org">{e.org}{e.sub && <> — {e.sub}</>}</p>
          <ul>
            {e.points.map((p) => (
              <li key={p.t}>
                <strong>{p.t}</strong>
                <span>{p.d}</span>
                {p.href && <a href={p.href} target="_blank" rel="noreferrer">View code ↗</a>}
              </li>
            ))}
          </ul>
          {e.tools.length > 0 && (
            <div className="chips">{e.tools.map((t) => (<span key={t}>{t}</span>))}</div>
          )}
        </article>
      </Reveal>
    </Section>
  );
}

function Projects() {
  const [f, setF] = useState("All");
  const cats = ["All", "AI", "BI", "Web"];
  const list = projects.filter((p) => f === "All" || p.cat === f);
  return (
    <Section id="projects" num="03" title="Projects">
      <div className="filters">
        {cats.map((c) => (<button key={c} className={f === c ? "on" : ""} onClick={() => setF(c)}>{c}</button>))}
      </div>
      <div className="bento">
        {list.map((p, k) => (
          <Reveal as="article" key={p.title} delay={(k % 3) * 100} className={`card ${p.size || ""} c-${p.cat}`}>
            <span className="tag">{p.cat}{p.badge && <em> · 🏆 {p.badge}</em>}</span>
            <h3>{p.title}</h3>
            <p className="sub">{p.sub}</p>
            <p>{p.d}</p>
            {p.href && <a href={p.href} target="_blank" rel="noreferrer">View on GitHub ↗</a>}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" num="04" title="Skills">
      <div className="skills">
        {skills.map((s, k) => (
          <Reveal key={s.g} delay={k * 70} className="skill-row">
            <h4>{s.g}</h4>
            <div className="chips">{s.items.map((t, j) => (<span key={t} style={{ "--j": j }}>{t}</span>))}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" num="05" title="Education & more">
      <div className="edu-grid">
        <ol className="timeline">
          {education.map((e, k) => (
            <Reveal as="li" delay={k * 120} key={e.school} className={e.now ? "now" : ""}>
              <time>{e.y}{e.now && <em> · upcoming</em>}</time>
              <h3>{e.school}</h3>
              <p>{e.deg}</p>
            </Reveal>
          ))}
        </ol>
        <aside className="side">
          <Reveal className="panel">
            <h4>Languages</h4>
            {languages.map((l) => (
              <div key={l.l} className="lang">
                <div><span>{l.l}</span><small>{l.v}</small></div>
                <i><b style={{ width: `${l.p}%` }} /></i>
              </div>
            ))}
          </Reveal>
          <Reveal className="panel" delay={120}>
            <h4>Certifications</h4>
            <ul className="plain">{certifications.map((c) => (<li key={c}>{c}</li>))}</ul>
          </Reveal>
          <Reveal className="panel" delay={240}>
            <h4>Beyond class</h4>
            <ul className="plain">
              {beyond.map((b) => (<li key={b.t}><strong>{b.t}</strong> — {b.r}{b.d && <small>{b.d}</small>}</li>))}
            </ul>
          </Reveal>
        </aside>
      </div>
    </Section>
  );
}

function Contact() {
  const rows = [
    ["Email", profile.email, `mailto:${profile.email}`],
    ["Phone", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`],
    ["LinkedIn", "nesrine-rouissi-b19614266", profile.linkedin],
    ["GitHub", "nesrine26rouissi", profile.github],
    ["Location", profile.address, null],
  ];
  return (
    <section id="contact" className="contact">
      <Reveal as="p" className="eyebrow">Let's talk</Reveal>
      <Reveal as="h2" delay={100}>Let's build something <em>with data.</em></Reveal>
      <ul>
        {rows.map(([k, v, h], n) => (
          <Reveal as="li" delay={200 + n * 90} key={k}><span>{k}</span>{h ? <a href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{v}</a> : <b>{v}</b>}</Reveal>
        ))}
      </ul>
      <footer>© 2026 Nesrine Rouissi · Angers, France</footer>
    </section>
  );
}

export default function App() {
  const [dark, setDark] = useState(() => window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false);
  useEffect(() => { document.documentElement.dataset.theme = dark ? "dark" : "light"; }, [dark]);
  return (
    <>
      <Progress />
      <Nav dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
