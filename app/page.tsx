"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type CardImageProps = {
  src: string;
  alt: string;
  className?: string;
};
type ToolKind = "frontend" | "backend" | "data";
type ToolChip = {
  name: string;
  kind: ToolKind;
};

function CardImage({ src, alt, className = "" }: CardImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={1000}
      className={className}
      unoptimized
    />
  );
}

function ArrowLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex w-fit items-center gap-2 text-[15px] font-medium text-[#ff4d00] transition-all cursor-pointer hover:gap-3"
    >
      <span>{label}</span>
      <span aria-hidden="true">→</span>
    </a>
  );
}

function CalendarIconBlack() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-black" aria-hidden="true" fill="currentColor">
      <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v2H2V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1Z" />
      <path d="M2 11h20v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8Z" />
    </svg>
  );
}

function TrophyIconBlack() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-black" aria-hidden="true" fill="currentColor">
      <path d="M6 3a1 1 0 0 0-1 1v2a5 5 0 0 0 5 5h.17A5.98 5.98 0 0 1 9 8V4a1 1 0 0 0-1-1H6Z" />
      <path d="M18 3a1 1 0 0 1 1 1v2a5 5 0 0 1-5 5h-.17A5.98 5.98 0 0 0 15 8V4a1 1 0 0 1 1-1h2Z" />
      <path d="M10 3h4v5a4 4 0 1 1-8 0V4a1 1 0 0 1 1-1h3Z" />
      <path d="M12 13a6.97 6.97 0 0 1-2-.29V16h4v-3.29c-.64.19-1.31.29-2 .29Z" />
      <path d="M8 18a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-2v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H9a1 1 0 0 1-1-1Z" />
    </svg>
  );
}

