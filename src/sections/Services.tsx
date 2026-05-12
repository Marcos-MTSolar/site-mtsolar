import { Sun, Zap, Settings, Monitor } from 'lucide-react';
import { motion } from 'motion/react';

const servicesList = [
  {
    icon: <Sun size={32} />,
    title: 'Instalação On-grid e Off-grid',
    description: 'Sistemas conectados à rede ou autônomos para residências, empresas e propriedades rurais.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Usinas de Solo',
    description: 'Sistemas fotovoltaicos de alta potência com subestação para indústria e comércio.'
  },
  {
    icon: <Settings size={32} />,
    title: 'Consultoria Técnica e Regulatória',
    description: 'Homologação junto à concessionária, análise de viabilidade e dimensionamento.'
  },
  {
    icon: <Monitor size={32} />,
    title: 'Monitoramento e Gestão',
    description: 'Acompanhamento profissional da geração de energia do seu sistema.'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-black tracking-[0.2em] uppercase mb-4 block">Especialidades</span>
          <h2 className="text-4xl md:text-5xl font-black text-primary">Nossos Serviços</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border-2 border-transparent hover:border-secondary transition-all group"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-secondary group-hover:text-primary transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
