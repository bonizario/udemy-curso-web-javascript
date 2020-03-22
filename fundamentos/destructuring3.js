function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min // pega um numero aleatorio de 0 a 10 e soma 40 nesse exemplo
    return Math.floor(valor)
} // ao invés de usar objeto.min objeto.max usamos destructuring

const obj = {max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))
// console.log(rand()) // dá problema pois ele tentará desestruturar algo que está undefined ou null