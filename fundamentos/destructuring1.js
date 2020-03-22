// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// console.log(pessoa.nome)

const { nome, idade } = pessoa // não estou atribuindo pessoa a alguma coisa. Na vdd é tire alguém do objeto pessoa.
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // destructuring com chaves {} criando variaveis 'n' e 'i'
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // se não vier nada do objeto pessoa, assuma por padrão 'true' em bemHumorada
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// const { conta: { ag, num } } = pessoa // não há um atributo conta, nem ag nem num dentro de conta
// console.log(ag, num) // não é possível desestruturar 