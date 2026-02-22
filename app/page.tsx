"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type CardImageProps = {
  src: string;
  alt: string;
  className?: string;
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

function ArrowLink({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="inline-flex w-fit items-center gap-2 text-[15px] font-medium text-[#ff4d00] transition-all cursor-pointer hover:gap-3"
    >
      <span>{label}</span>
      <span aria-hidden="true">→</span>
    </button>
  );
}

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [time, setTime] = useState("");

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
    () => ["React", "Python", "SQL", "JavaScript", "Snowflake"],
    [],
  );
  const bottomRowTools = useMemo(
    () => ["Nextjs", "Convex", "TypeScript", "DataBricks", "dbt"],
    [],
  );

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
        title: "Modern Web Dashboard",
        description:
          "A comprehensive dashboard for managing cloud resources and monitoring system performance in real-time.",
        imageSrc:
          "https://images.unsplash.com/photo-1756487564871-7ecc5a9c229f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      },
      {
        title: "Mobile App Interface",
        description:
          "User-centric mobile application design focusing on intuitive navigation and seamless user experience.",
        imageSrc:
          "https://images.unsplash.com/photo-1641862039942-5815d8f74938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      },
      {
        title: "Minimalist Portfolio",
        description:
          "Clean and elegant portfolio website template designed for creative professionals to showcase their work.",
        imageSrc:
          "https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      },
      {
        title: "Data Analytics Platform",
        description:
          "Advanced data visualization tool transforming complex datasets into actionable business insights.",
        imageSrc:
          "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      },
    ],
    [],
  );

  const experience = useMemo(
    () => [
      {
        role: "Software Engineer",
        company: "Tech Company",
        dates: "2022 - Present",
        location: "San Francisco, CA",
        description:
          "Building scalable solutions and innovative features for modern web applications.",
        logoSrc:
          "https://images.unsplash.com/photo-1517179465283-0221aea1d382?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
      },
      {
        role: "Data Engineer",
        company: "Analytics Firm",
        dates: "2020 - 2022",
        location: "New York, NY",
        description:
          "Architecting data pipelines and analytics platforms for enterprise clients.",
        logoSrc:
          "https://images.unsplash.com/photo-1633796212691-0cfba2ab1dab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
      },
    ],
    [],
  );

  const toolCategories = useMemo(
    () => [
      {
        title: "Languages",
        icon: "</>",
        tools: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "Java", "C++"],
      },
      {
        title: "Data Tools",
        icon: "DB",
        tools: ["Snowflake", "dbt", "DataBricks", "Convex", "Pandas", "PostgreSQL", "Tableau"],
      },
      {
        title: "Frameworks",
        icon: "UI",
        tools: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "Django", "Flask"],
      },
    ],
    [],
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

      <div className="relative mx-auto max-w-[1400px] px-6 pb-0 pt-8 md:px-12">
        <nav className="mb-8 flex items-center justify-between md:mb-16">
          <div className="flex items-center gap-4">
            <div className="h-[70px] w-[70px] overflow-hidden rounded-full shadow-sm ring-2 ring-white/60 md:h-[90px] md:w-[90px]">
              <CardImage
                src="/picture.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-base font-medium tracking-tight">Olamide</span>
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
              <div className="flex items-baseline whitespace-nowrap text-[15px] font-medium leading-none">
                <span className="text-[18px]">{time}</span>
                <sup className="relative -top-1 ml-1 text-[10px] font-semibold">CST</sup>
              </div>
            ) : null}
          </div>
        </nav>

        <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center px-6 pb-20 pt-20 text-center md:px-12 md:pb-32 md:pt-32">
          <h1 className="mb-6 text-[48px] leading-[1.1] font-light tracking-[-0.04em] md:mb-8 md:text-[72px] md:leading-[1.05] lg:text-[96px]">
            Hi, I am Olamide
          </h1>

          <p className="mb-10 max-w-[760px] text-[18px] leading-[1.6] font-light tracking-[-0.01em] text-[#4a4a4a] md:mb-12 md:text-[24px]">
            I&apos;m a student and engineer in Chicago and I care about thoughtful innovation, steady growth, and doing
            the work well. Ideas matter, but finishing them matters more.
          </p>

          <button
            type="button"
            onClick={() => setIsResumeOpen(true)}
            className="cursor-pointer rounded-full bg-[#1a1a1a] px-8 py-3.5 text-[16px] font-medium text-white shadow-md transition-colors hover:bg-[#333333] hover:shadow-lg"
          >
            View my resume
          </button>
        </section>

        <section id="education" className="mb-32 mt-32">
          <h2 className="mb-10 text-center text-[38px] font-medium tracking-[-0.01em]">Education</h2>

          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2">
            {education.map((item) => (
              <article key={item.university} className="flex w-full flex-col items-center">
                <div className="group relative mb-3 aspect-[16/9] w-[80%] overflow-hidden rounded-sm border border-black/5 bg-[#f3f4f6] shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)] md:aspect-[21/9]">
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

                <div className="w-[80%] space-y-2 text-left">
                  <h3 className="text-[28px] leading-tight font-medium tracking-tight md:text-[32px]">{item.university}</h3>
                  <p className="text-[16px] font-light text-[#4a4a4a] md:text-[18px]">{item.degree}</p>

                  <div className="flex flex-wrap justify-start gap-3 pt-1">
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#F4F4F2] px-3 py-1.5 text-[14px] font-semibold tracking-wide uppercase text-[#444]">
                      <span aria-hidden="true">📅</span>
                      {item.dates}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#F4F4F2] px-3 py-1.5 text-[14px] font-medium tracking-wide uppercase text-[#444]">
                      <span aria-hidden="true">🏆</span>
                      {item.gpa}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-32">
          <h2 className="mb-10 text-center text-[38px] font-medium tracking-[-0.01em]">Projects</h2>

          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-y-16">
            {projects.map((item) => (
              <article key={item.title} className="flex flex-col items-center">
                <div className="group relative mb-6 aspect-[2.4/1] w-[80%] overflow-hidden rounded-sm bg-gray-100">
                  <div className="absolute inset-0 z-10 bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <CardImage
                    src={item.imageSrc}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="w-[80%] space-y-3 text-left">
                  <h3 className="text-[24px] leading-tight font-medium tracking-tight md:text-[28px]">{item.title}</h3>
                  <p className="text-[16px] leading-relaxed font-light text-[#4a4a4a]">{item.description}</p>
                  <ArrowLink label="View this project" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="mb-32">
          <h2 className="mb-10 text-center text-[38px] font-medium tracking-[-0.01em]">Experience</h2>

          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-y-16">
            {experience.map((item) => (
              <article key={item.role} className="mx-auto flex w-[80%] items-start gap-4 md:gap-6">
                <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm md:h-16 md:w-16">
                  <CardImage src={item.logoSrc} alt={item.company} className="h-full w-full object-cover" />
                </div>

                <div className="flex flex-grow flex-col space-y-2">
                  <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
                    <h3 className="text-[20px] leading-tight font-medium tracking-tight md:text-[22px]">{item.role}</h3>
                    <span className="hidden text-gray-400 md:inline">•</span>
                    <span className="text-[16px] font-medium text-[#4a4a4a] md:text-[18px]">{item.company}</span>
                  </div>

                  <p className="mb-1 flex items-center gap-2 text-[14px] text-gray-500">
                    <span>{item.dates}</span>
                    <span className="h-1 w-1 rounded-full bg-gray-300" />
                    <span>{item.location}</span>
                  </p>

                  <p className="text-[15px] leading-relaxed font-light text-[#4a4a4a] md:text-[16px]">{item.description}</p>
                  <ArrowLink label="View experience" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <h2 className="mb-10 text-center text-[36px] font-semibold tracking-[-0.01em]">Tools</h2>

          <div className="space-y-4">
            <div className="overflow-hidden py-2">
              <div className="marquee-left flex w-fit gap-4">
                {[...topRowTools, ...topRowTools, ...topRowTools].map((tool, idx) => (
                  <div
                    key={`${tool}-${idx}`}
                    className="flex-shrink-0 cursor-default rounded-full border border-[rgba(139,117,95,0.12)] bg-[rgba(255,255,255,0.6)] px-8 py-3 shadow-sm backdrop-blur-sm transition-colors hover:border-[rgba(139,117,95,0.2)]"
                  >
                    <p className="whitespace-nowrap text-[16px] font-medium">{tool}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden py-2">
              <div className="marquee-right flex w-fit gap-4">
                {[...bottomRowTools, ...bottomRowTools, ...bottomRowTools].map((tool, idx) => (
                  <div
                    key={`${tool}-${idx}`}
                    className="flex-shrink-0 cursor-default rounded-full border border-[rgba(139,117,95,0.12)] bg-[rgba(255,255,255,0.6)] px-8 py-3 shadow-sm backdrop-blur-sm transition-colors hover:border-[rgba(139,117,95,0.2)]"
                  >
                    <p className="whitespace-nowrap text-[16px] font-medium">{tool}</p>
                  </div>
                ))}
              </div>
            </div>
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
          <footer className="relative left-1/2 -mb-32 w-screen -translate-x-1/2 bg-black pb-48 pt-30 text-center text-white">
            <h2 className="-mt-20 mb-12 text-[25px] font-medium">Don&apos;t be shy, reach out to me!</h2>

            <div className="-mb-24 flex justify-center gap-6">
              {[
                { href: "#", label: "in" },
                { href: "#", label: "gh" },
                { href: "#", label: "@" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex h-[60px] w-[60px] items-center justify-center rounded-[12px] bg-white text-xl font-semibold text-[#1a1a1a] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </footer>
        </section>
      </div>

      {isResumeOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setIsResumeOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <CardImage
              src="/pill.png"
              alt="Choose your path"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <button
              type="button"
              className="absolute bottom-[25%] left-[15%] flex h-[50px] w-[140px] items-center justify-center overflow-hidden rounded-xl border border-blue-400/50 bg-blue-500/20 text-lg font-bold tracking-wider text-blue-100 backdrop-blur-sm transition-all hover:scale-105 md:left-[20%] md:h-[70px] md:w-[220px] md:text-2xl"
            >
              SOFTWARE
            </button>

            <button
              type="button"
              className="absolute bottom-[25%] right-[15%] flex h-[50px] w-[140px] items-center justify-center overflow-hidden rounded-xl border border-red-400/50 bg-red-500/20 text-lg font-bold tracking-wider text-red-100 backdrop-blur-sm transition-all hover:scale-105 md:right-[20%] md:h-[70px] md:w-[220px] md:text-2xl"
            >
              DATA
            </button>

            <button
              type="button"
              onClick={() => setIsResumeOpen(false)}
              className="absolute right-6 top-6 rounded-full bg-black/20 p-2 text-white/70 backdrop-blur-sm transition-colors hover:bg-black/40 hover:text-white"
              aria-label="Close resume modal"
            >
              ✕
            </button>
          </div>
        </div>
      ) : null}

      {isToolsOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setIsToolsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="p-8 md:p-12">
              <div className="mb-8 flex items-start justify-between">
                <h2 className="text-3xl font-semibold">My Toolkit</h2>
                <button
                  type="button"
                  onClick={() => setIsToolsOpen(false)}
                  className="rounded-full p-2 text-[#1a1a1a]/50 transition-colors hover:bg-gray-100 hover:text-[#1a1a1a]"
                  aria-label="Close tools modal"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {toolCategories.map((category) => (
                  <div key={category.title} className="rounded-2xl bg-gray-50 p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-lg bg-white p-2 text-sm font-bold text-gray-700 shadow-sm">{category.icon}</div>
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
