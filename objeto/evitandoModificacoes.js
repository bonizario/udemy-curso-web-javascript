// Object.preventExtensions impede criar atributos, dá para excluir
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' // Possível modificar
produto.descricao = 'Borracha escolar branca' // Impossível adicionar
delete produto.tag // Possível excluir
console.log(produto)

// Object.seal impede adicionar atributos ou excluir, possível modificar
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // Impossível adicionar
delete pessoa.nome // Impossível deletar
pessoa.idade = 29 // Possível modificar
console.log(pessoa)

// Object.freeze = selado + valores constantes impossível adicionar, excluir ou modificar
