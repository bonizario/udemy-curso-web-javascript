const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor); // incremento em A é aplicado em B
// Para isso não ocorrer, usamos factory, cada require é uma instância da função exportada
contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);
