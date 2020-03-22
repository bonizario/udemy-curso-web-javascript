const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Não retorna um erro, retorna vazio
console.log(escola.charCodeAt(3)) // Código relacionado a tabela unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // Vai do índice 1 para frente
console.log(escola.substring(0, 3)) // Vai do índice zero até o 3 sem incluir o 3

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))