import React from 'react'

const ACCENT = '#1f4fd6'
const SOFT = '#eef3ff'
const BORDER = '#d7def2'

function OverviewBlock({ title, lines }) {
  return (
    <article
      style={{
        background: '#ffffff',
        border: `1px solid ${BORDER}`,
        borderRadius: '20px',
        padding: '22px 22px 24px',
        minHeight: '180px',
        boxShadow: '0 18px 44px rgba(15, 23, 42, 0.06)',
      }}
    >
      <p
        style={{
          fontSize: '0.62rem',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: ACCENT,
          marginBottom: '16px',
        }}
      >
        {title}
      </p>
      <div style={{ display: 'grid', gap: '10px' }}>
        {lines.map((line) => (
          <p
            key={line}
            style={{
              fontSize: '0.98rem',
              lineHeight: 1.45,
              color: '#1e293b',
              margin: 0,
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </article>
  )
}

function ContactItem({ value, href }) {
  const content = (
    <span
      style={{
        fontSize: '0.82rem',
        color: '#475569',
        lineHeight: 1.3,
      }}
    >
      {value}
    </span>
  )

  if (!href) return content

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      {content}
    </a>
  )
}

export default function HeroOverview({ profile }) {
  const {
    name,
    title,
    email,
    phone,
    github,
    githubDisplay,
    homepage,
    homepageDisplay,
    location,
  } = profile

  const blocks = [
    {
      title: 'Background',
      lines: [
        'HR and customer support turned builder.',
        'Now focused on applied AI and product delivery.',
        'Strong at reading both users and systems.',
      ],
    },
    {
      title: 'What I Do',
      lines: [
        'Turn messy problems into clear solution paths.',
        'Connect technical decisions to user outcomes.',
        'Build practical MVPs that prove value fast.',
      ],
    },
    {
      title: 'Strength',
      lines: [
        'Business context plus technical execution.',
        'Clear communication with technical and non-technical teams.',
        'Problem-first thinking over feature-first building.',
      ],
    },
  ]

  return (
    <header
      className="portfolio-hero"
      style={{
        background:
          'radial-gradient(circle at top left, #f6f9ff 0%, #ffffff 45%, #fbfcfe 100%)',
        display: 'flex',
        flexDirection: 'column',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          height: '6px',
          background: 'linear-gradient(90deg, #1f4fd6 0%, #4f7cff 55%, #b8caff 100%)',
          flexShrink: 0,
        }}
      />

      <div
        style={{
          padding: '44px 50px 34px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '52px',
          }}
        >
          <div
            style={{
              width: '88px',
              height: '8px',
              borderRadius: '999px',
              background: ACCENT,
            }}
          />

          <div style={{ display: 'grid', gap: '10px' }}>
            <h1
              style={{
                fontSize: '3.1rem',
                fontWeight: 800,
                letterSpacing: '-0.05em',
                lineHeight: 0.95,
                color: '#0f172a',
                margin: 0,
              }}
            >
              {name}
            </h1>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                margin: 0,
              }}
            >
              {title}
            </p>
          </div>

          <div
            style={{
              maxWidth: '540px',
              background: SOFT,
              border: `1px solid ${BORDER}`,
              borderRadius: '22px',
              padding: '22px 24px',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '1.2rem',
                lineHeight: 1.55,
                color: '#1e293b',
                whiteSpace: 'pre-line',
              }}
            >
              {'"I design solutions that not only work technically,\nbut solve real problems people actually face."'}
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '18px',
            marginBottom: 'auto',
          }}
        >
          {blocks.map((block) => (
            <OverviewBlock key={block.title} title={block.title} lines={block.lines} />
          ))}
        </div>

        <div
          style={{
            marginTop: '36px',
            paddingTop: '18px',
            borderTop: `1px solid ${BORDER}`,
            display: 'flex',
            flexWrap: 'wrap',
            columnGap: '18px',
            rowGap: '8px',
          }}
        >
          {email ? <ContactItem value={email} href={`mailto:${email}`} /> : null}
          {phone ? <ContactItem value={phone} /> : null}
          {homepageDisplay ? <ContactItem value={homepageDisplay} href={homepage} /> : null}
          {githubDisplay ? <ContactItem value={githubDisplay} href={github} /> : null}
          {location ? <ContactItem value={location} /> : null}
        </div>
      </div>
    </header>
  )
}
