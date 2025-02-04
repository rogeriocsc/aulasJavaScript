function calcular() {
    let prod = document.getElementById('iprodt')
    let prec = document.getElementById('ipreco')
    let oper = document.getElementById('operacao')
    let res = document.getElementById('resposta')
    let produto = (prod.value)
    let preco = (prec.value)
    let op = (oper.value)
    let desconto = null
    let promoc = null
    if (prod.value.length == 0 || prec.value.length == 0) {
        return alert("Informe os Campos!")
    }
    switch (op) {
        case 'A':
            desconto = (preco * 5) / 100
            promoc = preco - desconto
            res.innerHTML = `${produto} com um preço promocional de 5%. R$ ${promoc.toFixed(2)}`
            break;
        case 'B':
            desconto = (preco * 10) / 100
            promoc = (preco - desconto)
            res.innerHTML = `${produto} com um preço promocional de 10%. R$ ${promoc.toFixed(2)}`
            break;
        case 'C': 
            desconto = (preco * 15) / 100
            promoc = (preco - desconto)
            res.innerHTML = `${produto} com um preço promocional de 15%. R$ ${promoc.toFixed(2)}`
            break
        case 'D':
            desconto = (preco * 20) / 100
            promoc = (preco - desconto)
            res.innerHTML = `${produto} com um preço promocional de 20%. R$ ${promoc.toFixed(2)}`
            break
        default:
            res.innerHTML = '[ERRO] Valor Inválido!'
            break;
    }
}

