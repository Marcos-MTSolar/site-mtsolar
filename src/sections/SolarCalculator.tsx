import { useState } from 'react';
import { Calculator, TrendingUp, Zap, Clock, ArrowRight } from 'lucide-react';

type InputMode = 'kwh' | 'reais';

export default function SolarCalculator() {
  const [mode, setMode] = useState<InputMode>('kwh');
  const [value, setValue] = useState(500);
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculated, setCalculated] = useState(false);

  // Constantes baseadas nas fórmulas solicitadas
  const TARIFF = 0.85;

  const handleCalculate = () => {
    setIsCalculating(true);
    setCalculated(false);
    
    // Delay simples apenas para feedback visual (sem animação pesada)
    setTimeout(() => {
      setIsCalculating(false);
      setCalculated(true);
    }, 400);
  };

  const scrollToForm = () => {
    const form = document.getElementById('contato');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lógica de Cálculo (Fórmulas solicitadas)
  const consumo = mode === 'kwh' ? value : value / TARIFF;
  
  // kwp = consumo / (5.0 * 30 * 0.80)
  const kwp = consumo / (5.0 * 30 * 0.80);
  
  // paineis = Math.ceil((kwp * 1000) / 585)
  const paineis = Math.ceil((kwp * 1000) / 585);
  
  // kwpReal = (paineis * 585) / 1000
  const kwpReal = (paineis * 585) / 1000;
  
  // economiaMensal = consumo * 0.85
  const economiaMensal = consumo * 0.85;
  
  // economiaAnual = economiaMensal * 12
  const economiaAnual = economiaMensal * 12;
  
  // retorno = Math.round((kwpReal * 4200) / economiaMensal)
  const retorno = Math.round((kwpReal * 4200) / economiaMensal);

  return (
    <section id="calculadora" className="py-20 bg-[#0F1E3D] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Simule sua <span className="text-secondary">Economia</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Descubra o potencial do sol para reduzir sua conta de energia de forma simples.
            </p>
          </div>

          <div className="bg-[#162950] border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-lg">
            <div className="space-y-8">
              {/* Seleção de Modo */}
              <div className="flex justify-center">
                <div className="bg-white/5 p-1 rounded-xl flex gap-1 border border-white/5">
                  <button
                    onClick={() => { setMode('kwh'); setCalculated(false); }}
                    className={`px-5 py-2 rounded-lg font-bold transition-opacity duration-300 ${mode === 'kwh' ? 'bg-secondary text-primary' : 'text-gray-300'}`}
                  >
                    Uso em kWh
                  </button>
                  <button
                    onClick={() => { setMode('reais'); setCalculated(false); }}
                    className={`px-5 py-2 rounded-lg font-bold transition-opacity duration-300 ${mode === 'reais' ? 'bg-secondary text-primary' : 'text-gray-300'}`}
                  >
                    Valor em R$
                  </button>
                </div>
              </div>

              {/* Entrada de Valores */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                <div className="md:col-span-3 space-y-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>{mode === 'kwh' ? 'Consumo Mensal' : 'Valor da Conta'}</span>
                    <span className="text-secondary">
                      {mode === 'kwh' ? `${value} kWh` : `R$ ${value.toLocaleString('pt-BR')}`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={mode === 'kwh' ? 100 : 150}
                    max={mode === 'kwh' ? 3000 : 5000}
                    step={50}
                    value={value}
                    onChange={(e) => { setValue(Number(e.target.value)); setCalculated(false); }}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-secondary"
                  />
                </div>
                <div className="md:col-span-1">
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => { setValue(Number(e.target.value)); setCalculated(false); }}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xl font-bold text-center focus:border-secondary outline-none text-white"
                  />
                </div>
              </div>

              {/* Botão de Calcular */}
              <button
                onClick={handleCalculate}
                disabled={isCalculating}
                className="w-full bg-secondary text-primary py-4 rounded-xl font-black text-xl shadow-md transition-opacity duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isCalculating ? 'CALCULANDO...' : (
                  <>
                    CALCULAR AGORA
                    <Calculator size={24} />
                  </>
                )}
              </button>

              {/* Área de Resultados */}
              <div className={`transition-opacity duration-500 ease-in-out ${calculated ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                {calculated && (
                  <div className="pt-8 border-t border-white/5 space-y-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      <ResultCard 
                        icon={<Zap size={18} />} 
                        label="Potência" 
                        value={`${kwpReal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} kWp`} 
                      />
                      <ResultCard 
                        icon={<Calculator size={18} />} 
                        label="Painéis" 
                        value={`${paineis} un.`} 
                      />
                      <ResultCard 
                        icon={<TrendingUp size={18} />} 
                        label="Economia" 
                        value={`R$ ${economiaMensal.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}`} 
                      />
                      <ResultCard 
                        icon={<Clock size={18} />} 
                        label="Retorno" 
                        value={`${retorno} meses`} 
                      />
                    </div>

                    <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-6 text-center space-y-4">
                      <p className="text-lg font-bold">
                        Economia estimada de <span className="text-secondary">R$ {economiaAnual.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</span> por ano!
                      </p>
                      <button
                        onClick={scrollToForm}
                        className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-3 rounded-xl font-black text-lg transition-opacity duration-300 hover:opacity-90"
                      >
                        Solicitar Orçamento
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="bg-white p-4 rounded-2xl text-primary shadow-md border-b-2 border-secondary">
      <div className="text-secondary mb-1">{icon}</div>
      <p className="text-[9px] font-black uppercase tracking-wider text-gray-500 mb-0.5">{label}</p>
      <p className="text-base font-black truncate">{value}</p>
    </div>
  );
}
