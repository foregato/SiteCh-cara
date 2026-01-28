# ⚡ INÍCIO RÁPIDO - 5 Minutos

Siga estes passos para ter seu site funcionando rapidamente:

## 📦 1. Instalar (1 minuto)

```bash
npm install
```

## 🎨 2. Setup Automático (30 segundos)

```bash
npm run setup
```

Isso vai criar automaticamente:
- ✅ Estrutura de pastas
- ✅ Arquivos de configuração
- ✅ Instruções nas pastas

## 📸 3. Adicionar Fotos (2 minutos)

Copie suas fotos para as pastas:

```
fotos/
├── Imperial/     ← Suas fotos aqui
├── Dunlop/       ← Suas fotos aqui
└── Palmeira/     ← Suas fotos aqui
```

**Dica:** Arraste e solte as fotos nas pastas!

## 💬 4. Configurar WhatsApp (1 minuto)

Abra: `public/index.html`

Procure por (linha ~660):
```javascript
const numeroWhatsApp = '5519999999999';
```

Altere para seu número:
```javascript
const numeroWhatsApp = '5511987654321';  // Seu número aqui
```

**Formato:** `55` + `DDD` + `número` (sem espaços)

## 🚀 5. Iniciar (30 segundos)

```bash
npm start
```

## 🌐 6. Acessar

Abra no navegador:
```
http://localhost:3000
```

---

## ✅ PRONTO!

Seu site está funcionando! 🎉

### 📱 Ver no celular?

1. Descubra o IP do seu computador
2. No celular (mesma rede Wi-Fi): `http://SEU_IP:3000`

### 🌐 Colocar online?

Veja o arquivo `INSTALACAO.md` seção "Colocar o Site Online"

### ❓ Problemas?

Veja o arquivo `INSTALACAO.md` seção "Solução de Problemas"

---

## 🎯 Resumo dos Comandos

```bash
# Setup inicial (só uma vez)
npm install
npm run setup

# Copiar fotos nas pastas
# fotos/Imperial/, fotos/Dunlop/, fotos/Palmeira/

# Configurar WhatsApp em public/index.html

# Iniciar servidor
npm start

# Acessar
# http://localhost:3000
```

**Tempo total:** ~5 minutos ⏱️

---

## 📋 Checklist

- [ ] Node.js instalado
- [ ] Dependências instaladas (`npm install`)
- [ ] Setup executado (`npm run setup`)
- [ ] Fotos adicionadas nas pastas
- [ ] WhatsApp configurado
- [ ] Servidor iniciado (`npm start`)
- [ ] Site acessível (`http://localhost:3000`)

---

**Tudo funcionando?** Agora é só adicionar mais fotos e personalizar! 🎨

**Precisa de ajuda?** Veja `INSTALACAO.md` para guia completo.