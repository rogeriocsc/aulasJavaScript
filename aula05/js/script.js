function raizQ() {
    let raiz = window.document.getElementById('iraiz')
    let res = window.document.getElementById('resposta')
    let raizQ = Number(raiz.value)
    let rQ = Math.sqrt(raizQ)
    res.innerHTML = `<p>A raiz quadrada do número <strong> ${raizQ} </strong> é <strong> ${rQ} </strong> </p>`
}

// A função Math.sqrt() retorna a raiz quadrada de um número..