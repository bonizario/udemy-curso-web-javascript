const funcs = []
// Para cada repetição, o i tem escopo de bloco e vai apontar para os valores incrementados
for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()