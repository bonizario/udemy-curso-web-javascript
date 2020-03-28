console.log(this === global);
console.log(this === module);
console.log(this === module.exports);
console.log(this === exports);

function logThis() {
  console.log('Dentro de uma função...');
  console.log(this === exports); // Fora da função aponta para o module.exports, dentro não aponta
  console.log(this === module.exports);
  console.log(this === global); // Dentro de uma função this aponta para global
}

logThis();
