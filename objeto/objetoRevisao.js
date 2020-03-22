// Coleção dinâmica de pares chave e valor
const produto = new Object();
produto.nome = 'Cadeira';
produto['Marca do produto'] = 'Genérica'; // Recomenda-se não colocar identificadores com espaços
produto.preco = 220;

console.log(produto);

delete produto.preco;
delete produto['Marca do produto'];
console.log(produto);

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123,
    },
  },
  condutores: [
    {
      nome: 'Junior',
      idade: 19,
    },
    {
      nome: 'Ana',
      idade: 42,
    },
  ],
  calcularValorSeguro: function() {
    // ...
  },
};

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante';
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores); // Foi deletado, carro existe, condutores não. Retorna undefined
// console.log(carro.condutores.length) // Dá erro, condutores não existe, não é possível acessar após
