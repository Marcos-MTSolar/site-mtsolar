import { Star } from 'lucide-react';

// Dados dos depoimentos dos clientes
const testimonials = [
  {
    name: "Carlos Mendonça",
    location: "Recife, PE",
    text: "Reduzi minha conta de luz em mais de 90% no primeiro mês. O atendimento da MT Solar foi impecável do início ao fim."
  },
  {
    name: "Fernanda Lins",
    location: "Caruaru, PE",
    text: "Processo simples, rápido e sem dor de cabeça. A equipe explicou tudo com clareza e a instalação foi feita em 2 dias."
  },
  {
    name: "Marcelo Souza",
    location: "Maceió, AL",
    text: "Investimento que se paga sozinho. Já no terceiro mês eu sentia a diferença na conta de energia."
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-[#1B2F5E]">
      <div className="container mx-auto px-6">
        {/* Título Centralizado em Branco */}
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-16">
          O que nossos clientes dizem
        </h2>
        
        {/* Grid responsivo: 1 coluna no mobile, 3 colunas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-white/10 flex flex-col justify-between"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.07)' }}
            >
              <div>
                {/* 5 estrelas fixas na cor #F5A623 */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className="fill-[#F5A623] text-[#F5A623]" 
                    />
                  ))}
                </div>
                
                {/* Texto do depoimento em branco */}
                <p className="text-white text-lg leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
              </div>
              
              {/* Nome e Cidade/Estado */}
              <div>
                <span className="block text-white font-bold text-lg">
                  {t.name}
                </span>
                <span className="block text-white/60 text-sm font-medium mt-1">
                  {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
