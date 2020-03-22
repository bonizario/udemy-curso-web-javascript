const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13,
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true, // pode ser listado em object.keys
  writable: false, // não pode ser alterado
  value: '01/01/2019'
}) // Definir caracteristicas da propriedade a ser atribuida

pessoa.dataNascimento = '01/01/2017' // vai continuar 2019 pois não é writable
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) // é possível listar

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // primeiro parametro recebe os atributos dos demais objetos
// objeto de destino tem seus valores sobrescritos a: 1 => a: 4
console.log(obj)

Object.freeze(obj) // impede realizar mudanças em obj
obj.c = 1234
console.log(obj)