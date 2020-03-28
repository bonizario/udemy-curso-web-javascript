const fs = require('fs');

const caminho = `${__dirname}/arquivo.json`;

// Lendo de forma síncrona, cuidado com arquivos pesados
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// Lendo de forma assíncrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.port}`);
});

// Especificamente para .json
const config = require('./arquivo.json'); // Já retorna objeto
// SÍNCRONA
console.log(config.db); // Esse console.log é executado antes do assincrono

fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteúdo da pasta...');
  console.log(arquivos);
});
// __dirname representa o diretório atual em todos os arquivos do node
