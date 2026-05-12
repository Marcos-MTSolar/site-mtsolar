import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const institutionalCards = [
  { title: 'MISSÃO', text: 'Gerar a maior economia possível para nossos clientes.' },
  { title: 'VISÃO', text: 'Ser referência em energia solar, unindo excelência, economia e valores cristãos.' },
  { title: 'VALORES', text: 'Pontualidade, eficiência, foco no cliente, aprendizado contínuo dentro de uma ética cristã conservadora.' },
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
            className="lg:pr-12"
          >
            <span className="text-secondary font-black tracking-[0.2em] uppercase mb-4 block">Sobre Nós</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
              Excelência e <span className="text-secondary">Valores</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Somos uma empresa integradora de sistemas de energia solar fotovoltaica, fundamentada em valores cristãos que norteiam nossas ações com ética, transparência e respeito ao próximo. Nosso objetivo é proporcionar a maior economia possível na conta de energia para nossos clientes.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Fazemos isso por meio de um serviço de excelência, utilizando apenas equipamentos de alta qualidade disponíveis no mercado e contando com uma equipe técnica altamente treinada e capacitada.
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Com esse compromisso, estamos aptos a entregar o melhor custo-benefício do mercado quando o assunto é a instalação de sistemas fotovoltaicos.
            </p>

            <a
              href="https://wa.me/5581997003260?text=Olá!%20Vim%20pelo%20site%20mtsolarpe.com.br%20e%20gostaria%20de%20solicitar%20um%20orçamento%20de%20energia%20solar."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] border-2 border-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-[#128C7E] hover:border-[#128C7E] transition-all flex items-center justify-center gap-3 w-fit"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Fale no WhatsApp
            </a>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {institutionalCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-primary p-8 rounded-[2rem] shadow-xl hover:scale-[1.02] transition-transform"
              >
                <span className="text-xs font-black tracking-widest text-secondary mb-3 block uppercase">{card.title}</span>
                <p className="text-white font-medium leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 flex items-start gap-4"
            >
              <div className="bg-white p-3 rounded-xl text-secondary shadow-sm">
                <MapPin size={24} />
              </div>
              <span className="text-gray-700 font-medium leading-relaxed">
                Rua Rossini Roosevelt de Albuquerque, 10, Sala 103<br/>
                Piedade, Jaboatão dos Guararapes - PE<br/>
                CEP: 54410-310
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
