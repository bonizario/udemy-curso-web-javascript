let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // Contexto do Node. No browser o 'global' é o window.

const obj = {}
comparaComThis = comparaComThis.bind(obj) // this vai apontar para obj e não mais para global
comparaComThis(global) // Não aponta mais para global
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
// O this dessa função é o módulo atual, não aponta para global
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // A arrow function permanece apontando para o contexto no qual a função foi feita, NÃO aponta para o objeto
comparaComThisArrow(module.exports) // Mesmo com o bind, this permanece referenciando o contexto na qual a arrow func foi escrita