import React from "react";

function Chip({ children, accent, soft }) {
  return (
    <span
      className="inline-flex rounded-full border px-3 py-1 text-[11px] font-medium"
      style={{
        color: accent,
        borderColor: `${accent}55`,
        background: soft,
      }}
    >
      {children}
    </span>
  );
}

function SectionLabel({ children, accent }) {
  return (
    <div
      className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
      style={{ color: accent }}
    >
      {children}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2 text-[14px] leading-6 text-[#1d2848]">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#1d2848]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectPage({ project, index }) {
  return (
    <section className="project-page relative min-h-[1123px] bg-white">
      <div className="h-[6px] w-full" style={{ background: project.accent }} />

      <div className="px-[52px] py-[42px]">
        <div className="grid grid-cols-[1fr_auto] items-start gap-8">
          <div>
            <div
              className="mb-4 inline-flex rounded-full border px-3 py-[7px] text-[11px] font-semibold uppercase tracking-[0.2em]"
              style={{
                color: project.accent,
                borderColor: `${project.accent}44`,
                background: project.soft,
              }}
            >
              {project.indexLabel}
            </div>

            <h2 className="text-[38px] font-extrabold tracking-[-0.04em] text-[#101938]">
              {project.title}
            </h2>
            <div
              className="mt-2 text-[15px] font-medium tracking-[0.01em]"
              style={{ color: project.accent }}
            >
              {project.subtitle}
            </div>
          </div>

          <div className="pt-3 text-right">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6b7aa8]">
              Category
            </div>
            <div className="mt-2 text-[13px] leading-6 text-[#1d2848]">
              {project.category}
            </div>
          </div>
        </div>

        <div
          className="mt-7 rounded-[18px] border px-6 py-5"
          style={{
            borderColor: `${project.accent}33`,
            background: project.soft,
          }}
        >
          <p className="text-[19px] leading-8 tracking-[-0.02em] text-[#13224a]">
            {project.opening}
          </p>
        </div>

        <div className="mt-7 grid grid-cols-[0.96fr_1.04fr] gap-6">
          <div
            className="rounded-[20px] border p-7"
            style={{
              borderColor: `${project.accent}22`,
              background: project.softStrong,
            }}
          >
            <SectionLabel accent={project.accent}>The Problem</SectionLabel>
            <p className="text-[16px] leading-8 text-[#1d2848]">
              {project.problem}
            </p>
          </div>

          <div
            className="rounded-[20px] border p-7"
            style={{
              borderColor: `${project.accent}22`,
              background: project.soft,
            }}
          >
            <SectionLabel accent={project.accent}>The Solution</SectionLabel>
            <p className="text-[15px] leading-7 text-[#1d2848]">
              {project.solution}
            </p>

            <div className="mt-5">
              <SectionLabel accent={project.accent}>
                Key Highlights
              </SectionLabel>
              <BulletList items={project.highlights} />
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-[1.05fr_0.95fr] gap-6">
          <div className="rounded-[20px] border border-[#e4e9f3] bg-white p-7">
            <SectionLabel accent={project.accent}>My Contribution</SectionLabel>
            <BulletList items={project.contribution} />
          </div>

          <div className="grid grid-rows-[auto_1fr] gap-6">
            <div className="rounded-[20px] border border-[#e4e9f3] bg-white p-7">
              <SectionLabel accent={project.accent}>Tech Stack</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <Chip key={item} accent={project.accent} soft={project.soft}>
                    {item}
                  </Chip>
                ))}
              </div>
            </div>

            <div
              className="rounded-[20px] border p-7"
              style={{
                borderColor: `${project.accent}28`,
                background: project.soft,
              }}
            >
              <SectionLabel accent={project.accent}>
                Business Impact
              </SectionLabel>
              <p className="text-[15px] leading-7 text-[#1d2848]">
                {project.impact}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-[#e5e9f2] pt-5 text-[12px] text-[#6d799b]">
          <div>{project.indexLabel}</div>
          <div>
            {index === 0
              ? "Accessibility case"
              : index === 1
                ? "B2B SaaS case"
                : index === 2
                  ? "Recommendation case"
                  : "Business logic case"}
          </div>
        </div>
      </div>
    </section>
  );
}
