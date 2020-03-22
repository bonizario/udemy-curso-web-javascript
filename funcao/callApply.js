function getPreco(imposto = 0, moeda = 'R$') { 
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
} // Para uma função normal, esse this acessa o escopo global, por isso 

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

// console.log(getPreco())
// Para uma função normal, esse this acessa o escopo global, por isso retorna R% NaN
// Se fizermos global.preco = 20 e global.desc = 0.1, retornaria R$ 18

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // 1ª forma de chamar uma função
console.log(produto.getPreco()) // 2ª forma de chamar uma função

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro)) // 3ª forma de chamar uma função
console.log(getPreco.apply(carro)) // 4ª forma de chamar uma função

console.log(getPreco.call(carro, 0.17, 'U$'))
console.log(getPreco.apply(carro, [0.17, 'U$'])) // Precisa de passar os parâmetros dentro de uma array!!