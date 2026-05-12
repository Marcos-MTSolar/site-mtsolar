import { useState } from 'react';
import { Calculator, TrendingUp, Zap, Clock, ArrowRight, Loader2 } from 'lucide-react';

type InputMode = 'kwh' | 'reais';

export default function SolarCalculator() {
  const [mode, setMode] = useState<InputMode>('kwh');
  const [value, setValue] = useState(500);
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculated, setCalculated] = useState(false);

  // Constants
  const TARIFF = 0.85;
  const SUN_HOURS = 5.0;
  const DAYS = 30;
  const PANEL_WATTS = 585;
  const COST_PER_KWP = 4200;
  const LOSS_FACTOR = 0.80;

  const handleCalculate = () => {
    setIsCalculating(true);
    setCalculated(false);
    
    // Simple delay for UX
    setTimeout(() => {
      setIsCalculating(false);
      setCalculated(true);
    }, 600);
  };

  const scrollToForm = () => {
    const form = document.getElementById('contato');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Logic
  const consumptionKwh = mode === 'kwh' ? value : value / TARIFF;
  
  // kWp necessário
  const kwp = consumptionKwh / (SUN_HOURS * DAYS * LOSS_FACTOR);
  
  // Número de painéis (arredondar para CIMA)
  const panels = Math.ceil((kwp * 1000) / PANEL_WATTS);
  
  // kWp REAL (baseado no número real de painéis)
  const kwpReal = (panels * PANEL_WATTS) / 1000;
  
  // Economia
  const economy = consumptionKwh * TARIFF;
  const annualEconomy = economy * 12;
  
  // Retorno (ROI)
  const roiMonths = Math.round((kwpReal * COST_PER_KWP) / economy);

  return (
    <section id="calculator" className="py-24 bg-[#0F1E3D] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Simule sua <span className="text-secondary">Economia</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Descubra o potencial do sol para reduzir sua conta de energia.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
            <div className="space-y-10">
              {/* Toggle Mode */}
              <div className="flex justify-center">
                <div className="bg-white/10 p-1 rounded-2xl flex gap-1">
                  <button
                    onClick={() => { setMode('kwh'); setCalculated(false); }}
                    className={`px-6 py-2 rounded-xl font-bold transition-all duration-300 ${mode === 'kwh' ? 'bg-secondary text-primary' : 'hover:bg-white/5'}`}
                  >
                    Uso em kWh
                  </button>
                  <button
                    onClick={() => { setMode('reais'); setCalculated(false); }}
                    className={`px-6 py-2 rounded-xl font-bold transition-all duration-300 ${mode === 'reais' ? 'bg-secondary text-primary' : 'hover:bg-white/5'}`}
                  >
                    Valor em R$
                  </button>
                </div>
              </div>

              {/* Slider & Input */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
                <div className="md:col-span-3 space-y-4">
                  <div className="flex justify-between font-bold text-xl">
                    <span>{mode === 'kwh' ? 'Consumo Mensal' : 'Valor da Conta'}</span>
                    <span className="text-secondary">
                      {mode === 'kwh' ? `${value} kWh` : `R$ ${value.toLocaleString('pt-BR')}`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={mode === 'kwh' ? 100 : 150}
                    max={mode === 'kwh' ? 2500 : 3500}
                    step={50}
                    value={value}
                    onChange={(e) => { setValue(Number(e.target.value)); setCalculated(false); }}
                    className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer accent-secondary"
                  />
                </div>
                <div className="md:col-span-1">
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => { setValue(Number(e.target.value)); setCalculated(false); }}
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-2xl font-black text-center focus:border-secondary outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleCalculate}
                disabled={isCalculating}
                className="w-full bg-secondary text-primary py-5 rounded-2xl font-black text-xl shadow-xl hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isCalculating ? (
                  <Loader2 className="animate-spin" size={28} />
                ) : (
                  <>
                    Calcular Agora
                    <Calculator size={28} />
                  </>
                )}
              </button>

              {/* Result Area */}
              {calculated && (
                <div className="pt-10 border-t border-white/10 space-y-8 transition-all duration-500 ease-in-out">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <ResultCard 
                      icon={<Zap size={20} />} 
                      label="Potência" 
                      value={`${kwpReal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} kWp`} 
                    />
                    <ResultCard 
                      icon={<Calculator size={20} />} 
                      label="Painéis" 
                      value={`${panels} unid.`} 
                    />
                    <ResultCard 
                      icon={<TrendingUp size={20} />} 
                      label="Economia" 
                      value={`R$ ${economy.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}`} 
                    />
                    <ResultCard 
                      icon={<Clock size={20} />} 
                      label="Retorno" 
                      value={`${roiMonths} meses`} 
                    />
                  </div>

                  <div className="bg-secondary/10 border border-secondary/30 rounded-3xl p-8 text-center space-y-6">
                    <p className="text-xl font-bold">
                      Economia estimada de <span className="text-secondary">R$ {annualEconomy.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</span> por ano!
                      <br/>
                      <span className="text-sm font-medium text-gray-400 mt-2 block">
                        Sistema de {kwpReal.toLocaleString('pt-BR')} kWp com {panels} painéis de 585W.
                      </span>
                    </p>
                    <button
                      onClick={scrollToForm}
                      className="inline-flex items-center gap-3 bg-secondary text-primary px-10 py-4 rounded-2xl font-black text-xl hover:bg-white transition-all duration-300 shadow-xl"
                    >
                      Solicitar Orçamento Gratuito
                      <ArrowRight size={24} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="bg-white p-6 rounded-[2rem] text-primary shadow-xl border-b-4 border-secondary">
      <div className="text-secondary mb-2">{icon}</div>
      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{label}</p>
      <p className="text-xl font-black">{value}</p>
    </div>
  );
}
