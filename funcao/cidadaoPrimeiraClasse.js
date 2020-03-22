// Função em JS é First-Class Object (Citizens)
// Higher-order function
// Função pode ser tratada como um dado, podemos passá-la como parâmetro e retorná-la como resposta a uma função
// Função pode ser armazenada em uma variável, podemos fazer uma função dentro de outra função
// É possível aplicar princípios de programação funcional em JS!

// Criar de forma literal
function fun1() { } // O retorno é opcional, se não retornar nada ela retorna UNDEFINED

// Armazenar em uma variável
const fun2 = function () { } // Função anônima atribuída à constante fun2
// Se chamar o nome da constante com (), vai invocar a função
// Se chamar o nome da constante sem () com qualquer método/operação, vai invocar diretamente a função em si

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
// É mais comum armazenar a função em uma variável, mas é possível declarar dentro do array

console.log(array[0](2, 3)) // Chama a função de índice 0, passa os parâmetros

// Armazenar em um atributo de objeto

const obj = {}
obj.falar = function () { return 'Opa' } // É possível criar funções e armazená-las em atributos dinamicamente
console.log(obj.falar())

// Passar função como parâmetro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') }) // Essa função é passada como parâmetro
// Essa function só é executada dentro da função run, lá em fun()

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) { // Retorna uma terceira função, recebe um terceiro parâmemtro
        console.log(a + b + c) // Só então, são feitas operações com parâmetros
    }
}
// O resultado de soma é função, e recebe apenas um parâmetro
soma(2, 3)(4)
const cincoMais = soma(2, 3) // Dá para armazenar o resultado de soma em uma constante/variável
cincoMais(4) 