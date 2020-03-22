// function declaration
// console.log(soma(3, 4)) // Funciona, mesmo antes de declarar a função
function soma(x, y) { // Dessa forma, as funções são pré-carregadas e depois executa o código
    return x + y
}

// function expression
// console.log(sub(3, 4)) // Não funciona
const sub = function (x, y) {
    return x - y
}

// named function expression
// console.log(mult(3, 4)) // Não funciona
const mult = function mult(x ,y) { // pouco usada
    return x * y
}