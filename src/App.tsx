import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  PenTool,
  Send,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  visual: string;
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "Northstar",
    category: "PRODUCTIVITY · SAMPLE PROJECT",
    description: "A considered workspace concept for bringing everyday plans and team notes into one calm, focused place.",
    stack: ["React", "TypeScript", "CSS"],
    visual: "northstar",
    github: "https://github.com/yourusername/northstar",
    demo: "https://northstar.example.com",
  },
  {
    number: "02",
    name: "Common Ground",
    category: "COMMUNITY · SAMPLE PROJECT",
    description: "A sample directory experience that helps people discover local spaces, events, and independent makers.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    visual: "ground",
    github: "https://github.com/yourusername/common-ground",
    demo: "https://common-ground.example.com",
  },
  {
    number: "03",
    name: "Fieldnotes",
    category: "CREATIVE TOOLS · SAMPLE PROJECT",
    description: "An editorial-style digital notebook concept for collecting references and keeping creative work moving.",
    stack: ["React", "Figma", "Framer Motion"],
    visual: "fieldnotes",
    github: "https://github.com/yourusername/fieldnotes",
    demo: "https://fieldnotes.example.com",
  },
];

const skills = [
  { title: "Frontend", items: ["React", "TypeScript", "Next.js", "HTML & CSS", "Accessibility"] },
  { title: "Backend", items: ["Node.js", "REST APIs", "PostgreSQL", "Authentication", "Testing"] },
  { title: "Design & tools", items: ["Figma", "UI systems", "Git & GitHub", "Vite", "Agile workflows"] },
];

const timeline = [
  { type: "Experience", period: "2023 — PRESENT", title: "Software Engineer", company: "Company name", description: "Add a short, specific description of your role, team, and the kind of products you work on." },
  { type: "Experience", period: "2021 — 2023", title: "Frontend Developer", company: "Company name", description: "Replace this sample with a project, responsibility, or area of growth from your experience." },
  { type: "Education", period: "2017 — 2021", title: "BSc, Computer Science", company: "University name", description: "Add your degree, relevant coursework, or another educational experience here." },
];

const navItems = ["About", "Work", "Experience", "Services", "Contact"];

