// Com class
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        return console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Gabriel')
p1.falar()


// Com factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('Isabela')
p2.falar()


// Com constructor function
function gerarPessoa(nome) {
    this.nome = nome
    
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new gerarPessoa('Altamiro')
p3.falar()

// // PRIMEIRA FORMA
// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }
    
//     falar() {
//         return console.log(`Meu nome é ${this.nome}.`)
//     }
// }
// const p1 = new Pessoa('Ana')
// p1.falar()


// // SEGUNDA FORMA
// const criarPessoa = nome => {
//     return {
//         falar: () => console.log(`Meu nome é ${nome}.`)
//     }
// }

// const p2 = criarPessoa('Alex')
// p2.falar()


// // TERCEIRA FORMA
// function gerarPessoa(nome) {
//     this.nome = nome

//     this.falar = () => console.log(`Meu nome é ${this.nome}.`)
// }
// const p3 = new gerarPessoa('Gabriel')
// p3.falar()