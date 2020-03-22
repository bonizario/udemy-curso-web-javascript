function teste1(num) {
    if(num > 7) // o uso do bloco é opcional para o uso do if, mas ele associa apenas a primeira sentença de código abaixo
        console.log(num)

    console.log('Final') // sempre é executada pois está fora do if
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // esse bloco de código não está associado ao if e sempre é executado
        console.log(num)
    } // NÃO USE ; NO BLOCO IF, não usar com as estruturas de controle
}

teste2(6)
teste2(8)