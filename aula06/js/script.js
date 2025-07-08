function exponencial() {
    let bas = window.document.getElementById('ibase')
    let exp = window.document.getElementById('iexp')
    let res = window.document.getElementById('resposta')
    let base = Number(bas.value)
    let expo = Number(exp.value)
    let funcaoExp = Math.pow(base, expo)
    res.innerHTML = `Função Exponencial: ${base}<sup>${expo}</sup> <br> Resultado: <strong> ${funcaoExp}</strong>`
}

// A função Math.pow() retorna a base elevada ao expoente