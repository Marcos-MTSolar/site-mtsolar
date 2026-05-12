import { useState } from 'react';
import { Sun, MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['Todos', 'Residencial', 'Comercial', 'Escolas', 'Usinas'];

const projectsData = [
  { id: 1, title: 'Usina de Solo On-grid', location: 'Pernambuco', tag: 'Usinas' },
  { id: 2, title: 'Escola Rui Barbosa', location: 'Recife-PE', tag: 'Escolas' },
  { id: 3, title: 'Escola Anita Garibaldi', location: 'Pernambuco', tag: 'Escolas' },
  { id: 4, title: 'Escola Arte do Saber', location: 'Pernambuco', tag: 'Escolas' },
  { id: 5, title: 'Escola Soberano', location: 'Pernambuco', tag: 'Escolas' },
  { id: 6, title: 'Residencial com Piscina', location: 'Pernambuco', tag: 'Residencial' },
];

export default function Projects() {
  const [filter, setFilter] = useState('Todos');

  const filteredProjects = filter === 'Todos' 
    ? projectsData 
    : projectsData.filter(p => p.tag === filter);

  return (
    <section id="projetos" className="py-24 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-black tracking-[0.2em] uppercase mb-4 block">Portfólio</span>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">Nossos Projetos</h2>
          <p className="text-gray-500 text-lg">
            Instalações realizadas em Pernambuco, Alagoas e Paraíba, levando economia e sustentabilidade para diversas regiões.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                filter === cat 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-white text-gray-400 hover:text-primary border border-gray-100 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-50"
              >
                {/* Image Placeholder */}
                <div className="relative h-60 bg-gradient-to-br from-primary to-dark flex items-center justify-center overflow-hidden">
                  <Sun size={64} className="text-secondary/20 group-hover:scale-125 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                      {project.tag}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <MapPin size={14} className="text-secondary" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 text-center">
          <button
            onClick={() => {
              document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 bg-secondary text-primary px-10 py-5 rounded-2xl font-black text-xl hover:bg-primary hover:text-white transition-all group shadow-xl shadow-secondary/10"
          >
            Solicite o seu projeto
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
