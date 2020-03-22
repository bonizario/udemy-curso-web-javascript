// pessoa => endereço de memória 123 => lá tem o objeto {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro' // a 'pessoa' continua apontando para o mesmo endereço
// o dado que está em 'pessoa' pode ser alterado
console.log(pessoa)

// pessoa => endereço de memória 456 => {...}
// pessoa = { nome: 'Ana' } // ao atribuir um outro objeto, o endereço muda e dá erro

Object.freeze(pessoa) // não é possível mexer no objeto mais

pessoa.nome = 'Maria' // após congelar não dá erro, apenas não é mais possível alterar
pessoa.end = 'Rua ABC'
delete pessoa.nome 

console.log(pessoa.nome)