function rand([min = 0, max = 1000]) { // perceba que usamos [] nesse caso
    if (min > max) [min, max] = [max, min] // usando operador destructuring para criar uma array com ordem inversa a partir de dois atributos min e max
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
// console.log(rand()) // não dá para desestruturar algo de undefined ou null