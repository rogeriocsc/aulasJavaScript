let prod = window.document.getElementById('iprod')
let prec = window.document.getElementById('ipreco')
let oper = window.document.getElementById('operacao')
let res = window.document.getElementById('resposta')

function verificar() {
    if (prod.value.length == 0 ||
        prec.value.length == 0 ||
        oper.value.length == 0) {
        alert('Informe os Campos!')
        return true
    } else {
        return false
    }
}
function calcular() {
    if (verificar()) {
        return
    }

    let produto = prod.value
    let preco = Number(prec.value)
    let op = oper.value
    let porcentagem = 0
    switch (op) {
        case 'A':
            porcentagem = 5
            break;
        case 'B':
            porcentagem = 10
            break;
        case 'C':
            porcentagem = 15
            break;
        case 'D':
            porcentagem = 20
            break;
        default:
            res.innerHTML = '[ERRO] Valor Inválido!'
            return
    }

    let desconto = preco * porcentagem / 100
    let valorPromocional = preco - desconto

    res.innerHTML = `<p>Produto: ${produto} <br> 
    Preço: R$ ${preco.toFixed(2)} <br> 
    Valor com Desconto: R$ ${valorPromocional.toFixed(2)}</p>`
}

