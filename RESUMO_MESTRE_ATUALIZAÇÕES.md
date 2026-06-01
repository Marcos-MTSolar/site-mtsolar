# RESUMO MESTRE DE ATUALIZAÇÕES: Site Institucional MT Solar

## 1. Objetivo Principal do Projeto
Desenvolver, estabilizar e colocar em produção um site institucional de alta conversão para a MT Solar, com foco no mercado de energia solar da região Nordeste (PE/AL/PB). O site deve integrar funcionalidades essenciais como uma calculadora de simulação solar precisa (adaptada à realidade local), captura de leads estruturada (direcionando para formulário antes do WhatsApp) e um design profissional e responsivo que reflita a identidade da marca.

## 2. Decisões Técnicas Já Tomadas
*   **Priorização de Performance e Estabilidade**: Opção por utilizar transições CSS puras (Vanilla/Tailwind) em vez de bibliotecas pesadas de animação (como Framer Motion), mitigando gargalos de performance e prevenindo conflitos de reconciliação do DOM (erros de "tela branca").
*   **Estratégia de Captação (Fluxo de Conversão)**: O CTA principal (ex: da calculadora solar) não faz redirecionamento direto e imediato para o WhatsApp. Primeiro, o usuário é direcionado para a seção de formulário (`#contato`) para garantir a coleta dos dados do lead antes de iniciar o atendimento humano.
*   **Rastreabilidade de Leads (Lead Tracking)**: Todas as integrações com WhatsApp contêm parâmetros de texto (URL codificada via `encodeURIComponent`) para identificar a origem do contato (ex: "Vim pelo site mtsolarpe.com.br").
*   **Gerenciamento de Estado Simplificado**: Utilização de `useState` padrão do React para o controle de formulários e lógica da calculadora, garantindo robustez.

## 3. Regras e Padrões Definidos
*   **Identidade Visual e Branding (Paleta de Cores)**:
    *   **Primária (Azul)**: `#1B2F5E` (utilizada no fundo do rodapé, navbar e seções institucionais de destaque).
    *   **Secundária (Amarelo)**: `#F5A623` (utilizada em CTAs, botões, detalhes e ícones).
    *   **WhatsApp (Verde)**: `#25D366` (exclusivo para botões de ação e chat).
    *   **Logotipo**: Logos aplicadas sobre fundos escuros (como o rodapé) devem possuir formatação própria (ex: fundo branco, `borderRadius: 8px`, `padding`) para garantir legibilidade.
*   **Fórmulas da Calculadora Fotovoltaica (Padrão Nordeste)**:
    *   Horas de Sol Pico (HSP) / Irradiação Média: `5.0h`.
    *   Fator de Perdas do Sistema (PR): `0.80` (80% de eficiência).
    *   Tarifa Média de Energia: `R$ 0.85/kWh`.
    *   Potência Padrão por Módulo: `585Wp`.
    *   Custo Estimado de Instalação: `R$ 4.200,00` por kWp gerado.
    *   **Lógica de Dimensionamento**: O dimensionamento deve considerar o "kWp Real" (baseado na quantidade física e real de painéis que precisam ser instalados, com arredondamento para cima com `Math.ceil`), e não apenas o valor teórico matemático fracionado.

## 4. Estrutura de Arquivos Já Criada
A organização do repositório (`c:\Users\aurel\Downloads\MTsolar\Site-Institucional`) segue o padrão:
*   `src/sections/Hero.tsx`: Seção inicial de impacto, com proposta de valor e Call to Action principal.
*   `src/sections/SolarCalculator.tsx`: Módulo da calculadora de economia, estabilizado sem bibliotecas externas de animação e com a matemática regionalizada configurada.
*   `src/sections/LeadForm.tsx`: Seção de contato e captura estruturada de dados de potenciais clientes.
*   `src/sections/AboutUs.tsx` e `Services.tsx`: Páginas institucionais descrevendo Missão, Visão, Valores e detalhando os serviços.
*   `src/components/Header.tsx` e `Footer.tsx`: Elementos globais de navegação, branding e links úteis (como link direto para Google Maps no endereço).
*   `src/components/WhatsAppButton.tsx`: Componente de botão flutuante utilizando SVG inline (para evitar bugs de renderização).
*   `vercel.json`: Arquivo de configuração de deployment para Vercel.

## 5. Pendências
*   [ ] **Otimização de SEO**: Implementar/refinar meta-tags, descriptions e headers (H1, H2) com foco em SEO Local (ex: "energia solar em Recife, Jaboatão dos Guararapes").
*   [ ] **Performance de Assets**: Comprimir ou converter a logo principal (`logo-mtsolar.png`) para formatos modernos (WebP) para garantir um carregamento (LCP) quase instantâneo.
*   [ ] **Testes Cross-Browser/Mobile**: Realizar testes rigorosos do comportamento de rolagem e do layout da calculadora no Safari (iOS).

## 6. Problemas Já Resolvidos
*   **Crash de Renderização ("Tela Branca") na Calculadora**: Eliminado com a remoção da biblioteca `framer-motion` em locais críticos e impedindo manipulação direta e conflitante do DOM.
*   **Erro de Dimensionamento Subestimado**: O cálculo solar foi corrigido para usar a métrica de "kWp Real" calculada através do número inteiro de placas solares necessárias.
*   **Desaparecimento do Ícone do WhatsApp**: Resolvido ao substituir a renderização via `lucide-react` por um SVG embutido inline no `WhatsAppButton.tsx`.
*   **Links Quebrados (Endereço e WhatsApp)**: O endereço no rodapé foi atrelado a um link funcional do Google Maps; URLs do WhatsApp foram estabilizadas com o uso de `encodeURIComponent` para formatar os textos da mensagem.

## 7. Restrições Importantes
*   **Separação de Contextos**: O ambiente deste projeto institucional é `c:\Users\aurel\Downloads\MTsolar\Site-Institucional`. O código e os componentes **não devem** ser confundidos ou misturados com o sistema ERP interno (`Gest-o-MTSolar`).
*   **Validação de Build**: Sempre executar `npm run build` localmente antes de enviar para produção, assegurando que as tipagens do TypeScript e importações não quebrem o Vercel.
*   **Uso de Assets (Não usar Placeholders)**: É estritamente proibido o uso de imagens genéricas ou links externos temporários. A marca oficial (ex: `src/assets/logo-mtsolar.png`) deve ser usada nas implementações.

## 8. Tecnologias Utilizadas
*   **Frontend Framework**: React 18
*   **Linguagem**: TypeScript (verificação rigorosa de tipos)
*   **Bundler/Tooling**: Vite (performance e hot reload rápido)
*   **Estilização**: Tailwind CSS (utilitários css, design responsivo)
*   **Ícones**: Lucide React (geral) e Inline SVGs (casos específicos)
*   **Hospedagem e Deployment**: Vercel (CD/CI configurado)

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


