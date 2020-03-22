const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
} // CUIDADO COM O PONTO E VÍRGULA

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // Não retorna um erro, o resultado no if vai ser falso!