const tecnologias = new Map();
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

console.log(tecnologias.react);
console.log(tecnologias.get('react').framework);
// Map aceita chaves diferenciadas
const chavesVariadas = new Map([
  [function () { }, 'Função'],
  [{}, 'Objeto'],
  [123, 'Número'],
]);

chavesVariadas.forEach((v1, ch) => {
  console.log(ch, v1);
});
// Verifica se o Map contém 123
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.delete(123));
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);
// Map não aceita repetições em chaves
chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b');
chavesVariadas.set(456, 'b');
console.log(chavesVariadas);
