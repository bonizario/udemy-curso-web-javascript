// Função sem retorno // Não foi usado let var ou const, js é fracamente tipada
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Somamos um valor numérico com um Undefined, retorna NaN
imprimirSoma(2, 3, 4, 5, 6, 7, 8) // Usa só os primeiros 2
imprimirSoma() // Retorna NaN 

// Função com retorno
function soma(a, b = 1) {
    return a + b
}
// soma(2, 3) Não retorna nada

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // Retorna NaN pois não há nada prédefinido para "a"