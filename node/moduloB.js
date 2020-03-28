const a = 2; // Visível apenas no módulo

module.exports = {
  bomDia: 'Bom dia',
  boaNoite() {
    return 'Boa noite';
  },
};
