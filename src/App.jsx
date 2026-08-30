import './App.css'

const newsletterIssues = [
  {
    label: 'Issue 08',
    title: 'Community wins, service opportunities, and the stories behind them.',
    summary: 'A brief look at the people and projects moving Ward forward this month.',
  },
  {
    label: 'Issue 07',
    title: 'Thoughtful updates for families, leaders, and neighbors.',
    summary: 'Practical insights, upcoming events, and meaningful reminders from the ward.',
  },
  {
    label: 'Issue 06',
    title: 'Fresh perspectives on belonging, care, and connection.',
    summary: 'Stories and updates designed to help people feel informed and included.',
  },
]

const focusAreas = [
  'Announcements',
  'Service opportunities',
  'Family resources',
  'Ward events',
  'Leadership updates',
  'Good news and inspiration',
]

function App() {
  return (
    <div className="newsletter-shell">
      <header className="topbar">
        <div className="brand">Ward Newsletters</div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#latest-issue">Latest issue</a>
          <a href="#focus-areas">Focus areas</a>
          <a href="#subscribe">Subscribe</a>
        </nav>
      </header>

      <main className="page">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">A monthly brief from Ward</p>
            <h1>Helping neighbors feel informed, connected, and inspired.</h1>
            <p className="lede">
              Ward Newsletters brings together updates, stories, and opportunities in a
              clear and uplifting format for families and community members.
            </p>

            <div className="cta-row">
              <a className="primary" href="#latest-issue">
                Read the latest issue
              </a>
              <a className="secondary" href="#subscribe">
                Join the mailing list
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Newsletter summary">
            <p className="card-label">This month</p>
            <h2>Ward highlights</h2>
            <ul>
              <li>Leadership updates and announcements</li>
              <li>Service and outreach opportunities</li>
              <li>Encouraging stories from the community</li>
            </ul>
          </aside>
        </section>

        <section id="latest-issue" className="issue-panel">
          <div className="section-heading">
            <p className="eyebrow">Latest issue</p>
            <h2>Recent newsletters</h2>
          </div>

          <div className="issue-list">
            {newsletterIssues.map((issue) => (
              <article key={issue.label} className="issue-card">
                <span className="issue-tag">{issue.label}</span>
                <h3>{issue.title}</h3>
                <p>{issue.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="focus-areas" className="focus-panel">
          <div className="section-heading">
            <p className="eyebrow">What we share</p>
            <h2>Focus areas</h2>
          </div>

          <div className="chip-list" aria-label="Newsletter focus areas">
            {focusAreas.map((area) => (
              <span key={area} className="chip">
                {area}
              </span>
            ))}
          </div>
        </section>

        <section id="subscribe" className="subscribe-panel">
          <div>
            <p className="eyebrow">Stay connected</p>
            <h2>Receive thoughtful updates in your inbox.</h2>
          </div>
          <a className="primary" href="mailto:hello@wardnewsletters.example">
            Contact the newsletter team
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
