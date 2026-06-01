import { useState } from 'react';

// Lista de perguntas e respostas para a seção de Dúvidas Frequentes (FAQ)
const faqItems = [
  {
    question: "Quanto tempo leva a instalação?",
    answer: "Em média 2 a 3 dias úteis para sistemas residenciais, após aprovação da concessionária."
  },
  {
    question: "O sistema funciona em dias nublados?",
    answer: "Sim. Os painéis geram energia com luz difusa, com redução de cerca de 20 a 30% da produção em dias nublados."
  },
  {
    question: "Qual a vida útil dos painéis solares?",
    answer: "Os painéis possuem garantia de performance de 25 anos, com degradação inferior a 0,5% ao ano."
  },
  {
    question: "Preciso de manutenção constante?",
    answer: "Não. A manutenção é simples: limpeza periódica dos painéis a cada 6 meses é suficiente na maioria dos casos."
  },
  {
    question: "Como é feito o financiamento?",
    answer: "Trabalhamos com as principais linhas de crédito do mercado, incluindo financiamento em bancos parceiros, com parcelas que cabem no seu bolso."
  },
  {
    question: "A MT Solar atende minha cidade?",
    answer: "Atendemos toda a região Nordeste, com foco em Pernambuco, Alagoas e Paraíba."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Alterna o estado de abertura de cada pergunta
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Título Centralizado na cor #1B2F5E */}
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-[#1B2F5E]">
          Dúvidas Frequentes
        </h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-lg md:text-xl font-bold text-[#1B2F5E] group-hover:text-[#F5A623] transition-colors duration-300 pr-4">
                    {item.question}
                  </span>
                  {/* Ícone de abrir/fechar na cor #F5A623 (+ que vira −) */}
                  <span className="text-2xl font-bold text-[#F5A623] transition-transform duration-300 w-6 h-6 flex items-center justify-center select-none">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                
                {/* Accordion com transição CSS pura */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed pb-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
