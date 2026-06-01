# RESUMO MESTRE: Site Institucional MT Solar

## 1. Objetivo Principal
Desenvolver e estabilizar um site institucional de alta conversão para a MT Solar, focado na região Nordeste (PE/AL/PB), integrando ferramentas de simulação solar, captura de leads estruturada e branding profissional.

## 2. Decisões Técnicas
*   **Performance vs Animação**: Priorização de transições CSS puras em vez de bibliotecas de animação pesadas (como Framer Motion) para evitar conflitos de reconciliação do DOM.
*   **Fluxo de Conversão**: O CTA da calculadora não redireciona direto para o WhatsApp, mas sim para o formulário de lead (`#contato`) para garantir a coleta de dados antes do atendimento.
*   **Lead Tracking**: Todas as mensagens de WhatsApp geradas pelo site possuem parâmetros `text` codificados com informações de origem ("Vim pelo site mtsolarpe.com.br").
*   **Arquitetura de Estado**: Uso de estados simples e robustos (`useState`) para gerenciar formulários e cálculos, evitando "telas brancas".

## 3. Regras e Padrões Definidos
*   **Cores Branding**: 
    *   Primária (Azul): `#1B2F5E` (fundo do rodapé e seções escuras).
    *   Secundária (Amarelo): `#F5A623` (detalhes, ícones e destaques).
    *   WhatsApp (Verde): `#25D366` (botões de ação direta).
*   **Fórmulas Fotovoltaicas (Nordeste)**:
    *   Irradiação Média (HSP): 5.0h.
    *   Fator de Perdas: 0.80.
    *   Tarifa Média: R$ 0.85/kWh.
    *   Potência Módulo: 585Wp.
    *   Custo Estimado: R$ 4.200,00 por kWp.
*   **Branding no Rodapé**: Logos sobre fundos escuros devem ter fundo branco (`background: white`, `borderRadius: 8px`) para legibilidade.

## 4. Estrutura de Arquivos Principal
*   `src/sections/Hero.tsx`: Seção principal com mensagem de conversão.
*   `src/sections/SolarCalculator.tsx`: Calculadora estabilizada com lógica de kWp Real.
*   `src/sections/LeadForm.tsx`: Captura de leads com formatação de mensagem para WhatsApp.
*   `src/sections/AboutUs.tsx`: Conteúdo institucional (Missão, Visão, Valores).
*   `src/components/Header.tsx` & `Footer.tsx`: Branding e navegação global.
*   `src/components/WhatsAppButton.tsx`: Botão flutuante com ícone SVG robusto.

## 5. Pendências
*   [ ] SEO: Revisar meta-tags de descrição e títulos para busca orgânica local (Recife/Jaboatão).
*   [ ] Performance: Otimizar o tamanho da imagem da logo (`logo-mtsolar.png`) para carregamento instantâneo.
*   [ ] Testes Mobile: Validar a experiência de rolagem da calculadora no iOS (Safari).

## 6. Problemas Resolvidos
*   **Crash "Tela Branca"**: Eliminado ao remover o `framer-motion` e manipulações diretas de DOM na calculadora.
*   **Ícone WhatsApp Sumindo**: Resolvido trocando `lucide-react` por SVG inline no botão flutuante.
*   **Erro de Dimensionamento**: Corrigido para usar "kWp Real" (baseado no número real de painéis) em vez do teórico.
*   **Endereço Não Navegável**: Transformado em link direto para o Google Maps no rodapé.
*   **Mensagens Vazias**: Implementado `encodeURIComponent` para todas as URLs de redirecionamento.

## 7. Restrições Importantes
*   **Ambiente**: O projeto reside em `c:\Users\aurel\Downloads\MTsolar\Site-Institucional`. Não confundir com o ERP (`Gest-o-MTSolar`).
*   **Git**: Sempre rodar `npm run build` antes de realizar o push para garantir que nenhuma regressão de TypeScript foi introduzida.
*   **Imagens**: Não utilizar placeholders genéricos; a logo oficial deve estar sempre em `src/assets/logo-mtsolar.png`.

## 8. Tecnologias Utilizadas
*   **Core**: React 18, TypeScript, Vite.
*   **Estilização**: Tailwind CSS.
*   **Ícones**: Lucide React + Custom SVGs.
*   **Deployment**: Vercel (Configurado via GitHub).

## 9. HISTÓRICO DE ALTERAÇÕES
*   **O que foi feito**: Substituição do fundo da seção Hero pela imagem `Usina.jpg` com aplicação de overlay escuro de cor `rgba(27, 47, 94, 0.72)`.
*   **Data e hora da alteração**: 01/06/2026 às 10:18 (Horário Local)
*   **Arquivos modificados**:
    *   `src/sections/Hero.tsx`

*   **O que foi feito**: Criação da seção de FAQ (`src/sections/FAQ.tsx`) com acordeões usando transições CSS puras e registro no `src/App.tsx`.
*   **Data e hora da alteração**: 01/06/2026 às 10:21 (Horário Local)
*   **Arquivos modificados**:
    *   `src/sections/FAQ.tsx`
    *   `src/App.tsx`

*   **O que foi feito**: Criação da seção de depoimentos (`src/sections/Testimonials.tsx`) com estrelas e cards translúcidos, e registro no `src/App.tsx`.
*   **Data e hora da alteração**: 01/06/2026 às 10:23 (Horário Local)
*   **Arquivos modificados**:
    *   `src/sections/Testimonials.tsx`
    *   `src/App.tsx`


