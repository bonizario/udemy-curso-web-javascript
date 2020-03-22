// O 'Break' não influencia no If, ele influencia no Switch, no For e no While. 'Continue' funciona no For e no While
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x ==5) {
        break // O break não influencia no if, vai agir no bloco FOR
    }
    console.log(`${x} = ${nums[x]}`)
}
// break causa um desvio de fluxo para fora do laço corrente, continue interrompe a repetição corrente e vai para a próxima
for (y in nums) {
    if (y == 5) {
        continue // Pulou o índice 5!
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) { // Rótulo associado ao 'for'
    for (b in nums) {
        // if (a == 2 && b == 3) break // Dessa forma ele chama o break mais interno
        if (a == 2 && b == 3) break externo // Dessa forma ele chama o break mais EXTERNO
        console.log(`Par = ${a}, ${b}`)
    }
}
// NÃO USE ESSE TIPO DE ESTRUTURA! Fica bagunçado e nem um pouco elegante.
// Quebre essa estrutura em várias funções/métodos, evite desvios de fluxos.
console.log('Fim!')