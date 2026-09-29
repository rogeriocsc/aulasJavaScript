function media() {
    let val1 = document.querySelector('#i_val1')
    let val2 = document.querySelector('#i_val2')
    let res = document.querySelector('#res')

    // Verifica se os campos estão vazios
    if (val1.value === "" || val2.value === "") {
        res.innerHTML = "<p>Por favor, preencha os campos de Valores.</p>"
        val1.focus()
        return
    }

    let valor1 = Number(val1.value)
    let valor2 = Number(val2.value)
    let media = (valor1 + valor2) / 2
    res.innerHTML = `<p>
                    Média: <strong> ${media.toFixed(2)} 
                    </strong> 
                </p>`
}