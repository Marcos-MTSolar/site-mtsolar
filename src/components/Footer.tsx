import { Globe, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          {/* Logo + Description */}
          <div className="space-y-8">
            <a href="#hero" className="flex items-center gap-2">
              <span className="text-3xl font-black tracking-tighter">
                <span className="text-white">MT</span> <span className="text-secondary">SOLAR</span>
              </span>
            </a>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              Líder em soluções de energia fotovoltaica para residências, comércios e escolas em todo o Nordeste brasileiro.
            </p>
            <div className="flex gap-5">
              <a href="https://instagram.com/mtsolar_" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-secondary hover:text-primary transition-all group">
                <Globe size={24} />
              </a>
              <a href="https://mtsolar.com.br" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-secondary hover:text-primary transition-all group">
                <Globe size={24} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full" />
              Nossos Serviços
            </h4>
            <ul className="space-y-5">
              {['Energia Solar Residencial', 'Energia Solar Comercial', 'Energia Solar Escolar', 'Manutenção Preventiva', 'Consultoria e Projetos'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-secondary hover:translate-x-2 transition-all inline-block font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full" />
              Fale Conosco
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400">
                <div className="bg-white/5 p-3 rounded-xl text-secondary">
                  <MapPin size={20} />
                </div>
                <span className="font-medium">Atendimento em Pernambuco, Alagoas e Paraíba</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <div className="bg-white/5 p-3 rounded-xl text-secondary">
                  <Phone size={20} />
                </div>
                <span className="font-bold text-white">(81) 99700-3260</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <div className="bg-white/5 p-3 rounded-xl text-secondary">
                  <Globe size={20} />
                </div>
                <span className="font-medium">@mtsolar_</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-gray-500 text-sm font-medium">
            © 2025 MT Solar — Energia renovável. Todos os direitos reservados.
          </p>
          <div className="flex gap-10 text-gray-500 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
