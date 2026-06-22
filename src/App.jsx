import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Associative from "./components/Associative";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div style={{ background: "var(--bg-dark)", color: "#e2e8f0", minHeight: "100vh" }}>
      {/* Fixed background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Associative />
      <Education />
      <Contact />
    </div>
  );
}

export default App;