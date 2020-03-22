const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao() // No contexto em que foi definida, valor = 'Global'
} // Mesmo chamando ela dentro de outro contexto, ainda é armazenado o valor = 'Global'

exec()