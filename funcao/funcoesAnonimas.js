const soma = function (x, y) { // Função anônima sem nome
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) // Operação padrão é a soma
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
}) // Passando uma função anônima como parâmetro de outra função
imprimirResultado(3, 4, (x, y) => x * y) // Função arrow

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()