import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const nowItems = [
  { label: 'Learning', text: 'Working through CS5800 (Algorithms) and deepening my grasp of transformer internals.' },
  { label: 'Building', text: 'A RAG evaluation pipeline that measures factual grounding across model families.' },
  { label: 'Reading', text: 'Papers on retrieval-augmented generation and hallucination detection benchmarks.' },
  { label: 'Job Hunting', text: 'Actively interviewing for AI/ML roles — reliability, evaluation, and applied research.' },
];

export default function Now() {
  return (
    <section className="pt-36 pb-24 px-6 md:px-16 relative z-[1] min-h-screen">
      <div className="max-w-[720px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-1.5 text-muted no-underline text-xs tracking-wider uppercase mb-8 hover:text-accent transition-colors">← Back to home</Link>
        <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2.5">Right Now</p>
        <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight tracking-tight text-text mb-6">What I'm <em className="italic text-accent">focused on</em></h1>
        <p className="text-muted mb-14 text-[1.05rem]">A snapshot of what's currently occupying my time. Inspired by Derek Sivers' <span className="italic">/now</span> page movement.</p>

        <div className="flex flex-col gap-4">
          {nowItems.map((item) => (
            <Reveal key={item.label}>
              <div className="grid grid-cols-[120px_1fr] gap-6 items-start border-t border-accent/10 py-6">
                <div className="text-xs tracking-wider uppercase text-accent pt-0.5">{item.label}</div>
                <p className="text-[0.95rem] text-text leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-xs text-muted mt-12 italic">Last updated: July 2026</p>
      </div>
    </section>
  );
}