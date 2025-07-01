let anoA = window.document.querySelector('#anoAt')
let anoN = window.document.querySelector('#anoNasc')
let res = document.getElementById('resposta')
let idade = null

function calcular() {
    let anoAtual = Number(anoA.value)
    let anoNasc = Number(anoN.value)
    idade = anoAtual - anoNasc
    res.innerHTML = `Em ${anoAtual} você terá ${idade} anos.<br>`
    if (idade >= 21) {
        res.innerHTML = `Em ${anoAtual} você terá ${idade} anos.<br> Com esta idade já terá atingido a maioridade!`
    }
}