import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "5581997003260";
  const message = "Olá! Gostaria de fazer um orçamento para energia solar.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group animate-bounce hover:animate-none"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" className="text-white" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-dark px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale Conosco!
      </span>
    </a>
  );
}
