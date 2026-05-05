import { Link } from 'react-router-dom';
import logo from '../../assets/elements-interactive-546.png'; // Ensure import is present

const mainNavLinks = [
  { name: 'News + Updates', path: '/' },
  { name: 'Research', path: '/research' },
  { name: 'About', path: '/about' },
  { name: 'Support the Media Lab', path: '/support-media-lab' },
  { name: 'MAS Graduate Program', path: '/mas-graduate-program' },
  { name: 'People', path: '/people' },
  { name: 'Events', path: '/' },
  { name: 'Videos', path: '/' },
  { name: 'Member Portal', path: '/' },
  { name: 'For Press + Media', path: '/about#press' }
];

export function Footer() {
  const primaryLinks = [
    { name: 'News + Updates', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'About', path: '/about' },
    { name: 'Support the Media Lab', path: '/support-media-lab' },
    { name: 'MAS Graduate Program', path: '/mas-graduate-program' },
    { name: 'People', path: '/people' },
    { name: 'Projects', path: '/projects' },
  ];

  const secondaryLinks = [
    { name: 'Contact', path: '/about' },
    { name: 'Job Opportunities', path: '#' },
    { name: 'Publications', path: '#' },
  ];

  return (
    <footer className="bg-[#f0f0f0] py-16 px-8 lg:px-12 lg:ml-80">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between gap-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 flex-1">

          {/* Top Logo Section */}
          <div className="flex flex-col items-start">
            <img
              src={logo}
              alt="Elements Interactive"
              className="w-20 h-20 mb-4 object-contain"
            />
            <span className="text-[56px] font-bold tracking-tight text-black" style={{ fontFamily: "'Courier New', monospace" }}>&gt; 40</span>
          </div>

          {/* Primary Navigation */}
          <nav className="flex flex-col gap-3">
            {mainNavLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-[14px] text-black/80 hover:text-black transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Secondary Navigation */}
          <div className="flex flex-col gap-3">
            <span className="text-[14px] font-semibold text-black/50 mb-1">More ways to explore</span>
            <Link to="/" className="text-[14px] text-black/80 hover:text-black transition-colors">Videos</Link>
            <Link to="/research" className="text-[14px] text-black/80 hover:text-black transition-colors">Publications</Link>
            <Link to="/about#jobs" className="text-[14px] text-black/80 hover:text-black transition-colors">Job Opportunities</Link>
            <Link to="/about#contact" className="text-[14px] text-black/80 hover:text-black transition-colors">Contact</Link>
            <Link to="/add-research-project" className="text-[14px] text-black/80 hover:text-black transition-colors font-semibold">+ Add Research Project</Link>
          </div>
        </div>

        {/* Branding & Social Section */}
        <div className="flex flex-col items-start lg:items-end gap-4">
          <div className="flex gap-4 text-black">
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-black/60 transition-colors">X</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-black/60 transition-colors">FB</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-black/60 transition-colors">IG</a>
          </div>

          {/* REPLACED: Small bottom logo */}
          <img
            src={logo}
            alt="ELT"
            className="w-16 h-10 object-contain opacity-80"
          />

          <div className="text-right lg:text-right">
            <p className="text-[13px] text-black/70">Elements Interactive</p>
            <p className="text-[13px] text-black/70">School of Architecture + Planning</p>
          </div>
          <div className="flex flex-col gap-1">
            <Link to="/" className="text-[13px] text-black/70 hover:text-black transition-colors">Accessibility</Link>
            <Link to="/support-media-lab" className="text-[13px] text-black/70 hover:text-black transition-colors">Donate to the Lab</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}