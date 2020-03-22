// Há várias formas de percorrer estruturas como array, melhores que for e for/in
const notas = [6.7, 7.4, 9.8, 8.1, 7.7] // Serão estudadas nos próximos capítulos
// O for/in não dá as notas, dá os índices
for (let i in notas) {
    console.log(`Nota = ${notas[i]}`)
}
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}
//LEMBRE DE USAR let PARA LIMITAR i E atributo AO LOOP
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}