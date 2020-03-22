// Callback nada mais é que passar uma função e ela ser chamada quando um evento acontecer
// Nesse exemplo, o evento é o loop, quando ele encontra um novo elemento, dispara a função de novo e de novo
const fabricantes = ["Mercedes", "Audi", "BMW"]
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // forEach é uma função de array que chama para cada elemento da array a função imprimir

// fabricantes.forEach(function (a) {
//     console.log(a)
// }) // Esse 'a' vai ser cada elemento da array

fabricantes.forEach(fabricante => console.log(fabricante)) // fabricante é um elemento da array