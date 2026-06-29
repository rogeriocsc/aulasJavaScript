function calcular() {
    let n1 = document.querySelector('#n1')
    let n2 = document.querySelector('#n2')
    let res = document.querySelector('#resposta')
   
    // Verificação de espaços em branco e valores nulos
    if (n1.value.trim() === '' || n2.value.trim() === '') {
        res.innerHTML = "Preencha as duas notas."
        return
    }

    let nota1 = Number(n1.value)
    let nota2 = Number(n2.value)

    // Verificar se os valores são numéricos.
    if (isNaN(nota1) || isNaN(nota2)) {
        res.innerHTML = "Digite apenas números."
        return
    }

    // Verificação de Notas
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        res.innerHTML = "As notas devem estar entre 0 e 10."
        return
    } 

    // calcular a média após todas as validações
    let media = (nota1 + nota2) / 2

    if (media >= 7) {
        res.innerHTML = `<p>Média: ${media.toFixed(2)} - Aluno APROVADO!</p>`
    } else if (media >= 5) {
        res.innerHTML = `<p>Média: ${media.toFixed(2)} - Aluno em RECUPERAÇÃO!</p>`
    } else {
        res.innerHTML = `<p>Média: ${media.toFixed(2)} - Aluno REPROVADO!</p>`
    }
}