function Pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000) // Dispara a cada 1 segundo
}

new Pessoa // Instanciar o objeto Pessoa