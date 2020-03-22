function tratarErroELancar(erro) {
    // throw new Error('mensagem')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // se ocorrer um erro no try, vai pro catch, é executado
        tratarErroELancar(e)
    } finally {
        console.log('final') // independente do que acontecer o finally será chamado de qualquer forma
    }
} // evite mostrar detalhes de infraestrutura ou mensagens em outra língua

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)