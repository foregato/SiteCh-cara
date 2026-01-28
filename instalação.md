# 🚀 Site de Espaços para Eventos - Guia Completo

## 📋 O que este sistema faz?

Este site replica TODAS as funcionalidades do seu bot de WhatsApp:
- ✅ Menu interativo com 6 opções
- ✅ Carrega fotos automaticamente das pastas (Imperial, Dunlop, Palmeira)
- ✅ Botão direto para WhatsApp
- ✅ Design profissional e responsivo
- ✅ Sistema de galeria com lightbox
- ✅ Informações completas de cada espaço

## 📁 Estrutura de Pastas

```
seu-projeto/
├── server.js              # Servidor Node.js
├── package.json           # Dependências
├── public/
│   └── index.html        # Site principal
└── fotos/                # ⭐ COLOQUE SUAS FOTOS AQUI
    ├── Imperial/         # Fotos do Espaço Imperial
    │   ├── foto1.jpg
    │   ├── foto2.jpg
    │   └── foto3.png
    ├── Dunlop/          # Fotos do Dunlop Eventos
    │   ├── foto1.jpg
    │   └── foto2.jpg
    └── Palmeira/        # Fotos da Chácara Palmeira Real
        ├── foto1.jpg
        └── foto2.jpg
```

## 🔧 Instalação Passo a Passo

### 1️⃣ Pré-requisitos

Você precisa ter o **Node.js** instalado. Verifique se já tem:

```bash
node --version
```

Se não tiver, baixe em: https://nodejs.org (versão LTS)

### 2️⃣ Instalar Dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

Isso vai instalar:
- `express` - Servidor web
- `cors` - Permitir requisições

### 3️⃣ Organizar as Fotos

1. Crie a estrutura de pastas (se não existir):
```bash
mkdir -p fotos/Imperial fotos/Dunlop fotos/Palmeira
```

2. Copie suas fotos para as pastas correspondentes:
   - Fotos do Imperial → `fotos/Imperial/`
   - Fotos do Dunlop → `fotos/Dunlop/`
   - Fotos da Palmeira → `fotos/Palmeira/`

**Formatos aceitos:** `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`

### 4️⃣ Configurar o WhatsApp

Abra o arquivo `public/index.html` e encontre esta linha (próximo ao final):

```javascript
const numeroWhatsApp = '5519999999999';
```

**Altere para seu número no formato:**
- `55` = Código do Brasil
- `19` = Seu DDD
- `999999999` = Seu número

**Exemplo:** Para (11) 98765-4321, use: `5511987654321`

### 5️⃣ Iniciar o Servidor

```bash
npm start
```

Você verá esta mensagem:

```
╔════════════════════════════════════════════╗
║   🚀 SERVIDOR INICIADO COM SUCESSO!       ║
╚════════════════════════════════════════════╝

📍 URL: http://localhost:3000
```

### 6️⃣ Abrir o Site

Abra seu navegador e acesse:

```
http://localhost:3000
```

## 🎯 Como Usar

### Adicionar/Remover Fotos

1. **Adicionar:** Simplesmente copie as fotos para a pasta correspondente
2. **Remover:** Delete a foto da pasta
3. **Atualizar site:** Recarregue a página (F5)

### Testar no Celular

1. Certifique-se de que seu computador e celular estão na **mesma rede Wi-Fi**
2. Descubra o IP do seu computador:
   - **Windows:** `ipconfig` (procure por "IPv4")
   - **Mac/Linux:** `ifconfig` (procure por "inet")
3. No celular, acesse: `http://SEU_IP:3000`
   - Exemplo: `http://192.168.1.100:3000`

## 🌐 Colocar o Site Online (Opcional)

### Opção 1: Vercel (Recomendado - Gratuito)

1. Crie conta em: https://vercel.com
2. Instale o Vercel CLI:
```bash
npm i -g vercel
```
3. Na pasta do projeto:
```bash
vercel
```
4. Siga as instruções

### Opção 2: Heroku (Gratuito)

1. Crie conta em: https://heroku.com
2. Instale o Heroku CLI
3. Execute:
```bash
heroku create nome-do-seu-site
git init
git add .
git commit -m "Initial commit"
git push heroku main
```

