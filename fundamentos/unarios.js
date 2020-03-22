let num1 = 1
let num2 = 2

num1++ // forma pós fixada acrescenta 1 unidade
console.log(num1)
--num1 // forma pré fixada decrescenta 1 unidade (tem prioridade maior em relação a pós fixada, igual a soma e multiplicação na matematica)
console.log(num1)

console.log(++num1 === num2--) // o ++ foi executado antes da comparação e o -- executado após a comparação
console.log(++num1 === num2--) // deixe o código o mais simples possível, procure não incrementar durante uma comparação