function ToolkitCategoryIcon({ type }: { type: "languages" | "data" | "frameworks" }) {
  if (type === "languages") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-blue-600" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 8 4 12l4 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m16 8 4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m13 6-2 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "data") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-emerald-600" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />
        <path d="M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-violet-600" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="5" rx="2" />
      <rect x="13" y="10" width="8" height="11" rx="2" />
      <rect x="3" y="13" width="8" height="8" rx="2" />
    </svg>
  );
}

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [time, setTime] = useState("");
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(now);

      setTime(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const topRowTools = useMemo(
    (): ToolChip[] => [
      { name: "Node.js", kind: "backend" },
      { name: "React", kind: "frontend" },
      { name: "Python", kind: "backend" },
      { name: "SQL", kind: "data" },
      { name: "JavaScript", kind: "frontend" },
      { name: "Snowflake", kind: "data" },
      { name: "Docker", kind: "backend" },
    ],
    [],
  );
  const bottomRowTools = useMemo(
    (): ToolChip[] => [
      { name: "Linux", kind: "backend" },
      { name: "Java", kind: "backend" },
      { name: "Nextjs", kind: "frontend" },
      { name: "Convex", kind: "backend" },
      { name: "TypeScript", kind: "frontend" },
      { name: "DataBricks", kind: "data" },
      { name: "dbt", kind: "data" },
    ],
    [],
  );
  const mobileTools = useMemo(() => [...topRowTools, ...bottomRowTools], [topRowTools, bottomRowTools]);

  const education = useMemo(
    () => [
      {
        university: "Depaul University",
        degree: "Master of Science in Computer Science",
        dates: "2025 - 2027",
        gpa: "3.9/4.0 GPA",
        imageSrc:
          "/depaul_logo.png",
      },
      {
        university: "Oral Roberts University",
        degree: "Bachelor of Science in Computer Science",
        dates: "2022 - 2025",
        gpa: "3.82/4.0 GPA",
        imageSrc:
          "/ORU_logo.png",
      },
    ],
    [],
  );

  const projects = useMemo(
    () => [
      {
        title: "AI-powered Inventory Tracker",
        description:
          "An AI-powered inventory management application for tracking product levels and enabling intelligent, natural language-driven inventory operations.",
        imageSrc:
          "/inventory-image.png",
        href: "https://github.com/olamideiyelolu/AI-Inventory-Tracker",
      },
      {
        title: "Citi-Bike ELT Pipeline",
        description:
          "A scalable end-to-end data platform for transforming large-scale datasets on NYC Citibike into reliable analytics and insights.",
        imageSrc:
          "/citibike.png",
        href: "https://github.com/olamideiyelolu/CitiBike-ELT-Pipeline",
      },
      {
        title: "Finals Scheduler",
        description:
          "An intelligent web application for organizing exam schedules and generating personalized study plans to enhance student success.",
        imageSrc:
          "/scheduler.png",
        href: "https://github.com/olamideiyelolu/Finals-Scheduler",
      },
      {
        title: "EPL Pipeline",
        description:
          "An automated data pipeline for collecting, validating, and transforming player metrics into analytics-ready datasets for streamlined analysis.",
        imageSrc:
          "/epl.png",
        href: "https://github.com/olamideiyelolu/EPL-pipeline",
      },
    ],
    [],
  );

  const experience = useMemo(
    () => [
      {
        role: "Computer Science Researcher",
        company: "Oral Roberts University",
        dates: "2024 - 2024",
        location: "Tulsa, OK",
        description:
          "Designing structured research datasets and performance metrics to drive data-informed decisions for AI-powered drone platform selection.",
        logoSrc:
          "/ORU_logo.png",
        href: "https://www.linkedin.com/in/olamide-iyelolu/",
      },
      {
        role: "Technical Support Specialist",
        company: "Oral Roberts University",
        dates: "2020 - 2022",
        location: "Tulsa, OK",
        description:
          "Delivering responsive technical support and system optimization to improve reliability, user experience, and technology adoption.",
        logoSrc:
          "/ORU_logo.png",
        href: "https://www.linkedin.com/in/olamide-iyelolu/",
      },
    ],
    [],
  );

  const toolCategories = useMemo(
    () => [
      {
        title: "Languages",
        iconType: "languages" as const,
        tools: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "Java", "C++"],
      },
      {
        title: "Data Tools",
        iconType: "data" as const,
        tools: ["Snowflake", "dbt", "DataBricks", "Convex", "Pandas", "PostgreSQL", "Tableau"],
      },
      {
        title: "Frameworks",
        iconType: "frameworks" as const,
        tools: ["React", "Next.js", "Linux", "Node.js", "Express", "Docker", "Git"],
      },
    ],
    [],
  );

  const getToolToneClass = (kind: ToolKind) => {
    if (kind === "data") return "bg-[#ddddda] hover:bg-[#d3d3cf] border-[#ccccc7]";
    return "bg-[#f4f4f2] hover:bg-[#ececea] border-[#e3e3df]";
  };

  const renderToolBand = (tools: ToolChip[], animationClass: string) => (
    <div className="relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-white to-transparent md:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-white to-transparent md:w-16" />
      <div className={`${animationClass} flex w-fit gap-2.5 md:gap-4`}>
        {[...tools, ...tools, ...tools].map((tool, idx) => (
          <div
            key={`${tool.name}-${idx}`}
            onMouseEnter={() => setHoveredTool(tool.name)}
            onMouseLeave={() => setHoveredTool(null)}
            className={`flex-shrink-0 cursor-default rounded-full border px-4 py-2 text-[#1a1a1a] shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-[1px] md:px-8 md:py-3 ${
              getToolToneClass(tool.kind)
            } ${hoveredTool && hoveredTool !== tool.name ? "opacity-80" : "opacity-100"}`}
          >
            <p className="whitespace-nowrap text-[15px] font-medium md:text-[16px]">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen w-full bg-white text-[#1a1a1a] selection:bg-[#1a1a1a] selection:text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 pb-0 pt-6 sm:px-6 md:px-12 md:pt-8">
        <nav className="mb-8 flex items-center justify-between gap-3 md:mb-16">
          <div className="flex items-center gap-4">
            <div className="h-[62px] w-[62px] overflow-hidden rounded-full shadow-sm ring-2 ring-white/60 sm:h-[70px] sm:w-[70px] md:h-[90px] md:w-[90px]">
              <CardImage
                src="/picture.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-sm font-medium tracking-tight sm:text-base">Olamide</span>
          </div>

          <div className="flex items-center gap-4 md:gap-12">
            <div className="hidden items-center gap-6 md:flex md:gap-10">
              {[
                { href: "#experience", label: "Experience" },
                { href: "#projects", label: "Projects" },
                { href: "#education", label: "Education" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative text-lg tracking-tight transition-colors hover:text-[#4a4a4a]"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#1a1a1a] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {time ? (
              <div className="flex items-baseline whitespace-nowrap text-[13px] font-medium leading-none sm:text-[15px]">
                <span className="text-[16px] sm:text-[18px]">{time}</span>
                <sup className="relative -top-1 ml-1 text-[10px] font-semibold">CST</sup>
              </div>
            ) : null}
          </div>
        </nav>

        <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center px-1 pb-16 pt-14 text-center sm:pb-20 sm:pt-16 md:px-12 md:pb-32 md:pt-32">
          <h1 className="mb-5 text-[36px] leading-[1.1] font-light tracking-[-0.04em] sm:mb-6 sm:text-[48px] md:mb-8 md:text-[72px] md:leading-[1.05] lg:text-[96px]">
            Hi, I am Olamide
          </h1>

          <p className="mb-9 max-w-[760px] text-[16px] leading-[1.6] font-light tracking-[-0.01em] text-[#4a4a4a] sm:text-[18px] md:mb-12 md:text-[24px]">
            I&apos;m a student and engineer in Chicago and I care about thoughtful innovation, steady growth, and doing
            the work well. Ideas matter, but finishing them matters more.
          </p>

          <button
            type="button"
            onClick={() => setIsResumeOpen(true)}
            className="cursor-pointer rounded-full bg-[#1a1a1a] px-7 py-3 text-[15px] font-medium text-white shadow-md transition-colors hover:bg-[#333333] hover:shadow-lg sm:px-8 sm:py-3.5 sm:text-[16px]"
          >
            View my resume
          </button>
        </section>

        <section id="education" className="mb-20 mt-20 md:mb-32 md:mt-32">
          <h2 className="mb-8 text-center text-[32px] font-medium tracking-[-0.01em] md:mb-10 md:text-[38px]">Education</h2>

          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2">
            {education.map((item) => (
              <article key={item.university} className="flex w-full flex-col items-center">
                <div className="group relative mb-3 aspect-[16/9] w-full overflow-hidden rounded-sm border border-black/5 bg-[#f3f4f6] shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)] sm:w-[90%] md:aspect-[21/9] md:w-[80%]">
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <CardImage
                    src={item.imageSrc}
                    alt={item.university}
                    className={`h-full w-full object-contain opacity-95 transition duration-700 ease-out group-hover:opacity-100 ${
                      item.university === "Depaul University"
                        ? "scale-[1.3] p-1 group-hover:scale-[1.5]"
                        : item.university === "Oral Roberts University"
                          ? "scale-[0.80] p-2 group-hover:scale-[0.85]"
                          : "p-2 group-hover:scale-[1.02]"
                    }`}
                  />
                </div>

                <div className="w-full space-y-2 text-left sm:w-[90%] md:w-[80%]">
                  <h3 className="text-[24px] leading-tight font-medium tracking-tight sm:text-[28px] md:text-[32px]">{item.university}</h3>
                  <p className="text-[15px] font-light text-[#4a4a4a] sm:text-[16px] md:text-[18px]">{item.degree}</p>

                  <div className="flex flex-wrap justify-start gap-3 pt-1">
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#F4F4F2] px-3 py-1.5 text-[14px] font-semibold tracking-wide uppercase text-[#444]">
                      <CalendarIconBlack />
                      {item.dates}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#F4F4F2] px-3 py-1.5 text-[14px] font-medium tracking-wide uppercase text-[#444]">
                      <TrophyIconBlack />
                      {item.gpa}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-20 md:mb-32">
          <h2 className="mb-8 text-center text-[32px] font-medium tracking-[-0.01em] md:mb-10 md:text-[38px]">Projects</h2>

          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-y-16">
            {projects.map((item) => (
              <article key={item.title} className="flex flex-col items-center">
                <div className="group relative mb-6 aspect-[2.4/1] w-full overflow-hidden rounded-sm bg-gray-100 sm:w-[90%] md:w-[80%]">
                  <div className="absolute inset-0 z-10 bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <CardImage
                    src={item.imageSrc}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="w-full space-y-3 text-left sm:w-[90%] md:w-[80%]">
                  <h3 className="text-[22px] leading-tight font-medium tracking-tight sm:text-[24px] md:text-[28px]">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed font-light text-[#4a4a4a] sm:text-[16px]">{item.description}</p>
                  <ArrowLink label="View this project" href={item.href} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="mb-20 md:mb-32">
          <h2 className="mb-8 text-center text-[32px] font-medium tracking-[-0.01em] md:mb-10 md:text-[38px]">Experience</h2>

          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-y-16">
            {experience.map((item) => (
              <article key={item.role} className="mx-auto flex w-full items-start gap-4 sm:w-[90%] md:w-[80%] md:gap-6">
                <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm md:h-16 md:w-16">
                  <CardImage src={item.logoSrc} alt={item.company} className="h-full w-full object-contain p-1" />
                </div>

                <div className="flex flex-grow flex-col space-y-2">
                  <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
                    <h3 className="text-[20px] leading-tight font-medium tracking-tight md:text-[22px]">{item.role}</h3>
                    <span className="hidden text-gray-400 md:inline">•</span>
                    <span className="text-[16px] font-medium text-[#4a4a4a] md:text-[18px]">{item.company}</span>
                  </div>

                  <p className="mb-1 flex flex-wrap items-center gap-2 text-[14px] text-gray-500">
                    <CalendarIconBlack />
                    <span>{item.dates}</span>
                    <span className="h-1 w-1 rounded-full bg-gray-300" />
                    <span>{item.location}</span>
                  </p>

                  <p className="text-[15px] leading-relaxed font-light text-[#4a4a4a] md:text-[16px]">{item.description}</p>
                  <ArrowLink label="View experience" href={item.href} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20 md:mb-32">
          <h2 className="mb-8 text-center text-[30px] font-semibold tracking-[-0.01em] md:mb-10 md:text-[36px]">Tools</h2>

          <div className="space-y-4">
            <div className="md:hidden">{renderToolBand(mobileTools, "marquee-left")}</div>
            <div className="hidden md:block">{renderToolBand(topRowTools, "marquee-left")}</div>
            <div className="hidden md:block">{renderToolBand(bottomRowTools, "marquee-right")}</div>
          </div>

          <div className="mt-6 flex justify-start pl-2">
            <button
              type="button"
              onClick={() => setIsToolsOpen(true)}
              className="inline-flex cursor-pointer items-center gap-2 bg-transparent p-0 text-[15px] font-medium text-[#ff4d00] transition-all hover:gap-3"
            >
              <span>View all tools</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>

        <section>
          <footer className="relative left-1/2 w-screen -translate-x-1/2 bg-black px-4 pb-16 pt-16 text-center text-white sm:px-6 md:pb-48 md:pt-24">
            <h2 className="mb-10 text-[22px] font-medium sm:text-[25px]">Don&apos;t be shy, reach out to me!</h2>

            <div className="flex justify-center gap-4 sm:gap-6">
              {[
                {
                  href: "https://www.linkedin.com/in/olamide-iyelolu/",
                  label: "LinkedIn",
                  iconSrc: "/contact/linkedin.svg",
                  glowClass: "hover:shadow-[0_0_22px_rgba(10,102,194,0.55)]",
                },
                {
                  href: "https://github.com/olamideiyelolu",
                  label: "GitHub",
                  iconSrc: "/contact/github.svg",
                  glowClass: "hover:shadow-[0_0_22px_rgba(128,128,128,0.45)]",
                },
                {
                  href: "mailto:olamideiyelolu@gmail.com",
                  label: "Mail",
                  iconSrc: "/contact/mail.webp",
                  glowClass: "hover:shadow-[0_0_22px_rgba(234,67,53,0.5)]",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={`flex h-[54px] w-[54px] items-center justify-center rounded-[12px] bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 sm:h-[60px] sm:w-[60px] ${item.glowClass}`}
                >
                  <Image
                    src={item.iconSrc}
                    alt={item.label}
                    width={60}
                    height={60}
                    className="h-full w-full object-contain p-2"
                  />
                </a>
              ))}
            </div>
          </footer>
        </section>
      </div>

      {isResumeOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 sm:p-4 backdrop-blur-md"
          onClick={() => setIsResumeOpen(false)}
        >
          <div
            className="relative h-[74vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:h-auto md:aspect-video"
            onClick={(event) => event.stopPropagation()}
          >
            <CardImage
              src="/pill.png"
              alt="Choose your path"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <a
              href="/Olamide_Iyelolu_rèsume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-[18%] left-[8%] flex h-[44px] w-[120px] items-center justify-center overflow-hidden rounded-xl border border-blue-400/50 bg-blue-500/20 text-sm font-bold tracking-wider text-blue-100 backdrop-blur-sm transition-all hover:scale-105 sm:bottom-[22%] sm:left-[12%] sm:h-[50px] sm:w-[140px] sm:text-lg md:bottom-[25%] md:left-[20%] md:h-[70px] md:w-[220px] md:text-2xl"
            >
              SOFTWARE
            </a>

            <a
              href="/Olamide_Iyelolu_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-[18%] right-[8%] flex h-[44px] w-[120px] items-center justify-center overflow-hidden rounded-xl border border-red-400/50 bg-red-500/20 text-sm font-bold tracking-wider text-red-100 backdrop-blur-sm transition-all hover:scale-105 sm:bottom-[22%] sm:right-[12%] sm:h-[50px] sm:w-[140px] sm:text-lg md:bottom-[25%] md:right-[20%] md:h-[70px] md:w-[220px] md:text-2xl"
            >
              DATA
            </a>

            <button
              type="button"
              onClick={() => setIsResumeOpen(false)}
              className="absolute right-3 top-3 rounded-full bg-black/20 p-2 text-white/70 backdrop-blur-sm transition-colors hover:bg-black/40 hover:text-white sm:right-4 sm:top-4 md:right-6 md:top-6"
              aria-label="Close resume modal"
            >
              ✕
            </button>
          </div>
        </div>
      ) : null}

      {isToolsOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-3 sm:p-4 backdrop-blur-sm"
          onClick={() => setIsToolsOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="max-h-[calc(90vh-64px)] overflow-y-auto p-5 sm:p-8 md:p-12">
              <div className="mb-6 flex items-start justify-between sm:mb-8">
                <h2 className="text-[26px] font-semibold sm:text-3xl">My Toolkit</h2>
                <button
                  type="button"
                  onClick={() => setIsToolsOpen(false)}
                  className="rounded-full p-2 text-[#1a1a1a]/50 transition-colors hover:bg-gray-100 hover:text-[#1a1a1a]"
                  aria-label="Close tools modal"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-4 sm:gap-6">
                {toolCategories.map((category) => (
                  <div key={category.title} className="rounded-2xl bg-gray-50 p-4 sm:p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-lg bg-white p-2 shadow-sm">
                        <ToolkitCategoryIcon type={category.iconType} />
                      </div>
                      <h3 className="text-xl font-medium">{category.title}</h3>
                    </div>

                    <ul className="flex flex-wrap gap-3">
                      {category.tools.map((tool) => (
                        <li
                          key={tool}
                          className="rounded-xl border border-gray-100 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm transition-colors hover:border-gray-300"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end border-t border-gray-100 bg-[#f9f9f9] px-8 py-4">
              <button
                type="button"
                onClick={() => setIsToolsOpen(false)}
                className="text-sm font-medium text-gray-500 transition-colors hover:text-[#1a1a1a]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
