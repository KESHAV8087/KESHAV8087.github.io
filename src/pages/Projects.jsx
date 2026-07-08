import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/content';
import Reveal from '../components/Reveal';

const categories = ['All', 'AI/ML', 'Computer Vision', 'Full-Stack', 'Automation'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="pt-36 pb-24 px-6 md:px-16 relative z-[1]">
      <div className="max-w-[1100px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-1.5 text-muted no-underline text-xs tracking-wider uppercase mb-8 hover:text-accent transition-colors">← Back to home</Link>
        <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2.5">Portfolio</p>
        <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight tracking-tight text-text mb-10">All <em className="italic text-accent">projects</em></h1>

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`text-sm px-4 py-2 rounded-full tracking-wide transition-all ${filter === cat ? 'bg-accent text-white' : 'text-muted hover:text-accent'}`}
              style={{ border: filter === cat ? 'none' : '1px solid rgba(99,82,255,0.22)' }}>{cat}</button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-px rounded overflow-hidden"
          style={{ background: 'rgba(91,69,245,0.1)', border: '1px solid rgba(91,69,245,0.1)', boxShadow: '0 4px 32px rgba(91,69,245,0.07)' }}>
          {filtered.map((p) => (
            <div key={p.id} className="bg-card p-8 flex flex-col transition-all hover:bg-bg3">
              <div className="flex justify-between items-start mb-4">
                <span className="font-serif text-sm text-accent/20 tracking-wide">{p.num}</span>
                <span className="text-xs px-2 py-0.5 rounded-full text-teal tracking-wide" style={{ border: '1px solid rgba(14,165,201,0.3)' }}>{p.category}</span>
              </div>
              <div className="text-base font-medium text-text mb-2.5 leading-snug">{p.title}</div>
              <p className="text-sm text-muted leading-relaxed flex-1 mb-5">{p.desc}</p>
              <div className="flex justify-between items-end">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full text-muted tracking-wide" style={{ border: '1px solid rgba(99,82,255,0.22)' }}>{t}</span>
                  ))}
                </div>
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="text-accent text-sm no-underline hover:text-text whitespace-nowrap ml-2">GitHub ↗</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}