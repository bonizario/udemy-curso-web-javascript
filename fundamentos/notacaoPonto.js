console.log(Math.ceil(6.1)) //floor trunca para baixo ceil para cima
// Math é um object, vc usa . para acessar uma função dentro de Math

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' É possível atribuir valores dessa forma
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome // usando a notação this. fica visível para fora
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira') 
const obj3 = new Obj('Mesa') 
console.log(obj2.nome)
console.log(obj3.nome)