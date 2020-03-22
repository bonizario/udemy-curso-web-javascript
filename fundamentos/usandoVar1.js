{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123 // Essa variável só é visível no escopo da função definida
    console.log(local)
}

teste()
// console.log(local) local não está definida

