let val1 = document.querySelector('#ival1')
let val2 = document.querySelector('#ival2')
let res = document.querySelector('#resposta')

function media() {
    let valor1 = Number(val1.value)
    let valor2 = Number(val2.value)
    let media = (valor1 + valor2) / 2
    res.innerHTML = `A média entre os valores <strong> ${valor1} </strong> e <strong> 
    ${valor2} </strong> corresponde a <strong> ${media.toFixed(2)} </strong>`
}