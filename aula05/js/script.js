function raizQ() {
    let raiz = window.document.getElementById('iraiz')
    let res = window.document.getElementById('resposta')
    let raizQ = Number(raiz.value)

    // Verifica se o campo está vazio
    if (raiz.value.trim() === "") {
        alert("Digite um número!")
        raiz.focus()
        return
    }

     // Verifica se o número é negativo
    if (raizQ < 0) {
        alert("Não é possível calcular a raiz quadrada de um número negativo.") 
        return
    }

    let rQ = Math.sqrt(raizQ)
    res.innerHTML = `<p>A raiz quadrada do <br> número <strong> ${raizQ} </strong> é: <br> <strong> ${rQ} </strong> </p>`
}

// A função Math.sqrt() retorna a raiz quadrada de um número..