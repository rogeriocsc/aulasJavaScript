class Cadastro {
    constructor(pnome, pemail) {
        this.nome = pnome
        this.mail = pemail
    }

    getNome() {
        return this.nome
    }

    getmail() {
        return this.mail
    }

    setNome(nome) {
        this.nome = nome
    }

    setmail(mail) {
        this.mail = mail
    }
}

let cadastrados = []
let nom = window.document.getElementById('nome')
let email = window.document.getElementById('email')
let btn = window.document.getElementById('btn')
let res = window.document.getElementById('resp')

function addCadastrar() {
    res.innerHTML = ""
    cadastrados.forEach((c)=>{
        const div = document.createElement("div") 
        div.innerHTML = `Nome: ${c.getNome()}<br/>
        E-mail: ${c.getmail()}<br/>----------<br/>`
        res.appendChild(div)
    })
}

function cadastrar() {
    let nome = (nom.value)
    let mail = (email.value)
    let cad = new Cadastro(nome, mail)
    cadastrados.push(cad)
    nom.value = ""
    email.value = ""
    nom.focus()
    addCadastrar()
    console.log(cadastrados)
}
