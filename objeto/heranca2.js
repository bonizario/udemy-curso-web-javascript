// Cadeia de protótipos (prototype chain)
Object.prototype.atrr0 = '0' // não faça isso em casa!
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
        this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}km/h de ${this.velMax}km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324 // Shadowing 324 sobreescreve 200
}

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, carro) // ferrari tem carro como seu protótipo
Object.setPrototypeOf(volvo , carro) // volvo tem carro como seu protótipo

console.log(ferrari) // por padrão, os atributos e funções locais do objeto são impressos
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())