import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/now', label: 'Now' },
];

export default function Nav() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-16 py-5 border-b border-accent/10"
      style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(16px)' }}>
      <Link to="/" className="font-serif text-lg font-light text-text no-underline">
        Keshav Girish<span className="text-accent"> </span>Adkar
      </Link>
      <ul className="flex gap-5 md:gap-10 list-none">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`no-underline text-xs font-normal tracking-[0.12em] uppercase transition-colors ${
                location.pathname === link.to ? 'text-accent' : 'text-muted hover:text-text'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}