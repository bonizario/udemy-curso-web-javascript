// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global' // Global para esse módulo

function fora() {
    const x = 'Local'
    function dentro() { // Essa função está no escopo de x = 'Local'
        return x
    }
    return dentro // Retorna o x que dentro() retornou
}

const minhaFuncao = fora()
console.log(minhaFuncao())