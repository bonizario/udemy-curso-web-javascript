const pessoa = {
  saudacao: 'Bom dia!',
  falar() {
    console.log(this.saudacao); // this se refere ao atributo saudacao do objeto pessoa
  },
};
// SEM USAR this, DÁ ERRO! saudacao is not defined
pessoa.falar();
const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa); // significa que o this sempre será resolvido para pessoa
falarDePessoa();
