import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-[#0F1E3D] to-[#1B2F5E]">
      {/* Visual Overlay - Solar Panel Texture Simulation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-md px-5 py-2.5 rounded-full text-secondary text-xs font-black uppercase tracking-widest mb-8 border border-secondary/30">
              <span role="img" aria-label="sun">☀️</span>
              <span>+5 anos de experiência da equipe | Projetos residenciais, comerciais e industriais</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8">
              Energia Solar para sua casa, empresa ou escola em <span className="text-secondary">Pernambuco, Alagoas e Paraíba</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-medium max-w-3xl">
              Economize até <span className="text-white font-bold">95%</span> na conta de luz com sistemas fotovoltaicos instalados por especialistas. Atendimento completo do projeto à homologação.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#calculator"
                className="bg-secondary text-primary px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-secondary/20 hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-3 group"
              >
                Simule seu sistema →
              </a>
              <a
                href="https://wa.me/5581997003260"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-white text-primary px-10 py-5 rounded-2xl font-black text-xl hover:bg-secondary hover:text-primary transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle size={24} fill="currentColor" />
                Fale no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20 text-white fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.05,115.37,131.51,117.98,192.47,105.07c69.54-14.74,131.06-39,188.92-56.12Z"></path>
        </svg>
      </div>
    </section>
  );
}
