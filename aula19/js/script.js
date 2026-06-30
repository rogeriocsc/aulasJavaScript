class Cadastro {
    constructor(nome, email) {
        this.nome = nome
        this.email = email
    }

    getNome() {
        return this.nome
    }

    getMail() {
        return this.email
    }

    setNome(nome) {
        this.nome = nome
    }

    setMail(email) {
        this.email = email
    }
}

const cadastrados = []
const inputNome = document.getElementById('name')
const inputEmail = document.getElementById('mail')
const res = document.getElementById('resp')

function addCadastrar() {
    res.innerHTML = ""
    cadastrados.forEach((c)=>{
        const div = document.createElement("div") 
        div.innerHTML = `Nome: ${c.getNome()} <br/>
        E-mail: ${c.getMail()} <hr>`
        res.appendChild(div)
    })
}

function cadastrar() {
    const nome = inputNome.value.trim()
    const email = inputEmail.value.trim()
    // Verificação dos campos
    if (!nome || !email) {
        alert("Preencha todos os campos.")
        return
    }
    const cad = new Cadastro(nome, email)
    cadastrados.push(cad)
    inputNome.value = ""
    inputEmail.value = ""
    inputNome.focus()
    addCadastrar()
    console.log(cadastrados)
}
