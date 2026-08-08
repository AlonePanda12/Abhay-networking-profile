import { createFileRoute } from "@tanstack/react-router";
import abhayPhoto from "@/assets/abhay.jpg";
import resumePdf from "@/assets/AbhayBisht.pdf";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Network,
  Code2,
  GraduationCap,
  Award,
  Briefcase,
  Server,
  ArrowUpRight,
  Download,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhay Bisht — Network Engineer & XML Programmer" },
      {
        name: "description",
        content:
          "Portfolio of Abhay Bisht: CSE graduate, network engineer and XML programmer skilled in TCP/IP, routing & switching, Cisco Packet Tracer, React.js and Node.js.",
      },
      { property: "og:title", content: "Abhay Bisht — Network Engineer & XML Programmer" },
      {
        property: "og:description",
        content:
          "Networking, troubleshooting and full-stack projects by Abhay Bisht, Computer Science graduate based in Faridabad, India.",
      },
    ],
  }),
  component: Portfolio,
});

const skills = {
  Networking: [
    "TCP/IP",
    "Routing & Switching",
    "Cisco Routers",
    "Subnetting",
    "DHCP",
    "DNS",
    "VPN",
    "Network Troubleshooting",
    "Cisco Packet Tracer",
  ],
  Development: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML5", "XML / IEEE", "MySQL"],
  Systems: ["Windows Admin", "Basic Linux", "BIOS", "Computer Hardware", "Network Support"],
};

const experience = [
  {
    role: "XML Programmer",
    org: "Way2Class Pvt. Ltd.",
    period: "Feb 2026 – May 2026",
    points: [
      "Processed and structured research articles into IEEE/XML formats using XML schema and document validation techniques.",
      "Transformed LaTeX equations into XML to preserve complex mathematical expressions.",
      "Identified and resolved XML validation errors, improving accuracy and reducing manual QA effort.",
      "Managed references, citations and metadata while meeting strict deadlines.",
    ],
  },
  {
    role: "XML Intern",
    org: "Way2Class Pvt. Ltd.",
    period: "3 Months",
    points: [
      "Converted research paper content into IEEE/XML formats with schema-based validation.",
      "Performed quality checks to ensure integrity and consistency of converted documents.",
      "Collaborated with the team to maintain workflow continuity under tight deadlines.",
    ],
  },
];

const certifications = [
  "The Complete MySQL Bootcamp: Beginner to Expert",
  "Microsoft Azure Data Warehousing Tools",
  "Getting Started with Cisco Packet Tracer",
  "Computer Hardware Basics",
];

const education = [
  {
    year: "2026",
    title: "B.Tech — Computer Science and Engineering",
    place: "Dev Bhoomi Uttarakhand University, Dehradun",
    score: "Grade 7.1 / 10",
  },
  {
    year: "2022",
    title: "Diploma in Information Technology",
    place: "Government Polytechnic, Uttarakhand",
    score: "74%",
  },
];

const navItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
  [
    <a
      href={resumePdf}
      download="Abhay_Bisht_Resume.pdf"
      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs text-primary transition-colors hover:bg-primary/20"
    >
      <Download className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">Resume</span>
      <span className="sm:hidden">CV</span>
    </a>,
  ],
] as const;
function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur">
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
          <a
            href="#top"
            className="min-w-0 font-mono text-sm font-bold tracking-tight sm:text-base"
          >
            <span className="text-gradient">abhay</span>
            <span className="text-muted-foreground">.bisht</span>
          </a>
          <ul className="hidden items-center gap-6 font-mono text-xs text-muted-foreground md:flex">
            {navItems.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-primary">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero-surface relative overflow-hidden border-b border-border">
          <div className="grid-surface absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr] md:items-center md:py-24">
            <div className="min-w-0">
              <span className="chip">Open to Network / Technical Support roles</span>
              <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
                Abhay Bisht
                <span className="mt-2 block text-gradient text-xl sm:text-2xl">
                  Network Engineer &amp; XML Programmer
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Computer Science graduate with a Diploma in IT and a strong foundation in TCP/IP,
                routing &amp; switching, DHCP, DNS and network troubleshooting. I also build
                full-stack apps with React.js and Node.js, and I&apos;ve shipped IEEE/XML production
                work in a real publishing pipeline.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="mailto:abhaysinghalm333@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:text-sm"
                >
                  <Mail className="h-4 w-4" /> Hire me
                </a>
                <a
                  href="https://www.linkedin.com/in/abhay-bisht-14a170248/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-xs font-semibold transition-colors hover:border-primary/50 hover:text-primary sm:text-sm"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href={resumePdf}
                  download="Abhay_Bisht_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 font-mono text-xs font-semibold text-primary transition-colors hover:bg-primary/20 sm:text-sm"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  ["2026", "CSE Graduate"],
                  ["4+", "Certifications"],
                  ["3 mo", "XML Internship"],
                  ["10+", "Networking Labs"],
                ].map(([value, label]) => (
                  <div key={label} className="min-w-0">
                    <dt className="font-mono text-xl font-bold text-primary sm:text-2xl">
                      {value}
                    </dt>
                    <dd className="truncate text-xs text-muted-foreground">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
              <div
                className="absolute -inset-3 rounded-[2rem] bg-primary/15 blur-2xl"
                aria-hidden="true"
              />
              <img
                src={abhayPhoto}
                alt="Portrait of Abhay Bisht"
                loading="lazy"
                className="relative w-full rounded-[1.75rem] border border-primary/30 object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" icon={<Server className="h-4 w-4" />} title="About me">
          <div className="grid gap-6 md:grid-cols-3">
            <p className="card-elevated p-6 text-sm leading-relaxed text-muted-foreground md:col-span-2">
              I enjoy the layer where hardware, networks and code meet — configuring routers and
              switches, chasing down connectivity issues, then automating or documenting what I
              learned. My internship and role as an XML Programmer sharpened my precision with
              schemas, validation and deadlines, while side projects keep my React and Node skills
              current. I&apos;m now looking for an entry-level Network / Technical Support role
              where I can troubleshoot real infrastructure every day.
            </p>
            <ul className="card-elevated space-y-4 p-6 font-mono text-xs">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-primary" /> Faridabad, India
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" /> +91-8882315761
              </li>
              <li className="flex min-w-0 items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate">abhaysinghalm333@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Code2 className="h-4 w-4 shrink-0 text-primary" /> English, Hindi
              </li>
            </ul>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" icon={<Network className="h-4 w-4" />} title="Skills">
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="card-elevated p-6">
                <h3 className="font-mono text-sm font-semibold text-primary">{group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" icon={<Briefcase className="h-4 w-4" />} title="Experience">
          <div className="space-y-6">
            {experience.map((job) => (
              <article key={job.role + job.period} className="card-elevated p-6 sm:p-8">
                <header className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="text-sm text-primary">{job.org}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {job.period}
                  </span>
                </header>
                <ul className="mt-5 space-y-2.5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" icon={<Code2 className="h-4 w-4" />} title="Projects">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="card-elevated p-6 sm:p-8">
              <h3 className="text-lg font-semibold">Home Office Network Simulation</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Designed a LAN topology and configured routers and switches in Cisco Packet Tracer,
                assigned IP addressing schemes, configured DHCP and verified end-to-end connectivity
                using Ping and Tracert.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {["Packet Tracer", "DHCP", "Subnetting", "Routing"].map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
            <article className="card-elevated p-6 sm:p-8">
              <h3 className="text-lg font-semibold">Full-Stack Web Applications</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Built multiple MERN-style applications with React.js front-ends, Express APIs and
                MongoDB persistence — covering authentication, CRUD flows and responsive layouts.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {["React.js", "Node.js", "Express.js", "MongoDB"].map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Section>

        {/* EDUCATION + CERTS */}
        <Section
          id="education"
          icon={<GraduationCap className="h-4 w-4" />}
          title="Education & Certifications"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.title} className="card-elevated p-6">
                  <span className="font-mono text-xs text-accent">{e.year}</span>
                  <h3 className="mt-2 text-base font-semibold">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>
                  <p className="mt-2 font-mono text-xs text-primary">{e.score}</p>
                </div>
              ))}
            </div>
            <div className="card-elevated p-6">
              <h3 className="flex items-center gap-2 font-mono text-sm font-semibold text-primary">
                <Award className="h-4 w-4" /> Certifications
              </h3>
              <ul className="mt-4 space-y-3">
                {certifications.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {c}
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 font-mono text-sm font-semibold text-primary">
                Beyond the résumé
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>Google Developer Student Club — active member &amp; community projects</li>
                <li>Hackathons and coding competitions</li>
                <li>Competitive coding, technical blogging, open source contribution</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <section id="contact" className="hero-surface border-t border-border">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <h2 className="text-2xl font-bold sm:text-4xl">
              Let&apos;s <span className="text-gradient">work together</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm text-muted-foreground sm:text-base">
              Available for entry-level network engineering, technical support and web development
              roles. The fastest way to reach me is email or a phone call.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: <Mail className="h-4 w-4" />,
                  label: "abhaysinghalm333@gmail.com",
                  href: "mailto:abhaysinghalm333@gmail.com",
                },
                {
                  icon: <Phone className="h-4 w-4" />,
                  label: "+91-8882315761",
                  href: "tel:+918882315761",
                },
                {
                  icon: <Linkedin className="h-4 w-4" />,
                  label: "LinkedIn profile",
                  href: "https://www.linkedin.com/in/abhay-bisht-14a170248/",
                },
              ].map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="card-elevated flex min-w-0 items-center gap-3 p-5 font-mono text-xs"
                >
                  <span className="shrink-0 text-primary">{c.icon}</span>
                  <span className="truncate">{c.label}</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground" />
                </a>
              ))}
            </div>
            <a
              href={resumePdf}
              download="Abhay_Bisht_Resume.pdf"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:text-sm"
            >
              <Download className="h-4 w-4" /> Download my resume
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <p className="mx-auto max-w-6xl px-4 font-mono text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Abhay Bisht — Faridabad, India
        </p>
      </footer>
    </div>
  );
}

function Section({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="mb-8 flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
            {icon}
          </span>
          <h2 className="truncate text-xl font-bold sm:text-2xl">{title}</h2>
          <span className="ml-2 hidden h-px flex-1 bg-border sm:block" />
        </div>
        {children}
      </div>
    </section>
  );
}
