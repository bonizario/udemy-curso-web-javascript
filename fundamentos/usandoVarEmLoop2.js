const funcs = []
// Var não tem escopo de função então retorna 10 sempre
for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()