function calcular() {
    let anoA = window.document.querySelector('#anoAt')
    let anoN = window.document.querySelector('#anoNasc')
    let res = document.getElementById('resposta')
    
     // Verifica se os campos estão vazios
    if (anoA.value.trim() === "" || anoN.value.trim() === "") {
        res.innerHTML = "<p>Por favor, preencha os Campos.</p>"
        anoA.focus()
        return
    }
    
    let anoAtual = Number(anoA.value)
    let anoNasc = Number(anoN.value)
    let idade = anoAtual - anoNasc
    res.innerHTML = `Em ${anoAtual} você terá ${idade} anos.<br>`
    if (idade >= 18) {
        res.innerHTML = `<p>Em ${anoAtual} você terá ${idade} anos.<br>
        Com esta idade já terá atingido a maioridade!</p>`
    } else {
        res.innerHTML = `<p>Em ${anoAtual} você terá ${idade} anos.<br>
        Ainda não terá atingido a maioridade.</p>`
    }
}