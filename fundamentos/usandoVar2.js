// Não existe escopo de bloco para Var, apenas função
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)