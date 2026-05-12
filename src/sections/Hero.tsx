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
                href="https://wa.me/5581986349054?text=Olá!%20Vim%20pelo%20site%20mtsolarpe.com.br%20e%20gostaria%20de%20solicitar%20um%20orçamento%20de%20energia%20solar."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] border-2 border-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-[#128C7E] hover:border-[#128C7E] transition-all flex items-center justify-center gap-3"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
