let dobro = function (a) {
    return 2 * a
}
// Função Arrow sempre é anônima, para chamá-la é necessário armazená-la em uma constante/variável
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // Retorno implícito quando retiramos o corpo da função { }
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // Retorno implícito, sem parâmetros
ola = _ => 'Olá' // Possui um parâmetro porém em JS não é necessário passá-lo
console.log(ola())