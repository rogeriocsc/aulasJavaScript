function calcular() {
    let n1 = document.querySelector('#i_nota1')
    let n2 = document.querySelector('#i_nota2')
    let res = document.querySelector('#res')
   
    // Verificação de espaços em branco e valores nulos
    if (n1.value === '' || n2.value === '') {
        res.innerHTML = "Preencha as duas notas."
        n1.focus()
        return
    }

    let nota1 = Number(n1.value)
    let nota2 = Number(n2.value)

    // Verificação de Notas
    if (nota1 < 0 || 
        nota1 > 10 || 
        nota2 < 0 || 
        nota2 > 10
    ) {
        res.innerHTML = "As notas devem estar entre 0 e 10."
        n1.value = ''
        n2.value = ''
        n1.focus()
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