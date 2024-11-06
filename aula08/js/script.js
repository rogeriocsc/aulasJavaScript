function calcular() {
    let produto = document.getElementById('prod')
    let prod = (produto.value)
    let preco = document.getElementById('preco')
    let prec = (preco.value)
    let desconto = null
    let promoc = null
    let res = document.getElementById('res')
    if (produto.value.length == 0 || preco.value.length == 0) {
        return alert("Informe os Campos!")
    }
    let oper = document.getElementById('operacao')
    let op = (oper.value)
    switch (op) {
        case 'A':
            desconto = (prec * 5) / 100
            promoc = (prec - desconto)
            res.innerHTML = `${prod} com um preço promocional de 5%. R$ ${promoc.toFixed(2)}`
            break;
        case 'B':
            desconto = (prec * 10) / 100
            promoc = (prec - desconto)
            res.innerHTML = `${prod} com um preço promocional de 10%. R$ ${promoc.toFixed(2)}`
            break
        case 'C': 
            desconto = (prec * 15) / 100
            promoc = (prec - desconto)
            res.innerHTML = `${prod} com um preço promocional de 15%. R$ ${promoc.toFixed(2)}`
            break
        case 'D':
            desconto = (prec * 20) / 100
            promoc = (prec - desconto)
            res.innerHTML = `${prod} com um preço promocional de 20%. R$ ${promoc.toFixed(2)}`
            break
        default:
            res.innerHTML = '[ERRO] Valor Inválido!'
            break;
    }
}