// CÓDIGO NÃO EXECUTÁVEL!!!

// Procedural 
processamento(valor1, valor2, valor3) // funções que manipulam dados

// OO
objeto = {
    valor1,
    valor2,
    valor3,
    processamento() {
        // ...
    }
}
// Foco passou a ser o objeto
objeto.processamento() // invoca a função a partir do objeto
// objeto funciona como uma cápsula para comportamentos e atributos

/* Princípios importantes
 * 1. Abstração
 *  Traduzir um objeto do mundo real de acordo com as necessidades
 * 2. Encapsulamento
 *  Detalhes de implementação escondidos, mostrar uma interface simples para interagir com o objeto
 *  E.g.: Como o motor do carro funciona, porque um carro tem mais cavalos de potência que outro, essas informações ficam encapsuladas no objeto Carro
 *        Lidamos apenas com a interface de comunicação entre o motorista e o Carro
 *        Carros com motores diferentes não influenciam na interface de comunicação, não é necessário adaptação
 *        Um carro que passa marcha com manivela e outro que passa com botão: interfaces diferentes é necessário adaptação
 *  Mudanças nos detalhes internos não requerem adaptação necessariamente
 *  Objetos que têm tudo de dentro exposto, dependem entre si e isso é ruim, torna a evolução do sistema complicada
 *  Encapsulando os detalhes, a chance de haver acoplamento é menor, boa parte do detalhe está interno
 * 3. Herança (prototype) 
 *  Relação 'tem um'
 *  Carro tem um motor, motor tem outras partes menores: composição de objetos
 *  Relação 'é um': geralmente herança
 *  Homem é um mamífero, mamífero é um animal: herança
 *  Civic é um carro, Ferrari é um carro
 *  As características do objeto mais genérico passam para os próximos objetos
 *  PRIORIZE COMPOSIÇÃO EM RELAÇÃO A HERANÇA (pode trazer confunsões no código)
 * 4. Polimorfismo
 *  Celular pode ser um iphone ou samsung
 *  classe Carro você é capaz uma Ferrari, Civic, Uno
 *  Há uma relação de herança
 *  Uma classe filha pode ser referenciada numa variável do tipo pai
 */