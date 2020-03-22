// par nome/valor
const saudacao = 'Opa' // contexto léxico 1 (é o local físico em que a variável foi definida) poderia ser definida no browser window global
// poderia colocar var ou let no lugar de const
function exec() {
    const saudacao = 'Falaaa' // conxtexto léxico 2 (local onde foi definida)
    return saudacao  // esse saudacao é procurado no contexto 'menor', se nao achar nada, procura em um contexto maior
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal', // poderiam haver chaves com o mesmo nome das de cima, é um outro contexto
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)