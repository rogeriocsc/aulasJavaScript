function calcular() {
    let anoAt = window.document.querySelector('#anoAtual')
    let anoNasc = window.document.querySelector('#anoN')
    let res = document.getElementById('res')
    let anoAtual = (anoAt.value)
    let anoNa = (anoNasc.value)
    let idade = null
    idade = anoAtual - anoNa
    res.innerHTML = `Em ${anoAtual} você terá ${idade} anos.<br>`
    if (idade >= 21) {
         res.innerHTML = `Em ${anoAtual} você terá ${idade} anos.<br> Com esta idade já terá atingido a maioridade!`
    }
    
}