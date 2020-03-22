console.log(typeof Object) // função
console.log(typeof new Object()) // recebe um objeto

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente())

class Produto {} // ES 2015 (ES6)  // internamente é uma função
console.log(typeof Produto) // função
console.log(typeof new Produto()) // objeto