import { useState, type FormEvent } from 'react';
import { CheckCircle, MessageSquare, Loader2 } from 'lucide-react';

export default function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    location: '',
    type: 'Residencial',
    consumption: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const validate = () => {
    const newErrors: Record<string, boolean> = {
      name: !formData.name,
      whatsapp: !formData.whatsapp,
      location: !formData.location
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleWhatsAppRedirect = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const { name, whatsapp, location, type, consumption, message: messageExtra } = formData;
    
    const mensagem = `🌞 *Novo Lead - MT Solar*\n\n👤 *Nome:* ${name}\n📱 *WhatsApp:* ${whatsapp}\n📍 *Cidade/UF:* ${location}\n🏠 *Tipo:* ${type}\n⚡ *Consumo:* ${consumption || '0'} kWh/mês\n💬 ${messageExtra || 'Sem mensagem'}\n---\n_Enviado pelo site mtsolarpe.com.br_`;

    const url = `https://wa.me/5581997003260?text=${encodeURIComponent(mensagem)}`;

    setTimeout(() => {
      window.open(url, '_blank');
      setStatus('success');
    }, 800);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      whatsapp: '',
      location: '',
      type: 'Residencial',
      consumption: '',
      message: ''
    });
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Solicite seu orçamento gratuito
          </h2>
          <p className="text-gray-500 text-lg font-medium">
            Nossa equipe responde em até <span className="text-secondary font-bold">2 horas</span>
          </p>
        </div>

        <div className="max-w-[600px] mx-auto">
          {status === 'success' ? (
            <div className="bg-emerald-50 border-2 border-emerald-100 p-12 rounded-[3rem] text-center">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} />
              </div>
              <h3 className="text-2xl font-black text-emerald-800 mb-4">✅ Mensagem enviada com sucesso!</h3>
              <p className="text-emerald-700 font-medium mb-8 leading-relaxed">
                Obrigado por entrar em contato, <span className="font-bold">{formData.name}</span>! Um de nossos atendentes vai retornar em breve pelo WhatsApp. Estamos ansiosos para ajudar você a economizar na conta de luz! ☀️
              </p>
              <button 
                onClick={resetForm}
                className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl hover:bg-dark transition-all shadow-xl"
              >
                Fazer nova simulação
              </button>
            </div>
          ) : (
            <div className="bg-light p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-2xl shadow-primary/5">
              <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary flex items-center gap-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João da Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full px-6 py-4 rounded-2xl bg-white border-2 outline-none transition-all ${errors.name ? 'border-red-500' : 'border-transparent focus:border-secondary'}`}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(81) 99999-9999"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      className={`w-full px-6 py-4 rounded-2xl bg-white border-2 outline-none transition-all ${errors.whatsapp ? 'border-red-500' : 'border-transparent focus:border-secondary'}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Cidade / Estado *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Recife/PE"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className={`w-full px-6 py-4 rounded-2xl bg-white border-2 outline-none transition-all ${errors.location ? 'border-red-500' : 'border-transparent focus:border-secondary'}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Tipo de Instalação</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-secondary outline-none transition-all appearance-none"
                    >
                      <option>Residencial</option>
                      <option>Comercial</option>
                      <option>Industrial</option>
                      <option>Escola</option>
                      <option>Usina de Solo</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Consumo (kWh/mês)</label>
                    <input
                      type="number"
                      placeholder="Ex: 500"
                      value={formData.consumption}
                      onChange={(e) => setFormData({...formData, consumption: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-secondary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Mensagem (Opcional)</label>
                  <textarea
                    rows={4}
                    placeholder="Como podemos te ajudar?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-secondary outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-secondary text-primary py-5 rounded-2xl font-black text-xl shadow-xl shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <Loader2 className="animate-spin" size={24} />
                  ) : (
                    <>
                      Solicitar Orçamento Gratuito
                      <MessageSquare size={24} />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
