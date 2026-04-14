import React, { useState } from "react";

function LabeledLink({ label, display, href }) {
  return (
    <div className="flex items-start gap-3 border-b border-[#e7eaf1] py-2 last:border-b-0">
      <div className="w-[78px] shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5672bc]">
        {label}
      </div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-[13px] leading-6 text-[#1c274a] underline decoration-[#b8c6ef] underline-offset-4"
      >
        {display}
      </a>
    </div>
  );
}

function FactRow({ label, value }) {
  return (
    <div className="grid grid-cols-[84px_1fr] gap-3 border-b border-[#e7eaf1] py-2 last:border-b-0">
      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5672bc]">
        {label}
      </div>
      <div className="text-[13px] leading-6 text-[#1c274a]">{value}</div>
    </div>
  );
}

function SummaryBlock({ title, lines }) {
  return (
    <div className="rounded-[18px] border border-[#d9e1f2] bg-[#fbfcff] p-6">
      <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2f61e7]">
        {title}
      </div>
      <div className="space-y-3 text-[15px] leading-7 text-[#1d2848]">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default function HeroOverview({ hero, profile }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="portfolio-hero relative min-h-[1123px] bg-white">
      <div className="h-[6px] w-full bg-[linear-gradient(90deg,#2f61e7_0%,#5f87ea_40%,#9b5de5_70%,#f27b2f_100%)]" />

      <div className="px-[52px] py-[44px]">
        <div className="grid grid-cols-[240px_1fr] gap-10 border-b border-[#d9e1f2] pb-8">
          <div className="flex flex-col items-center">
            {!imgError ? (
              <img
                src={profile.photo}
                alt={profile.name}
                onError={() => setImgError(true)}
                className="h-[140px] w-[140px] rounded-full border-[6px] border-white object-cover shadow-[0_12px_30px_rgba(15,23,42,0.10)]"
              />
            ) : (
              <div className="flex h-[140px] w-[140px] items-center justify-center rounded-full border-[6px] border-white bg-[#edf2fb] text-[42px] font-bold text-[#2f61e7] shadow-[0_12px_30px_rgba(15,23,42,0.10)]">
                JY
              </div>
            )}

            <div className="mt-5 text-center">
              <h1 className="text-[34px] font-extrabold tracking-[-0.04em] text-[#0f1838]">
                {profile.name}
              </h1>
              <div className="mt-2 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#2f61e7]">
                {profile.role}
              </div>
              <div className="mt-5 w-full rounded-[14px] bg-[#f3f7ff] px-4 py-3 text-left text-[12px] leading-6 text-[#32405f]">
                <div className="font-semibold text-[#5974bb]">Location</div>
                <div>{profile.location}</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#5672bc]">
              {hero.aboutTitle}
            </div>

            <div className="mt-4 max-w-[560px] text-[17px] leading-8 text-[#1d2848]">
              {hero.aboutLines.map((line) => (
                <p key={line} className="mb-2 last:mb-0">
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-6 rounded-[20px] border border-[#d7e1f8] bg-[#f5f8ff] px-7 py-6">
              <p className="text-[19px] leading-[1.75] tracking-[-0.02em] text-[#14224a]">
                “{profile.tagline}”
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-1">
              {hero.quickFacts.map((fact) => (
                <FactRow
                  key={fact.label}
                  label={fact.label}
                  value={fact.value}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-5">
          {hero.blocks.map((block) => (
            <SummaryBlock
              key={block.title}
              title={block.title}
              lines={block.lines}
            />
          ))}
        </div>

        <div className="mt-9 border-t border-[#d9e1f2] pt-5">
          <div className="grid grid-cols-2 gap-x-10 gap-y-1">
            <div>
              <FactRow label="Email" value={profile.email} />
              <FactRow label="Phone" value={profile.phone} />
            </div>
            <div>
              <LabeledLink
                label={profile.portfolioLabel}
                display={profile.portfolioDisplay}
                href={profile.portfolioUrl}
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
    </section>
  );
}
