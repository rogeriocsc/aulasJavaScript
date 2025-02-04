let anoA = window.document.querySelector('#anoAt')
let anoN = window.document.querySelector('#anoNasc')
let res = document.getElementById('resposta')

function calcular() {
    let anoAtual = (anoA.value)
    let anoNa = (anoN.value)
    let idade = null
    idade = anoAtual - anoNa
    res.innerHTML = `Em ${anoAtual} você terá ${idade} anos.<br>`
    if (idade >= 21) {
         res.innerHTML = `Em ${anoAtual} você terá ${idade} anos.<br> Com esta idade já terá atingido a maioridade!`
    }
}