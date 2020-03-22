class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    } // Se acessar sem this, dá erro que nome não está definido no contexto de falar()
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => { // Vantagem no browser, não acessa this (que pode variar)
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    } 
}

const p2 = criarPessoa('João')
p2.falar()