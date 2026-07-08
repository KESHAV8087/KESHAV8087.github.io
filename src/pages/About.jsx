import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function About() {
  return (
    <section className="pt-36 pb-24 px-6 md:px-16 relative z-[1]">
      <div className="max-w-[720px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-1.5 text-muted no-underline text-xs tracking-wider uppercase mb-8 hover:text-accent transition-colors">← Back to home</Link>
        <p className="text-xs tracking-[0.2em] uppercase text-accent mb-4">About</p>
        <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight tracking-tight text-text mb-7">From audit workflows to <em className="italic text-accent">AI research</em>.</h1>
        <p className="font-serif text-xl font-light leading-relaxed text-muted mb-12">The honest story of how a Deloitte IT consultant ended up at Northeastern researching LLM hallucinations — and why the pivot was harder than the technical work.</p>

        <div className="space-y-6 text-[1.05rem] leading-[1.85]" style={{ color: '#2a2632' }}>
          <Reveal><p>I'm Keshav. I'm currently in my Master's in Computer Science at Northeastern University in Boston, where my research focuses on making large language models more reliable — specifically, on quantifying and reducing hallucinations in retrieval-augmented systems.</p></Reveal>
          <Reveal><p>But that's not where I started. For two and a half years before grad school, I was an IT Consultant at Deloitte in India, automating audit workflows and remediating SAP security. It was structured, well-paid, and not what I wanted to be doing in five years.</p></Reveal>

          <Reveal><h2 className="font-serif text-2xl font-normal text-text mt-14 mb-6 pl-6 relative">
            <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-accent" style={{ boxShadow: '0 0 16px rgba(91,69,245,0.6)' }} />The Pivot</h2></Reveal>
          <Reveal><p>The shift wasn't a single dramatic moment. It was the slow realization that the parts of my job I genuinely enjoyed — designing Python automations, integrating early AI tooling into compliance reviews, mentoring analysts on technical problems — all pointed in one direction. The audit work paid the bills; the ML-adjacent work made me lose track of time.</p></Reveal>
          <Reveal><p>I'd already published a deep learning paper in undergrad — a Bi-LSTM phishing URL classifier at 94.2% accuracy in IJSDR — but I had told myself it was a one-off. Two years later, watching the GPT-3 to GPT-4 jump unfold while I was writing security exception requests, I decided to stop telling myself that.</p></Reveal>

          <Reveal><div className="font-serif text-2xl italic font-light text-accent leading-snug py-8 pl-8 my-10" style={{ borderLeft: '2px solid #5b45f5', background: 'linear-gradient(to right, rgba(91,69,245,0.04), transparent)' }}>"I didn't want to be the person who almost did ML."</div></Reveal>

          <Reveal><p>So I applied to MS programs, got into Northeastern, and moved to Boston in September 2025. I'm pivoting fully — and being honest about the arc rather than pretending I was always headed here.</p></Reveal>

          <Reveal><h2 className="font-serif text-2xl font-normal text-text mt-14 mb-6 pl-6 relative">
            <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-accent" style={{ boxShadow: '0 0 16px rgba(91,69,245,0.6)' }} />What I'm Working On Now</h2></Reveal>
          <Reveal><p>My current research is on mitigating hallucinations in LLMs. I'm building evaluation pipelines for RAG systems — frameworks that measure how well retrieved context actually grounds a model's output, across GPT, Claude, and open-source models under domain-specific retrieval conditions. The goal isn't to make models perfect; it's to make their failure modes legible.</p></Reveal>

          <Reveal><h2 className="font-serif text-2xl font-normal text-text mt-14 mb-6 pl-6 relative">
            <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-accent" style={{ boxShadow: '0 0 16px rgba(91,69,245,0.6)' }} />Outside Code</h2></Reveal>
          <Reveal><p>I grew up doing competitive Abacus and Speed Math — National Silver Medalist, which probably explains why I find mental math soothing in a way most people find concerning. I played football at the district level back home in India. These days in Boston, I'm a coffee-shop coder and a long-walk thinker.</p></Reveal>

          <Reveal><h2 className="font-serif text-2xl font-normal text-text mt-14 mb-6 pl-6 relative">
            <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-accent" style={{ boxShadow: '0 0 16px rgba(91,69,245,0.6)' }} />What I'm Looking For</h2></Reveal>
          <Reveal><p>I'm actively seeking AI/ML opportunities — particularly roles working on LLM reliability, evaluation, RAG infrastructure, or applied research. I bring an unusual combination: two years of enterprise software discipline from Deloitte, plus the depth of focus that comes from making a deliberate career pivot.</p></Reveal>
        </div>

        <div className="text-center pt-12 mt-12 border-t border-accent/10">
          <p className="text-[1.05rem] text-muted mb-6">Want to talk?</p>
          <Link to="/#contact" className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3 rounded-sm font-medium text-sm tracking-wide no-underline transition-all hover:bg-accent2 hover:-translate-y-0.5" style={{ boxShadow: '0 4px 24px rgba(91,69,245,0.35)' }}>Get in Touch →</Link>
        </div>
      </div>
    </section>
  );
}