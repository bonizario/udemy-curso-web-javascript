// Usado em processamentos assíncronos
function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  });
}
// Promises aceitam APENAS 1 parâmetro
// then() é chamado quando a Promise for resolvida, quantas vezes quiser
falarDepoisDe(3, 'Que legal!')
  .then(frase => frase.concat(' ?!?'))
  .then(outraFrase => console.log(outraFrase))
  .catch(err => console.log(err));
// catch só é chamado uma única vez para fazer o tratamento do erro dado por reject()
