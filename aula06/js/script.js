function exponencial() {
    let bas = window.document.getElementById('i_bas')
    let exp = window.document.getElementById('i_exp')
    let res = window.document.getElementById('res')

    // Verifica se os campos estão vazios
    if (bas.value === "" || exp.value === "") {
        res.innerHTML = "<p>Por favor, preencha a base e o expoente.</p>"
        bas.focus()
        return
    }
    
    let base = Number(bas.value)
    let expo = Number(exp.value)
    let funcaoExp = Math.pow(base, expo)
    res.innerHTML = `<p> 
                        Resultado: <strong> ${funcaoExp}</strong>
                    <p>`
}

// A função Math.pow() retorna a base elevada ao expoente