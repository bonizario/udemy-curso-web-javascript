// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(2, 3));

// Arrow Function (this não varia, nem mesmo com o bind())
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// Parâmetro default (undefined assume o padrão, null assume null)
function log(texto = 'Node') {
  console.log(texto);
}
log(undefined);
log(null);
log('Sou mais forte');

// Operador rest/spread
function total(...numeros) {
  let total = 0;
  numeros.forEach(n => total += n);
  return total;
}
console.log(total(2, 3, 4, 5));
