class Produto {
    constructor(pnome, pcategoria) {
        this.nome = pnome
        this.categoria = pcategoria
        this.marca = "Própria"
        this.cor = "Preto"
        this.alerta = false
    }   

    disponivel() {
        console.log("Estoque Disponível!")
        console.log(this.alerta = false)
        console.log("...........................")
    }

    zerado() {
        console.log("Alerta! Estoque Zerado!")
        console.log(this.alerta = true)
        console.log("...........................")
    }

    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Categoria: ${this.categoria}`)
        console.log(`Marca: ${this.marca}`)
        console.log(`Cor: ${this.cor}`)
    }
}

let prod1 = new Produto("Fone De Ouvido", "Eletrônicos")
let prod2 = new Produto("Caixas De Som 2.0", "Eletrônicos")
let prod3 = new Produto("Pendrive USB", "Eletrônicos")
let prod4 = new Produto("Cartão de Memória", "Eletrônicos")
let prod5 = new Produto("Cabo USB", "Eletrônicos")
prod1.info()
prod1.disponivel()

prod2.info()
prod2.zerado()

prod3.info()
prod3.disponivel()

prod4.info()
prod4.zerado()

prod5.info()
prod5.disponivel()


