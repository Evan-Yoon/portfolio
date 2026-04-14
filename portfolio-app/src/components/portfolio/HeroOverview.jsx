import React, { useState } from 'react'

function LabeledLink({ label, display, href }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-[72px] shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5d78bf]">
        {label}
      </div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-[13px] leading-6 text-[#1c274a] underline decoration-[#c7d4f5] underline-offset-4"
      >
        {display}
      </a>
    </div>
  )
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-[72px] shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5d78bf]">
        {label}
      </div>
      <div className="text-[13px] leading-6 text-[#1c274a]">{value}</div>
    </div>
  )
}

function SectionList({ title, items }) {
  return (
    <div className="border-t border-[#dbe3f1] pt-4">
      <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2f61e7]">
        {title}
      </div>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={`${title}-${idx}`} className="grid grid-cols-[10px_1fr] gap-3">
            <div className="pt-[8px]">
              <div className="h-[8px] w-[8px] rounded-full bg-[#7e8fb7]" />
            </div>
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <div className="text-[14px] font-semibold leading-6 text-[#152243]">{item.main}</div>
                <div className="shrink-0 text-[12px] leading-5 text-[#5f6f95]">{item.meta}</div>
              </div>
              {item.sub ? <div className="mt-1 text-[13px] leading-6 text-[#53627f]">{item.sub}</div> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HeroOverview({ hero, profile }) {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="portfolio-hero relative min-h-[1123px] bg-white">
      <div className="h-[6px] w-full bg-[linear-gradient(90deg,#2f61e7_0%,#5f87ea_40%,#9b5de5_70%,#f27b2f_100%)]" />

      <div className="px-[48px] py-[42px]">
        <div className="grid grid-cols-[250px_1fr] gap-10 border-b border-[#dbe3f1] pb-8">
          <div className="flex flex-col items-center">
            {!imgError ? (
              <img
                src={profile.photo}
                alt={profile.name}
                onError={() => setImgError(true)}
                className="h-[150px] w-[150px] rounded-full border-[6px] border-white object-cover shadow-[0_14px_34px_rgba(15,23,42,0.12)]"
              />
            ) : (
              <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full border-[6px] border-white bg-[#edf2fb] text-[42px] font-bold text-[#2f61e7] shadow-[0_14px_34px_rgba(15,23,42,0.12)]">
                JY
              </div>
            )}

            <div className="mt-5 text-center">
              <h1 className="text-[32px] font-extrabold tracking-[-0.04em] text-[#101938]">{profile.name}</h1>
              <div className="mt-2 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#2f61e7]">
                {profile.role}
              </div>
            </div>
          </div>

          <div className="pt-1">
            <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#5d78bf]">
              {hero.aboutTitle}
            </div>

            <div className="mt-4 space-y-2 text-[16px] leading-8 text-[#1c274a]">
              {hero.aboutLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-6 rounded-[20px] border border-[#d9e3f8] bg-[#f5f8ff] px-7 py-6">
              <p className="text-[19px] leading-[1.75] tracking-[-0.02em] text-[#14224a]">
                “{profile.tagline}”
              </p>
            </div>

            <div className="mt-6 space-y-2">
              {hero.summaryPoints.map((point) => (
                <div key={point} className="flex gap-3 text-[14px] leading-7 text-[#1c274a]">
                  <span className="mt-[10px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#2f61e7]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-3 border-t border-[#dbe3f1] pt-5">
              <div className="space-y-2">
                <InfoRow label="Email" value={profile.email} />
                <InfoRow label="Phone" value={profile.phone} />
                <InfoRow label="Location" value={profile.location} />
              </div>

              <div className="space-y-2">
                <LabeledLink
                  label={profile.blogLabel}
                  display={profile.blogDisplay}
                  href={profile.blogUrl}
                />
                <LabeledLink
                  label={profile.githubLabel}
                  display={profile.githubDisplay}
                  href={profile.githubUrl}
                />
                <LabeledLink
                  label={profile.linkedinLabel}
                  display={profile.linkedinDisplay}
                  href={profile.linkedinUrl}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-10 gap-y-8">
          {hero.sections.map((section) => (
            <SectionList key={section.title} title={section.title} items={section.items} />
          ))}
        </div>
      </div>
    </section>
  )
}