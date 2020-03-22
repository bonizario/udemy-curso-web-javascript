// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) { // Nessa estratégia, zero vai retornar false e vai assumir valor 1
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c // Não vai ser null ou undefined
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// Estratégias 2, 3, 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // Existe algo no índice 1 em arguments? Se existir, pegue seu valor, se não, pegue valor padrão 1
    c = isNaN(c) ? 1 : c // Se for NaN, pega valor padrão 1, se for número pegue o valor c
    return a + b + c 
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c  
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
// c = isNaN(c) ? 1 : c // É a forma old school mais segura
// usar o valor padrão do es2015 é a melhor estratégia