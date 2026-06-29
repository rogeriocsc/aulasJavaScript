function media() {
    let val1 = document.querySelector('#ival1')
    let val2 = document.querySelector('#ival2')
    let res = document.querySelector('#resposta')

    // Verifica se os campos estão vazios
    if (val1.value.trim() === "" || val2.value.trim() === "") {
        res.innerHTML = "<p>Por favor, preencha os campos de Valores.</p>"
        val1.focus()
        return
    }

    let valor1 = Number(val1.value)
    let valor2 = Number(val2.value)
    let media = (valor1 + valor2) / 2
    res.innerHTML = `<p>Valores: <strong> ${valor1.toFixed(2)} </strong> e <strong> ${valor2.toFixed(2)} </strong> 
    <br> --------------------------- <br> 
    Média: <strong> ${media.toFixed(2)} </strong> 
    <br> --------------------------- <br> </p>`
}