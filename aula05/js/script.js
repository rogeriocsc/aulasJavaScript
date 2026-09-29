function raizQ() {
    let raiz = window.document.getElementById('i_raiz')
    let res = window.document.getElementById('resp')
    let raizQ = Number(raiz.value)

    // Verifica se o campo está vazio
    if (raiz.value === "") {
        alert("Digite um número!")
        raiz.value = ""
        raiz.focus()
        return
    }

    // Verifica se o número é negativo
    if (raizQ < 0) {
        alert("Não é possível calcular a raiz quadrada de um número negativo.") 
        raiz.value = ""
        raiz.focus()
        return
    }

    let rQ = Math.sqrt(raizQ)
    res.innerHTML = `
        <p>
            A raiz quadrada de <strong>${raizQ}</strong> é:
            <br>
            <strong>${rQ}</strong>
        </p>
    `
}

// A função Math.sqrt() retorna a raiz quadrada de um número..