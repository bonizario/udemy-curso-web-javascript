function soma() { // Não recebe nenhum parâmetro, mas é possível passar parâmetros
    let soma = 0
    for (let i in arguments) { // arguments é uma array interna de uma função que tem todos os argumentos que foram passados 
        soma += arguments[i] // let i in arguments pega o índice, arguments[i] pega o valor
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste")) // Concatenou a string no fim, + é operador de strings
console.log(soma('a', 'b', 'c')) // soma inicial é 0, então concatena-se a b e c com 0