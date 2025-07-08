function calcular() {
    let nota1 = document.querySelector('#n1')
    let nota2 = document.querySelector('#n2')
    let res = document.querySelector('#resposta')
    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let media = (n1 + n2) / 2
    if (media >= 7) {
        res.innerHTML = "Média: " + media.toFixed(2) + " Aluno APROVADO!"
    } else if (media >= 5 && media < 7) {
        res.innerHTML = "Média: " + media.toFixed(2) + " Aluno em RECUPERAÇÃO!"
    } else {
        res.innerHTML = "Média: " + media.toFixed(2) + " Aluno REPROVADO!"
    }
}