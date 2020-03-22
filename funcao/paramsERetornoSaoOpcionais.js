function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2)) // NaN não é maior que 20, vai para else
console.log(area()) // NaN novamente
console.log(area(2, 3, 17, 22, 44)) // Parâmetros extras não dão erro, são ignorados
console.log(area(5, 5)) // O retorno da função é undefined