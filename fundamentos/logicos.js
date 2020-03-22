function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // diferença simula um xor
    const manterSaudavel = !comprarSorvete // operador unário
    /* return { 
        comprarSorvete: comprarSorvete, 
        comprarTv50:comprarTv50,
        comprarTv32: comprarTv32, 
        manterSaudavel: manterSaudavel 
    } forma redundante */
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }  // forma reduzida de objeto  
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))