function App() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme === "light" ? "light" : "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  }

  function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    setFormStatus("Your email app is opening with your message ready to send.");
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className={`site-shell theme-${theme}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Alex Morgan, home">am<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button theme-button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title="Toggle color theme">
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
          <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            {navItems.map((item, index) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                <span>0{index + 1}</span>{item}<ArrowUpRight size={17} />
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <main id="main">
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}>
              I&apos;m Alex,<br />I build <span className="accent-text">digital</span><br />things that matter<span className="period">.</span>
            </motion.h1>
            <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.28 }}>
              Software engineer &amp; technology entrepreneur turning thoughtful ideas into useful, human-centered products.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
            </motion.div>
            <div className="hero-socials" aria-label="Social links">
              <a href="https://github.com/yourusername" aria-label="GitHub profile" target="_blank" rel="noreferrer"><Github size={17} /></a>
              <a href="https://www.linkedin.com/in/yourusername" aria-label="LinkedIn profile" target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
              <a href="mailto:hello@example.com" aria-label="Send an email"><Mail size={17} /></a>
              <span className="social-divider" />
              <span className="location-label">BASED IN YOUR CITY</span>
            </div>
          </div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }}>
            <div className="portrait-frame">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85" alt="Portrait placeholder for Alex Morgan" />
              <div className="portrait-overlay" />
              <div className="portrait-caption"><span>THE PERSON BEHIND THE PIXELS</span><ArrowUpRight size={15} /></div>
            </div>
            <div className="orbit-note"><Sparkles size={14} /><span>CURIOUS BY<br />DEFAULT</span></div>
            <div className="hero-index"><span>01 / 05</span><span className="index-line" /></div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="about section-wrap section-space" id="about">
          <SectionHeading number="01" label="A LITTLE ABOUT ME" title={<>Building with <span className="serif-italic">intention.</span></>} />
          <div className="about-grid">
            <p className="about-lead">I&apos;m a software engineer who cares as much about how a product <em>feels</em> as how it works.</p>
            <div className="about-copy">
              <p>I enjoy connecting the dots between thoughtful design, clean engineering, and the real-world needs of the people using what we make. My work moves between building interfaces, shaping product ideas, and bringing teams together around a clear vision.</p>
              <p>Outside of code, you&apos;ll find me exploring new ideas, learning from people who think differently, and looking for the next worthwhile problem to solve. I&apos;m working toward building technology that makes everyday life a little better.</p>
              <a className="text-link underlined-link" href="#contact">A little more about working together <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="work section-wrap section-space" id="work">
          <SectionHeading number="02" label="SELECTED WORK" title={<>A few things I&apos;ve <span className="serif-italic">made.</span></>} aside="SAMPLE PROJECTS — REPLACE WITH YOUR WORK" />
          <div className="project-grid">
            {projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}
          </div>
          <div className="work-footnote"><span>THESE ARE PLACEHOLDER PROJECTS</span><span>YOUR REAL WORK GOES HERE <ArrowRight size={14} /></span></div>
        </section>

        <section className="skills section-wrap section-space">
          <SectionHeading number="03" label="MY TOOLKIT" title={<>Curious mind, <span className="serif-italic">practical tools.</span></>} />
          <div className="skills-grid">
            {skills.map((group, index) => (
              <motion.article className="skill-group" key={group.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.1 }}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="experience section-wrap section-space" id="experience">
          <SectionHeading number="04" label="THE PATH SO FAR" title={<>Learning by <span className="serif-italic">doing.</span></>} />
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.article className="timeline-row" key={`${item.title}-${item.period}`} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ delay: index * 0.08 }}>
                <div className="timeline-meta"><span>{item.type}</span><span>{item.period}</span></div>
                <div className="timeline-content"><span className="timeline-dot" /><h3>{item.title}</h3><p className="timeline-company">{item.company}</p><p className="timeline-description">{item.description}</p></div>
                <ArrowUpRight className="timeline-arrow" size={18} />
              </motion.article>
            ))}
          </div>
        </section>

        <section className="services section-wrap section-space" id="services">
          <SectionHeading number="05" label="HOW I CAN HELP" title={<>Good ideas deserve <span className="serif-italic">good craft.</span></>} />
          <div className="services-grid">
            <ServiceCard icon={<Code2 size={20} />} number="01" title="Web development" description="Responsive, accessible websites and web applications, made to feel effortless and work reliably." />
            <ServiceCard icon={<Layers3 size={20} />} number="02" title="Software development" description="Practical product engineering from early prototype through considered, maintainable implementation." />
            <ServiceCard icon={<PenTool size={20} />} number="03" title="UI/UX design" description="Clear user journeys and polished interfaces that bring a product’s purpose into focus." />
          </div>
        </section>

        <section className="contact section-wrap section-space" id="contact">
          <div className="contact-copy">
            <p className="eyebrow"><span className="status-dot" /> HAVE A GOOD ONE IN MIND?</p>
            <h2>Let&apos;s make<br />something <span className="serif-italic">matter.</span></h2>
            <p className="contact-intro">Have a project, a question, or just want to say hello? My inbox is open.</p>
            <a className="contact-email" href="mailto:hello@example.com">hello@example.com <ArrowUpRight size={17} /></a>
            <div className="contact-socials">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
              <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <label htmlFor="contact-name">YOUR NAME</label>
            <input id="contact-name" name="name" type="text" placeholder="Jane Smith" autoComplete="name" required />
            <label htmlFor="contact-email">EMAIL ADDRESS</label>
            <input id="contact-email" name="email" type="email" placeholder="jane@company.com" autoComplete="email" required />
            <label htmlFor="contact-message">WHAT&apos;S ON YOUR MIND?</label>
            <textarea id="contact-message" name="message" rows={3} placeholder="A little about your project..." required />
            <button className="button button-primary submit-button" type="submit">Send a message <Send size={15} /></button>
            <p className="form-status" aria-live="polite">{formStatus}</p>
          </form>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-mark" href="#home" aria-label="Back to top">am<span>.</span></a>
        <p>Thoughtful software,<br />made for people.</p>
        <nav aria-label="Footer navigation">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>
        <span className="copyright">© {new Date().getFullYear()} ALEX MORGAN<br />BUILT WITH CARE</span>
      </footer>
      <div className="bottom-rule" />
    </div>
  );
}

function SectionHeading({ number, label, title, aside }: { number: string; label: string; title: React.ReactNode; aside?: string }) {
  return (
    <div className="section-heading">
      <div className="section-label"><span>{number}</span>{label}</div>
      <h2>{title}</h2>
      {aside && <span className="heading-aside">{aside}</span>}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article className="project-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
      <a className={`project-art ${project.visual}`} href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} sample demo`}>
        <div className="art-window">
          <div className="window-top"><span /><span /><span /><i>{project.name.toLowerCase()}.app</i></div>
          {project.visual === "northstar" && <div className="northstar-ui"><span className="mock-sidebar" /><div><small>MONDAY, OCTOBER 21</small><b>Good morning,<br />Alex.</b><span className="mock-card" /><span className="mock-lines" /></div></div>}
          {project.visual === "ground" && <div className="ground-ui"><div className="ground-sun" /><small>FIND YOUR PEOPLE</small><b>Closer to<br />your community.</b><span>Explore nearby <ArrowUpRight size={13} /></span></div>}
          {project.visual === "fieldnotes" && <div className="field-ui"><span className="field-side">FIELD<br />NOTES</span><div><small>ISSUE NO. 008</small><b>Ideas are<br /><i>everywhere.</i></b><span className="field-photo" /></div></div>}
        </div>
        <span className="art-open"><ArrowUpRight size={17} /></span>
      </a>
      <div className="project-info">
        <div className="project-title-row"><div><span className="project-category">{project.category}</span><h3>{project.name}</h3></div><span className="project-number">{project.number}</span></div>
        <p>{project.description}</p>
        <div className="project-bottom"><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-links"><a href={project.github} aria-label={`${project.name} GitHub placeholder`} target="_blank" rel="noreferrer"><Github size={15} /></a><a href={project.demo} aria-label={`${project.name} live demo placeholder`} target="_blank" rel="noreferrer"><Globe2 size={15} /></a></div></div>
      </div>
    </motion.article>
  );
}

function ServiceCard({ icon, number, title, description }: { icon: React.ReactNode; number: string; title: string; description: string }) {
  return (
    <article className="service-card">
      <div className="service-card-top"><span className="service-icon">{icon}</span><span>{number}</span></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ArrowDownRight className="service-arrow" size={18} />
    </article>
  );
}

export default App;
