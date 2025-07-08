let prod = window.document.getElementById('iprod')
let prec = window.document.getElementById('ipreco')
let oper = window.document.getElementById('operacao')
let res = window.document.getElementById('resposta')
let desconto = undefined
let valorPromocional = undefined

function verificar() {
    if (prod.value.length == 0 || prec.value.length == 0 || oper.value.length == 0) {
        window.alert('Informe os Campos!')
        window.location.reload()
    } 
}

function calcular() {
    verificar()
    let produto = (prod.value)
    let preco = Number(prec.value)
    let op = (oper.value)
    switch (op) {
        case 'A':
            desconto = (preco * 5) / 100
            valorPromocional = preco - desconto
            break;
        case 'B':
            desconto = (preco * 10) / 100
            valorPromocional = preco - desconto
            break;
        case 'C':
            desconto = (preco * 15) / 100
            valorPromocional = preco - desconto
            break;
        case 'D':
            desconto = (preco * 20) / 100
            valorPromocional = preco - desconto
            break;
        default:
            res.innerHTML = '[ERRO] Valor Inválido!'
            break;
    }
    res.innerHTML = `Produto: ${produto} <br> Valor: R$ ${preco.toFixed(2)} <br> Valor com Desconto: R$ ${valorPromocional.toFixed(2)}`
}

