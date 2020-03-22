console.log('01)', '1' == 1)
console.log('02)', '1' === 1) // Estritamente iguais (o tipo precisa ser o mesmo)
console.log('03)', '3' != 3)
console.log('03)', '3' !== 3) // Estritamente diferentes (o tipo precisa ser diferente)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // Comparando endereço de memória, vai dizer que são falsos
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // Compara um valor numérico, ambos são iguais e estritamente iguais (true)

console.log('12)', undefined == null)
console.log('12)', undefined === null)