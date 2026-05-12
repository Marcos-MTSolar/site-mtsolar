# MT Solar - Site Institucional

Este é o site institucional da MT Solar, construído com React, Vite, TypeScript e Tailwind CSS 4.

## 🚀 Como Executar Localmente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## 📦 Instruções de Deploy

### 1. Build de Produção
Gere a pasta `dist/` com o comando:
```bash
npm run build
```

### 2. Deploy na Vercel
1. Faça o push do código para o seu repositório no GitHub.
2. Acesse [vercel.com](https://vercel.com) e importe o repositório.
3. Certifique-se de que o **Framework Preset** está como `Vite`.
4. Clique em **Deploy**.

### 🌐 3. Configuração de Domínio
No painel da Vercel, vá em **Settings > Domains** e adicione:
- `mtsolarpe.com.br`
- `www.mtsolarpe.com.br`

### ⚙️ 4. Configuração DNS (Registro.br)
No painel do Registro.br, configure os seguintes apontamentos:

| Tipo | Nome | Valor |
| :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

*O SSL será gerado automaticamente pela Vercel em aproximadamente 5 minutos após a propagação do DNS.*

---

© 2025 MT Solar — Energia renovável.
