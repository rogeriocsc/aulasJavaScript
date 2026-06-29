function exponencial() {
    let bas = window.document.getElementById('ibase')
    let exp = window.document.getElementById('iexp')
    let res = window.document.getElementById('resposta')

    // Verifica se os campos estão vazios
    if (bas.value.trim() === "" || exp.value.trim() === "") {
        res.innerHTML = "<p>Por favor, preencha a base e o expoente.</p>"
        bas.focus()
        return
    }
    
    let base = Number(bas.value)
    let expo = Number(exp.value)
    let funcaoExp = Math.pow(base, expo)
    res.innerHTML = `<p> F ( x ) = ${base} <sup>${expo}</sup> 
    <br> 
    F ( x ) = <strong> ${funcaoExp}</strong> </p>`
}

// A função Math.pow() retorna a base elevada ao expoente