import { Link } from 'react-router-dom';
import { posts } from '../data/content';

export default function Blog() {
  return (
    <section className="pt-36 pb-24 px-6 md:px-16 relative z-[1] min-h-screen">
      <div className="max-w-[720px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-1.5 text-muted no-underline text-xs tracking-wider uppercase mb-8 hover:text-accent transition-colors">← Back to home</Link>
        <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2.5">Writing</p>
        <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight tracking-tight text-text mb-6">Notes &amp; <em className="italic text-accent">essays</em></h1>
        <p className="text-muted mb-14 text-[1.05rem]">Thoughts on LLM reliability, machine learning, and the occasional lesson from switching careers into AI.</p>

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <div key={post.id} className="border border-accent/10 rounded p-8 bg-card transition-all hover:-translate-y-1" style={{ boxShadow: '0 2px 20px rgba(91,69,245,0.07)' }}>
              <div className="text-xs tracking-wider uppercase text-teal mb-2.5">{post.date}</div>
              <h2 className="font-serif text-2xl font-light text-text mb-3 leading-snug">{post.title}</h2>
              <p className="text-sm text-muted leading-relaxed">{post.excerpt}</p>
              {!post.published && <span className="inline-block mt-4 text-xs px-2.5 py-1 rounded-full text-muted tracking-wide" style={{ border: '1px solid rgba(99,82,255,0.22)' }}>Coming Soon</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}