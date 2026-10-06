import { MobileNavigation } from "./components/mobile-navigation";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievement", href: "#achievement" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "C", "C++", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend development",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "Responsive Web Design", "UI/UX"],
  },
  {
    title: "Backend development",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Role-Based Access Control (RBAC)"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Oracle SQL", "Database Design", "Query Optimization"],
  },
  {
    title: "DevOps & tools",
    skills: ["Git", "GitHub", "Docker", "GitHub Actions (CI/CD)", "Postman", "Vercel", "VS Code"],
  },
  {
    title: "Cybersecurity",
    skills: ["Wireshark", "Splunk", "Threat Detection", "Risk Analysis", "Network Security"],
  },
  {
    title: "Software practices",
    skills: ["Agile/Scrum", "Software Development Life Cycle (SDLC)", "Unit Testing", "Debugging", "Technical Documentation", "Team Collaboration"],
  },
];

const certifications = [
  { name: "Cyber Job Simulation", issuer: "Deloitte Australia (via Forage)", date: "Jul 2026" },
  { name: "Master Mentors Geo-Enabling Indian Scholars (MMGEIS)", issuer: "", date: "Mar 2026" },
  { name: "Cyber Security", issuer: "Prodigy Infotech", date: "Dec 2025" },
  { name: "Postman API Fundamentals", issuer: "", date: "Feb 2025" },
  { name: "Oracle Java Fundamentals", issuer: "", date: "Dec 2024" },
  { name: "Oracle Database Programming with SQL", issuer: "", date: "Jan 2024" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <div className="brand" aria-label="Abhishek Kumar Gautam">
            <span className="brand-mark" aria-hidden="true">AG</span>
            <span className="brand-name">Abhishek Kumar Gautam</span>
          </div>
          <nav className="desktop-navigation" aria-label="Primary navigation">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <MobileNavigation items={navigation} />
        </div>
      </header>

      <main id="main">
        <section className="hero section-shell" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Greater Noida, Uttar Pradesh</p>
            <h1 id="hero-title">Abhishek<br /><span>Kumar Gautam</span></h1>
            <p className="hero-role">Computer Science graduate <span aria-hidden="true">/</span> Full-stack development</p>
            <p className="hero-summary">I build responsive web applications with JavaScript, TypeScript, React.js, Next.js, Node.js and MongoDB.</p>
            <p className="hero-intent">Seeking an entry-level software or full-stack developer role.</p>
            <div className="button-row">
              <a className="button button-primary" href="#projects">Explore selected projects <span aria-hidden="true">↘</span></a>
              <a className="button button-quiet" href="/abhishek-kumar-gautam-resume.pdf" download>Download résumé <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-education"><span>Galgotias University</span><span>B.Tech · Computer Science</span><span>Oct 2022 — Aug 2026</span></div>
          </div>
          <figure className="portrait-frame">
            <img src="/portrait.jpg" alt="Portrait of Abhishek Kumar Gautam" width="640" height="800" fetchPriority="high" />
            <figcaption><span>Computer Science</span><span>Greater Noida, India</span></figcaption>
          </figure>
          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><span aria-hidden="true">↓</span></a>
        </section>

        <section className="content-section section-shell" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="section-index">01 <span>About</span></p>
            <h2 id="about-title">Curious by nature.<br /><span>Precise by practice.</span></h2>
          </div>
          <div className="about-content">
            <p className="section-lede">A Computer Science graduate focused on full-stack development, building responsive web applications and learning through hands-on project work.</p>
            <p className="body-copy">My experience includes REST APIs, database-backed accounts and booking flows, automated testing, CI/CD and Agile/Scrum collaboration. I also bring foundational cybersecurity training.</p>
            <div className="education-list" aria-label="Education">
              <article className="education-item">
                <div><h3>Galgotias University</h3><p>Bachelor of Technology · Computer Science</p><p>Greater Noida, Uttar Pradesh</p></div>
                <time>Oct 2022 — Aug 2026</time>
              </article>
              <article className="education-item">
                <div><h3>Sri Chaitanya Techno School</h3><p>Senior Secondary Education · Class XII, PCM</p><p>Visakhapatnam, Andhra Pradesh</p></div>
                <time>Aug 2020 — May 2022</time>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section section-shell" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <p className="section-index">02 <span>Skills</span></p>
            <h2 id="skills-title">Tools for thoughtful<br /><span>full-stack work.</span></h2>
            <p className="section-note">Skills and practices listed in my résumé.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section section-shell" id="projects" aria-labelledby="projects-title">
          <div className="section-heading project-section-heading">
            <p className="section-index">03 <span>Projects</span></p>
            <h2 id="projects-title">Selected work,<br /><span>built with intent.</span></h2>
            <p className="section-note">Three projects from my résumé. No invented metrics or unverified links.</p>
          </div>

          <article className="project-feature" aria-labelledby="music-title">
            <div className="feature-topline"><span>01 <i>Flagship case study</i></span><time>Sep 2026</time></div>
            <div className="feature-intro">
              <div><h3 id="music-title">Music &amp;<br /><span>Movies Show</span></h3><p className="project-summary">A responsive discovery and booking experience for films, television and anime, with music recommendations.</p></div>
              <div className="project-art" aria-hidden="true"><span className="art-orbit orbit-one" /><span className="art-orbit orbit-two" /><strong>M<span>+</span>M</strong><small>DISCOVER · BOOK · LISTEN</small></div>
            </div>
            <div className="feature-details">
              <div><p className="detail-label">Built with</p><p className="tech-list">Next.js <span>·</span> TypeScript <span>·</span> MongoDB</p></div>
              <div className="case-study-copy">
                <p className="detail-label">Case study</p>
                <ul className="feature-list">
                  <li>Connected TMDB for film discovery and trailers, with optional Spotify OAuth/API, OMDb enrichment and a YouTube fallback.</li>
                  <li>Added 2D seat-map booking and a sign-in-gated Three.js theater with five curved seating rows and on-screen trailers.</li>
                  <li>Implemented email/password sign-in and cookie sessions; MongoDB stores favorites, viewing history and confirmed bookings.</li>
                  <li>Configured GitHub Actions CI checks and Vercel deployment; API rate limiting defaults to 120 requests per 60 seconds.</li>
                </ul>
              </div>
            </div>
          </article>

          <div className="project-grid">
            <article className="project-card">
              <div className="feature-topline"><span>02 <i>Team project</i></span><time>Jul 2024</time></div>
              <h3>Campus Connect<br /><span>Portal</span></h3>
              <p>Worked with an Agile team to build a responsive college website. Created reusable React components for navigation and page transitions, then tested and deployed the site on Vercel.</p>
              <p className="tech-list">React.js <span>·</span> Modular CSS <span>·</span> Vercel</p>
            </article>
            <article className="project-card">
              <div className="feature-topline"><span>03 <i>Team project</i></span><time>Mar 2023</time></div>
              <h3>Smart<br /><span>Chatbot</span></h3>
              <p>Collaborated on an AI-powered chat application with a responsive interface. Managed chat history and application state with Redux Toolkit.</p>
              <p className="tech-list">React.js <span>·</span> Modular CSS <span>·</span> Redux Toolkit</p>
            </article>
          </div>
        </section>

        <section className="content-section section-shell" id="certifications" aria-labelledby="certifications-title">
          <div className="section-heading">
            <p className="section-index">04 <span>Certifications</span></p>
            <h2 id="certifications-title">Learning, made<br /><span>visible.</span></h2>
          </div>
          <ol className="certification-list">
            {certifications.map((item) => (
              <li key={item.name}>
                <div><h3>{item.name}</h3>{item.issuer && <p>{item.issuer}</p>}</div>
                <time>{item.date}</time>
              </li>
            ))}
          </ol>
        </section>

        <section className="content-section achievement-section section-shell" id="achievement" aria-labelledby="achievement-title">
          <div className="achievement-number" aria-hidden="true">#1</div>
          <div className="achievement-copy">
            <p className="section-index">05 <span>Achievement</span></p>
            <h2 id="achievement-title">IIT Delhi<br /><span>Tryst ’23</span></h2>
            <p className="achievement-role">Campus Ambassador <span>·</span> Mar 2023</p>
            <p className="body-copy">Ranked #1 among all campus ambassadors nationwide for Tryst ’23. Led the points leaderboard by driving the highest event participation.</p>
          </div>
        </section>

        <section className="content-section contact-section section-shell" id="contact" aria-labelledby="contact-title">
          <div className="section-heading">
            <p className="section-index">06 <span>Contact</span></p>
            <h2 id="contact-title">Let’s make<br /><span>something useful.</span></h2>
            <p className="section-note">For entry-level software and full-stack developer opportunities.</p>
          </div>
          <div className="contact-list">
            <a href="mailto:ak9724068@gmail.com"><span>Email</span><strong>ak9724068@gmail.com</strong><span aria-hidden="true">↗</span></a>
            <a href="tel:+919234950604"><span>Phone</span><strong>+91 9234950604</strong><span aria-hidden="true">↗</span></a>
            <a href="https://github.com/Gautam215" target="_blank" rel="noreferrer"><span>GitHub</span><strong>github.com/Gautam215</strong><span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/gautam313/" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>linkedin.com/in/gautam313</strong><span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell"><span>Abhishek Kumar Gautam</span><span>Greater Noida, Uttar Pradesh</span><a href="#home">Back to top ↑</a></footer>
    </>
  );
}
