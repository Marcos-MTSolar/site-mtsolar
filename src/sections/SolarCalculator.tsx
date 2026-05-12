import { useState } from 'react';
import { Calculator, TrendingUp, Zap, Clock, ArrowRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type InputMode = 'kwh' | 'brl';

export default function SolarCalculator() {
  const [mode, setMode] = useState<InputMode>('kwh');
  const [value, setValue] = useState(500);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Constants
  const TARIFF = 0.75;
  const SUN_HOURS = 4.5;
  const DAYS = 30;
  const PANEL_WATTS = 550;
  const COST_PER_KWP = 3500;

  // Calculation Logic
  const calculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResult(true);
    }, 800);
  };

  const consumptionKwh = mode === 'kwh' ? value : value / TARIFF;
  const kwp = Number((consumptionKwh / (SUN_HOURS * DAYS)).toFixed(1));
  const panels = Math.ceil(kwp / (PANEL_WATTS / 1000));
  const monthlySavings = consumptionKwh * TARIFF * 0.90;
  const roiMonths = Math.ceil((kwp * COST_PER_KWP) / monthlySavings);

  return (
    <section id="calculator" className="py-24 bg-gradient-to-br from-[#0F1E3D] to-[#1B2F5E] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Descubra quanto você pode <span className="text-secondary">economizar</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Simule o tamanho do seu sistema e o tempo de retorno do seu investimento em segundos.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col gap-10">
              {/* Input Section */}
              <div className="space-y-8">
                <div className="flex justify-center">
                  <div className="bg-white/10 p-1.5 rounded-2xl flex gap-2">
                    <button
                      onClick={() => setMode('kwh')}
                      className={`px-6 py-2.5 rounded-xl font-bold transition-all ${mode === 'kwh' ? 'bg-secondary text-primary shadow-lg' : 'hover:bg-white/5'}`}
                    >
                      Informar em kWh
                    </button>
                    <button
                      onClick={() => setMode('brl')}
                      className={`px-6 py-2.5 rounded-xl font-bold transition-all ${mode === 'brl' ? 'bg-secondary text-primary shadow-lg' : 'hover:bg-white/5'}`}
                    >
                      Informar em R$
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 w-full space-y-4">
                      <div className="flex justify-between font-bold text-xl">
                        <span>{mode === 'kwh' ? 'Consumo Mensal' : 'Valor da Conta'}</span>
                        <span className="text-secondary">{mode === 'kwh' ? `${value} kWh` : `R$ ${value}`}</span>
                      </div>
                      <input
                        type="range"
                        min={mode === 'kwh' ? 100 : 150}
                        max={mode === 'kwh' ? 2000 : 3000}
                        step={mode === 'kwh' ? 50 : 50}
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer accent-secondary"
                      />
                    </div>
                    <div className="w-full md:w-48">
                      <input
                        type="number"
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-2xl font-black text-center focus:border-secondary outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={calculate}
                  disabled={isCalculating}
                  className="w-full bg-secondary text-primary py-5 rounded-2xl font-black text-2xl shadow-xl shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isCalculating ? (
                    <Loader2 className="animate-spin" size={28} />
                  ) : (
                    <>
                      Calcular Economia
                      <Calculator size={28} />
                    </>
                  )}
                </button>
              </div>

              {/* Results Section */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pt-12 border-t border-white/10 space-y-10"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { icon: <Zap size={24} />, label: 'Potência Total', value: `${kwp} kWp` },
                        { icon: <Calculator size={24} />, label: 'Nº de Painéis', value: panels },
                        { icon: <TrendingUp size={24} />, label: 'Economia Mensal', value: `R$ ${monthlySavings.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}` },
                        { icon: <Clock size={24} />, label: 'Retorno (ROI)', value: `${roiMonths} meses` },
                      ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2rem] border-2 border-secondary/50 text-primary shadow-xl">
                          <div className="text-secondary mb-4">{item.icon}</div>
                          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                          <p className="text-2xl font-black">{item.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-secondary/10 border border-secondary/30 rounded-3xl p-8 text-center">
                      <p className="text-lg font-bold mb-6">
                        Sistema estimado: <span className="text-secondary">{kwp} kWp</span> com <span className="text-secondary">{panels} painéis</span> de 550W.
                      </p>
                      <a
                        href="#contact"
                        className="bg-secondary text-primary px-10 py-5 rounded-2xl font-black text-xl hover:bg-white transition-all inline-flex items-center gap-3 group"
                      >
                        Quero um orçamento gratuito
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
