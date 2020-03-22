function criarProduto(nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))

// Outra maneira
function criarProduto2(nome, preco, desconto = 0.1) {
    return {
        nome,
        preco,
        desconto
        }
}
console.log(criarProduto2('Notebook2', 2199.49, 0.3))