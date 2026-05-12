import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Quem Somos', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Calculadora', href: '#calculator' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white",
        isScrolled ? "py-3 shadow-md" : "py-5 shadow-sm"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter">
            <span className="text-primary">MT</span> <span className="text-secondary">SOLAR</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-primary hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#calculator"
            className="bg-secondary text-primary px-6 py-2.5 rounded-xl font-black shadow-lg shadow-secondary/20 hover:scale-105 active:scale-95 transition-all"
          >
            Simule Grátis
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-primary p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "lg:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none -translate-y-10"
      )}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-black text-primary hover:text-secondary transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#calculator"
          onClick={() => setIsMenuOpen(false)}
          className="bg-secondary text-primary px-10 py-4 rounded-2xl font-black text-xl shadow-xl"
        >
          Simule Grátis
        </a>
      </div>
    </header>
  );
}
