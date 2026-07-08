import { profile, stats, heroSkills, experience, research, projects, skills, education } from '../data/content';
import Reveal from '../components/Reveal';

function TimelineItem({ item }) {
  return (
    <div className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-12 py-10 border-t border-accent/10 last:border-b">
      <div className="pt-0.5">
        <div className="text-xs tracking-wider text-muted uppercase mb-1.5">{item.period}</div>
        <div className="font-serif text-lg font-light text-accent">{item.company}</div>
        <div className="text-xs text-muted mt-1">{item.location}</div>
      </div>
      <div>
        <div className="text-lg font-medium text-text mb-3">{item.role}</div>
        <ul className="flex flex-col gap-2">
          {item.bullets.map((b, i) => (
            <li key={i} className="text-sm text-muted pl-[1.1rem] relative leading-relaxed">
              <span className="absolute left-0 text-accent text-xs top-[0.05em]">→</span>{b}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {item.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-sm tracking-wide"
              style={{ background: 'rgba(91,69,245,0.07)', border: '1px solid rgba(91,69,245,0.18)', color: '#5b45f5' }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 md:px-16 pt-32 pb-20 relative z-[1]">
        <div className="max-w-[1100px] mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-accent mb-7 px-3.5 py-1.5 rounded-full"
              style={{ border: '1px solid rgba(91,69,245,0.3)', background: 'rgba(91,69,245,0.05)', boxShadow: '0 2px 16px rgba(91,69,245,0.1)' }}>
              <span className="w-1.5 h-1.5 bg-accent rounded-full" style={{ animation: 'pulse 2s ease infinite' }} />
              {profile.badge}
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.08] tracking-tight text-text mb-6">
              Building <em className="italic text-accent">reliable</em><br />AI systems<br />that matter.
            </h1>
            <p className="text-base text-muted max-w-[420px] leading-relaxed mb-10">{profile.bio}</p>
            <div className="flex gap-4 flex-wrap">
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3 rounded-sm font-medium text-sm tracking-wide no-underline transition-all hover:bg-accent2 hover:-translate-y-0.5"
                style={{ boxShadow: '0 4px 24px rgba(91,69,245,0.35)' }}>View Résumé ↗</a>
              <a href="#contact"
                className="inline-flex items-center gap-2 text-accent px-7 py-3 rounded-sm text-sm tracking-wide no-underline transition-all hover:-translate-y-0.5"
                style={{ border: '1.5px solid rgba(91,69,245,0.35)' }}>Get in Touch</a>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-px rounded overflow-hidden mb-6"
              style={{ background: 'rgba(91,69,245,0.12)', border: '1px solid rgba(91,69,245,0.1)', boxShadow: '0 8px 40px rgba(91,69,245,0.12)' }}>
              {stats.map((s) => (
                <div key={s.label} className="bg-card p-6">
                  <div className="font-serif text-4xl font-light text-accent leading-none mb-1.5" style={{ textShadow: '0 0 24px rgba(91,69,245,0.25)' }}>{s.num}</div>
                  <div className="text-xs text-muted tracking-wide uppercase">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {heroSkills.map((skill, i) => (
                <span key={skill} className={`text-xs px-3 py-1 rounded-full tracking-wide transition-colors ${i < 3 ? 'text-accent' : 'text-muted'}`}
                  style={{ border: i < 3 ? '1px solid rgba(91,69,245,0.4)' : '1px solid rgba(99,82,255,0.22)' }}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 md:px-16 py-24 relative z-[1]" style={{ background: '#f7f7ff' }}>
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2.5">Career</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-text mb-14">Where I've <em className="italic text-accent">worked</em></h2>
          {experience.map((item) => <Reveal key={item.company}><TimelineItem item={item} /></Reveal>)}
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="px-6 md:px-16 py-24 relative z-[1]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2.5">Academic Work</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-text mb-14">Research &amp; <em className="italic text-accent">Publications</em></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {research.map((r) => (
              <Reveal key={r.title}>
                <div className="border border-accent/10 rounded p-9 bg-card relative overflow-hidden h-full transition-all hover:-translate-y-1"
                  style={{ boxShadow: '0 2px 20px rgba(91,69,245,0.07)' }}>
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(to right, #5b45f5, #0ea5c9)', boxShadow: '0 0 12px rgba(91,69,245,0.5)' }} />
                  <div className="text-xs tracking-wider uppercase text-teal mb-2.5">{r.type}</div>
                  <div className="font-serif text-2xl font-light text-text mb-3.5 leading-snug">{r.title}</div>
                  <p className="text-sm text-muted leading-relaxed mb-5">{r.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {r.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-sm tracking-wide"
                        style={{ background: 'rgba(91,69,245,0.07)', border: '1px solid rgba(91,69,245,0.18)', color: '#5b45f5' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section id="projects" className="px-6 md:px-16 py-24 relative z-[1]" style={{ background: '#f7f7ff' }}>
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2.5">Engineering</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-text mb-14">Things I've <em className="italic text-accent">built</em></h2>
          <div className="grid md:grid-cols-3 gap-px rounded overflow-hidden"
            style={{ background: 'rgba(91,69,245,0.1)', border: '1px solid rgba(91,69,245,0.1)', boxShadow: '0 4px 32px rgba(91,69,245,0.07)' }}>
            {projects.map((p) => (
              <div key={p.id} className="bg-card p-8 flex flex-col transition-all hover:bg-bg3">
                <div className="font-serif text-sm text-accent/20 mb-4 tracking-wide">{p.num}</div>
                <div className="text-base font-medium text-text mb-2.5 leading-snug">{p.title}</div>
                <p className="text-sm text-muted leading-relaxed flex-1 mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full text-muted tracking-wide" style={{ border: '1px solid rgba(99,82,255,0.22)' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 md:px-16 py-24 relative z-[1]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2.5">Technical Toolkit</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-text mb-14">Skills &amp; <em className="italic text-accent">Technologies</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px rounded overflow-hidden"
            style={{ background: 'rgba(91,69,245,0.1)', border: '1px solid rgba(91,69,245,0.1)', boxShadow: '0 4px 32px rgba(91,69,245,0.08)' }}>
            {skills.map((group) => (
              <div key={group.group} className="bg-card p-7">
                <div className="text-xs tracking-wider uppercase text-accent mb-4">{group.group}</div>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted pl-3.5 relative">
                      <span className="absolute left-0 text-accent">·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="px-6 md:px-16 py-24 relative z-[1]" style={{ background: '#f7f7ff' }}>
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2.5">Academic Background</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-text mb-14">Where I've <em className="italic text-accent">studied</em></h2>
          {education.map((item) => <Reveal key={item.company}><TimelineItem item={item} /></Reveal>)}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-16 py-24 relative z-[1] text-center">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2.5">Let's Talk</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-text mb-14">Open to <em className="italic text-accent">opportunities</em></h2>
          <p className="text-muted max-w-[480px] mx-auto mb-4 text-[0.95rem]">Actively seeking AI/ML roles. Happy to chat about research, roles, or collaborations.</p>
          <div className="flex flex-col items-center gap-6 my-10">
            <div className="flex flex-col items-center">
              <span className="text-xs tracking-[0.2em] uppercase text-muted mb-1.5">College Mail</span>
              <a href={`mailto:${profile.emails.college}`} className="font-serif text-2xl md:text-4xl font-light text-accent no-underline pb-1" style={{ borderBottom: '1px solid rgba(91,69,245,0.25)', textShadow: '0 0 32px rgba(91,69,245,0.2)' }}>{profile.emails.college}</a>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs tracking-[0.2em] uppercase text-muted mb-1.5">Personal Mail</span>
              <a href={`mailto:${profile.emails.personal}`} className="font-serif text-2xl md:text-4xl font-light text-accent no-underline pb-1" style={{ borderBottom: '1px solid rgba(91,69,245,0.25)', textShadow: '0 0 32px rgba(91,69,245,0.2)' }}>{profile.emails.personal}</a>
            </div>
          </div>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-muted text-sm tracking-wide uppercase no-underline hover:text-accent transition-colors">GitHub</a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted text-sm tracking-wide uppercase no-underline hover:text-accent transition-colors">LinkedIn</a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="text-muted text-sm tracking-wide uppercase no-underline hover:text-accent transition-colors">Résumé</a>
            <a href={profile.socials.whatsappUS} target="_blank" rel="noreferrer" className="text-muted text-sm tracking-wide uppercase no-underline hover:text-accent transition-colors">WhatsApp · USA</a>
            <a href={profile.socials.whatsappIN} target="_blank" rel="noreferrer" className="text-muted text-sm tracking-wide uppercase no-underline hover:text-accent transition-colors">WhatsApp · INDIA</a>
          </div>
        </div>
      </section>
    </>
  );
}