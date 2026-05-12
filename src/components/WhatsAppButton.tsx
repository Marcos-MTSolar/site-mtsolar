import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  const contacts = [
    { name: 'Atendimento Principal', number: '5581997003260', label: '(81) 99700-3260' },
    { name: 'Atendimento Comercial', number: '5581986349054', label: '(81) 98634-9054' },
  ];

  const message = "Olá! Vim pelo site mtsolarpe.com.br e gostaria de solicitar um orçamento de energia solar.";

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      {/* Contact Options */}
      {isOpen && (
        <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-10 duration-300">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={`https://wa.me/${contact.number}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white hover:bg-gray-50 text-primary px-5 py-3 rounded-2xl shadow-2xl border border-gray-100 transition-all hover:-translate-x-2 group"
            >
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary">{contact.name}</span>
                <span className="text-sm font-bold">{contact.label}</span>
              </div>
              <div className="bg-[#25D366] p-2 rounded-xl text-white">
                <MessageCircle size={20} />
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-primary text-white rotate-90' : 'bg-[#25D366] text-white animate-bounce hover:animate-none'
        }`}
      >
        {isOpen ? <X size={32} /> : (
          <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='white'>
            <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z'/>
            <path d='M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.135 1.527 5.887L.057 23.927l6.187-1.443A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.369l-.36-.214-3.722.868.936-3.62-.234-.373A9.818 9.818 0 1 1 12 21.818z'/>
          </svg>
        )}
      </button>
    </div>
  );
}
