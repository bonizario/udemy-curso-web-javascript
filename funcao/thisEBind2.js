function Pessoa() {
  this.idade = 0;

  const self = this; // Nessa linha o this é o objeto Pessoa e essa constante não mudará
  setInterval(
    function() {
      self.idade++; // Nesse caso o this.idade não aponta para o objeto Pessoa, pois quem está disparando a função é um temporizador
      console.log(self.idade);
    } /*.bind(this) funciona também */,
    1000
  ); // A cada 1000 milissegundos essa função anônima que foi passada como parâmetro para setInterval vai ser disparada
}

new Pessoa();
