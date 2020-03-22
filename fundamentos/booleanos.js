let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log(!!'os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' ')) // || é operador lógico OU, dá true pois pelo menos 1 é true
console.log('' || null || 0 || 123 || 'epa') // retorna o primeiro valor verdadeiro

let nome = 'Lucas'
console.log(nome || 'Desconhecido')

let nome2 = ''
console.log(nome2 || 'Desconhecido')