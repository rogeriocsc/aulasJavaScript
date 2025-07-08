function calcular() {
    let anoA = window.document.querySelector('#anoAt')
    let anoN = window.document.querySelector('#anoNasc')
    let res = document.getElementById('resposta')
    let anoAtual = Number(anoA.value)
    let anoNasc = Number(anoN.value)
   let idade = anoAtual - anoNasc
    res.innerHTML = `Em ${anoAtual} você terá ${idade} anos.<br>`
    if (idade >= 21) {
        res.innerHTML = `Em ${anoAtual} você terá ${idade} anos.<br> Com esta idade já terá atingido a maioridade!`
    }
}