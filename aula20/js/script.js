class Produto {
    constructor(pnome, pcategoria) {
        this.nome = pnome
        this.categoria = pcategoria
        this.marca = "Própria"
        this.cor = "Preto"
        this.alerta = false
    }   

    estoqueDisponivel() {
        console.log("Estoque Disponível!")
        console.log(this.alerta = false)
        console.log("...........................")
    }

    estoqueZerado() {
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
prod1.estoqueDisponivel()

prod2.info()
prod2.estoqueZerado()

prod3.info()
prod3.estoqueDisponivel()

prod4.info()
prod4.estoqueZerado()

prod5.info()
prod5.estoqueDisponivel()


