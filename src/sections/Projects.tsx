import React from 'react';
import { MapPin } from 'lucide-react';

// Importando as imagens reais
import obraArte from '../assets/projetos/obra-arte-do-saber.jpeg';
import obraFazenda1 from '../assets/projetos/obra-fazenda-solo-1.jpeg';
import obraFazenda2 from '../assets/projetos/obra-fazenda-solo-2.jpeg';
import obraResidencial from '../assets/projetos/obra-residencial-recife.jpeg';
import obraRuy1 from '../assets/projetos/obra-ruy-barbosa-1.jpeg';
import obraRuy2 from '../assets/projetos/obra-ruy-barbosa-2.jpeg';
import obraSubestacao from '../assets/projetos/obra-subestacao.jpeg';
import obraUsinaGrande from '../assets/projetos/obra-usina-grande.jpeg';

const projectsData = [
  { id: 1, title: 'Arte do Saber', location: 'Escola - Pernambuco', image: obraArte, tag: 'Educação' },
  { id: 2, title: 'Fazenda Solar I', location: 'Usinas - Nordeste', image: obraFazenda1, tag: 'Agronegócio' },
  { id: 3, title: 'Fazenda Solar II', location: 'Usinas - Nordeste', image: obraFazenda2, tag: 'Agronegócio' },
  { id: 4, title: 'Residencial Recife', location: 'Recife - PE', image: obraResidencial, tag: 'Residencial' },
  { id: 5, title: 'Escola Ruy Barbosa I', location: 'Recife - PE', image: obraRuy1, tag: 'Educação' },
  { id: 6, title: 'Escola Ruy Barbosa II', location: 'Recife - PE', image: obraRuy2, tag: 'Educação' },
  { id: 7, title: 'Subestação Elétrica', location: 'Infraestrutura', image: obraSubestacao, tag: 'Indústria' },
  { id: 8, title: 'Usina Industrial', location: 'Grande Escala', image: obraUsinaGrande, tag: 'Usinas' },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-[#1B2F5E]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#F5A623] font-black tracking-[0.2em] uppercase mb-4 block">Portfólio</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Projetos Realizados</h2>
          <p className="text-gray-300 text-lg">
            Energia solar de verdade no Nordeste. Conheça algumas de nossas instalações de alta performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 hover:border-[#F5A623] transition-all duration-500"
            >
              {/* Image Container with CSS Zoom */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#F5A623] text-[#1B2F5E] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {project.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-[#F5A623] text-sm mb-2">
                  <MapPin size={14} />
                  <span className="font-medium opacity-80">{project.location}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#F5A623] transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