### Opção 3: Railway (Gratuito)

1. Crie conta em: https://railway.app
2. Conecte seu GitHub
3. Deploy automático

## 🔧 Comandos Úteis

```bash
# Iniciar servidor
npm start

# Iniciar com auto-reload (desenvolvimento)
npm run dev

# Parar servidor
Ctrl + C
```

## 📱 Funcionalidades do Site

### Menu Principal
- **Espaço Imperial** - Mostra fotos da pasta `fotos/Imperial/`
- **Dunlop Eventos** - Mostra fotos da pasta `fotos/Dunlop/`
- **Chácara Palmeira Real** - Mostra fotos da pasta `fotos/Palmeira/`
- **Datas Disponíveis** - Abre WhatsApp
- **Outras Perguntas** - Abre WhatsApp
- **Falar com Atendente** - Abre WhatsApp

### Galeria de Fotos
- Clique em qualquer foto para ampliar
- ESC para fechar
- Contador de fotos
- Loading animado

### Botão WhatsApp
- Fixo no canto inferior direito
- Clique para abrir conversa
- Mensagem pré-definida

## 🎨 Personalização

### Alterar Cores

Edite o arquivo `public/index.html`, procure por `:root` e modifique:

```css
:root {
    --primary: #1a1a2e;      /* Cor principal */
    --accent: #e94560;       /* Cor de destaque */
    --gold: #ffd700;         /* Dourado */
    --cream: #f8f4ec;        /* Fundo */
}
```

### Alterar Textos

Todos os textos estão no HTML e podem ser editados facilmente.

### Adicionar Mais Espaços

1. Crie nova pasta em `fotos/`
2. Adicione as fotos
3. Edite o `index.html` para adicionar novo card no menu
4. Crie novo modal seguindo o padrão dos existentes

## ❓ Solução de Problemas

### Fotos não aparecem

✅ **Verifique:**
1. As fotos estão nas pastas corretas? (`fotos/Imperial/`, etc)
2. O servidor está rodando? (deve mostrar a mensagem de sucesso)
3. Os nomes das pastas estão corretos? (Imperial, Dunlop, Palmeira - com maiúscula)
4. O formato das fotos é válido? (.jpg, .jpeg, .png, .gif, .webp)

### WhatsApp não abre

✅ **Verifique:**
1. Você alterou o número em `public/index.html`?
2. O número está no formato correto? (`5519999999999`)
3. O WhatsApp está instalado no dispositivo?

### Servidor não inicia

✅ **Verifique:**
1. Node.js está instalado? (`node --version`)
2. Dependências instaladas? (`npm install`)
3. Porta 3000 está livre? (tente fechar outros programas)

### Site não carrega

✅ **Verifique:**
1. Servidor está rodando?
2. URL correta? (`http://localhost:3000`)
3. Firewall não está bloqueando?

## 📊 Comparação: Bot vs Site

| Funcionalidade | Bot WhatsApp | Site |
|---|---|---|
| Menu interativo | ✅ | ✅ |
| Fotos das pastas | ✅ | ✅ |
| Informações dos locais | ✅ | ✅ |
| Link WhatsApp | ✅ | ✅ |
| Mapas | ✅ | ✅ |
| Valores | ✅ | ✅ |
| Design visual | ❌ | ✅ |
| Acesso web | ❌ | ✅ |
| Requer instalação | Sim | Não |

## 🔒 Segurança

- Não exponha informações sensíveis no código
- Use variáveis de ambiente para dados sensíveis
- Considere adicionar HTTPS se for hospedar online

## 📞 Suporte

Dúvidas? Entre em contato!

---

## 🎉 Pronto!

Agora você tem um site profissional que replica todas as funcionalidades do seu bot de WhatsApp!

**Estrutura final:**
```
✅ Servidor rodando
✅ Fotos organizadas por pastas
✅ WhatsApp configurado
✅ Site acessível
```

**Próximos passos:**
1. Adicione mais fotos
2. Personalize as cores
3. Teste no celular
4. Coloque online (opcional)

**Enjoy! 🚀**