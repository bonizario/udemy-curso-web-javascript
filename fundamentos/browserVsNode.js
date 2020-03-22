let a = 3 // fica local dentro do arquivo

global.b = 123
console.log(global.b) // no Node ele equivale ao objeto window

console.log(this.a)
console.log(global.a) // no Node ele equivale ao objeto window

this.c = 456
this.d = false
this.e = 'teste'

console.log(this.c)

console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluca: sem var e let
abc = 3 // ela está sendo colocada diretamente no global do node, EVITE!!
console.log(global.abc)
// module.exports = { e: 456, f: false, g: 'teste' }