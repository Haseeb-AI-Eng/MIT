import { useState, useEffect } from 'react';
import { Search, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SearchPanel } from './SearchPanel';
import logo from '../../assets/elements-interactive-546.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
        <div className={`px-6 flex items-center justify-between border-b transition-all duration-300 ${isScrolled ? 'border-black/10 py-4' : 'border-transparent pt-12 pb-4'}`}>
          <Link to="/" className="flex items-center gap-3">
            <div className={`flex items-center gap-2 transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>

              {/* Logo with removed invert/brightness filters */}
              <img
                src={logo}
                alt="Elements Interactive"
                style={{
                  width: isScrolled ? '56px' : '72px',
                  height: isScrolled ? '56px' : '72px'
                }}
                className="transition-all duration-300 object-contain"
              />

              <span className={`font-bold tracking-tight transition-all duration-300 ${isScrolled ? 'text-black text-[44px]' : 'text-white text-[64px]'}`} style={{ fontFamily: "'Courier New', monospace" }}>
                &gt; 40
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <button className={`p-2.5 rounded-full transition-colors ${isScrolled ? 'hover:bg-black/5 text-black' : 'hover:bg-white/10 text-white'}`}>
              <User className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setSearchOpen(true)}
              className={`p-2.5 rounded-full transition-colors ${isScrolled ? 'hover:bg-black/5 text-black' : 'hover:bg-white/10 text-white'}`}
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className={`p-2.5 rounded-full transition-colors ${isScrolled ? 'hover:bg-black/5 text-black' : 'hover:bg-white/10 text-white'}`}>
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <svg width={isScrolled ? '50' : '60'} height={isScrolled ? '50' : '60'} viewBox="0 0 80 50" className={`transition-all duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
              <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" fontSize="42" fontWeight="900" fill="currentColor" fontFamily="sans-serif" letterSpacing="1">ELE</text>
            </svg>
          </div>
        </div>
      </header>

      <SearchPanel isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}