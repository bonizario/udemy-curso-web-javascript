// Let possui escopo de bloco
let numero = 1
{
    let numero = 2
    console.log('dentro =', numero) // Ele procura no escopo interno de bloco, caso não tenha no escopo menor, pesquisa-se no escopo mais abrangente
}
console.log('fora =', numero)