import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const statsCards = [
  { value: '+5 anos', label: 'de experiência da equipe' },
  { value: '3 estados', label: 'Pernambuco, Alagoas e Paraíba' },
  { value: '100%', label: 'Soluções completas sob medida' },
  { value: '4 escolas', label: 'com energia solar instalada' },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-black tracking-[0.2em] uppercase mb-4 block">Quem Somos</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
              Experiência que gera <span className="text-secondary">confiança</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              A MT Solar é uma empresa de energia solar fotovoltaica com **2 anos e meio de atuação**, conduzida por profissionais com **mais de 5 anos de experiência**. 
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Atuamos em projetos residenciais, comerciais, industriais e usinas solares em **Pernambuco, Alagoas e Paraíba**, entregando sempre o máximo de eficiência e economia para nossos clientes.
            </p>

            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-3 text-primary font-bold">
                <CheckCircle2 className="text-secondary" size={20} />
                <span>Compromisso com a Sustentabilidade</span>
              </div>
              <div className="flex items-center gap-3 text-primary font-bold">
                <CheckCircle2 className="text-secondary" size={20} />
                <span>Equipe Técnica Especializada</span>
              </div>
              <div className="flex items-center gap-3 text-primary font-bold">
                <CheckCircle2 className="text-secondary" size={20} />
                <span>Atendimento Personalizado</span>
              </div>
            </div>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-dark transition-all group"
            >
              Conheça nossos projetos
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </motion.div>

          {/* Right Column: Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {statsCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-secondary p-8 rounded-[2.5rem] flex flex-col justify-center min-h-[200px] shadow-xl shadow-secondary/10 hover:scale-105 transition-transform"
              >
                <span className="text-4xl font-black text-primary mb-2 block">{card.value}</span>
                <p className="text-primary/80 font-bold leading-snug">{card.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
