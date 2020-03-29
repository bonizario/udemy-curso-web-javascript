// Tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return 'Outra string';
}
// partes: array com as strings que não foram interpoladas
// valores: array com as strings interpoladas
const aluno = 'Gui';
const situacao = 'Aprovado';
console.log(tag `${aluno} está ${situacao}.`);
