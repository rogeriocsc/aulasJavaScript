function raizQ() {
    let raizQd = window.document.getElementById('raiz')
    let raiz = (raizQd.value)
    let res = window.document.getElementById('resp')
    let ra = Math.sqrt(raiz)
    res.innerHTML = `A raiz quadrada do número <strong>${raiz}</strong> é <strong>${ra}</strong> `
}

// A função Math.sqrt() retorna a raiz quadrada de um número