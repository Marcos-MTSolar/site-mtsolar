import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import logo from '../assets/logo-mtsolar.png';

const navLinks = [
  { name: 'Quem Somos', href: '#quem-somos' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Calculadora', href: '#calculadora' },
  { name: 'Projetos', href: '#projetos' },
  { name: 'Contato', href: '#contato' },
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
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="MT Solar" className="h-10 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm font-bold text-primary hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-secondary text-primary px-6 py-2.5 rounded-xl font-black shadow-lg shadow-secondary/20 hover:scale-105 active:scale-95 transition-all"
          >
            Simule Grátis
          </button>
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
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-2xl font-black text-primary hover:text-secondary transition-colors"
          >
            {link.name}
          </a>
        ))}
        <button
          onClick={() => {
            setIsMenuOpen(false);
            document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-secondary text-primary px-10 py-4 rounded-2xl font-black text-xl shadow-xl"
        >
          Simule Grátis
        </button>
      </div>
    </header>
  );
}
