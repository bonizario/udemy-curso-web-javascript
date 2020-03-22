const [a] = [10]
console.log(a)

const [ n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // segue a ordem ignorando os elementos 2 e 4
console.log(n1, n3, n5, n6) // n6 seria undefined, mas há um valor padrão

const [, [, nota, nota2]] = [[, 8, 8], [9, 6, 8]] // ignora o primeiro elemento. vai pro segundo. ignora o primeiro elemento. pega o segundo. pega o terceiro
console.log(nota, nota2)