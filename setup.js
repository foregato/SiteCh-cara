#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log(`
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   🎯 SETUP AUTOMÁTICO - ESPAÇOS PARA EVENTOS           ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
`);

// Criar estrutura de pastas
const pastas = [
    'fotos',
    'fotos/Imperial',
    'fotos/Dunlop',
    'fotos/Palmeira',
    'public'
];

console.log('📁 Criando estrutura de pastas...\n');

pastas.forEach(pasta => {
    const pastaPath = path.join(process.cwd(), pasta);
    if (!fs.existsSync(pastaPath)) {
        fs.mkdirSync(pastaPath, { recursive: true });
        console.log(`   ✅ Criado: ${pasta}/`);
    } else {
        console.log(`   ℹ️  Já existe: ${pasta}/`);
    }
});

// Criar arquivo .gitignore
console.log('\n📝 Criando .gitignore...\n');
const gitignoreContent = `
# Dependências
node_modules/
package-lock.json

# Logs
npm-debug.log*
*.log

# Sistema operacional
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo

# Fotos (opcional - remova esta linha se quiser versionar as fotos)
# fotos/
`;

fs.writeFileSync('.gitignore', gitignoreContent.trim());
console.log('   ✅ .gitignore criado');

// Criar README básico se não existir
if (!fs.existsSync('README.md')) {
    console.log('\n📄 Criando README.md...\n');
    const readmeContent = `# Espaços para Eventos

Site para divulgação de espaços para eventos.

## 🚀 Como usar

1. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

2. Adicione suas fotos nas pastas:
   - \`fotos/Imperial/\`
   - \`fotos/Dunlop/\`
   - \`fotos/Palmeira/\`

3. Configure seu número de WhatsApp em \`public/index.html\`

4. Inicie o servidor:
\`\`\`bash
npm start
\`\`\`

5. Acesse: http://localhost:3000

## 📖 Documentação completa

Veja o arquivo \`INSTALACAO.md\` para instruções detalhadas.
`;
    fs.writeFileSync('README.md', readmeContent);
    console.log('   ✅ README.md criado');
}

// Criar arquivo de exemplo nas pastas
console.log('\n📸 Criando arquivos de exemplo...\n');

const exemploContent = `
INSTRUÇÕES PARA ADICIONAR FOTOS
================================

1. Adicione suas fotos nesta pasta
2. Formatos aceitos: .jpg, .jpeg, .png, .gif, .webp
3. Você pode usar qualquer nome para os arquivos
4. As fotos aparecerão automaticamente no site

Exemplos:
- foto1.jpg
- espaco-frontal.png
- area-festa-01.jpeg

Depois de adicionar as fotos, delete este arquivo.
`;

['Imperial', 'Dunlop', 'Palmeira'].forEach(local => {
    const infoPath = path.join('fotos', local, '_COMO_ADICIONAR_FOTOS.txt');
    if (!fs.existsSync(infoPath)) {
        fs.writeFileSync(infoPath, exemploContent.trim());
        console.log(`   ✅ Instruções criadas em fotos/${local}/`);
    }
});

console.log(`
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   ✅ SETUP CONCLUÍDO COM SUCESSO!                       ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝

📋 PRÓXIMOS PASSOS:

1️⃣  Instale as dependências:
    npm install

2️⃣  Adicione suas fotos nas pastas:
    fotos/Imperial/
    fotos/Dunlop/
    fotos/Palmeira/

3️⃣  Configure o WhatsApp em:
    public/index.html (procure por "numeroWhatsApp")

4️⃣  Inicie o servidor:
    npm start

5️⃣  Acesse no navegador:
    http://localhost:3000

📖 Documentação completa: INSTALACAO.md

`);