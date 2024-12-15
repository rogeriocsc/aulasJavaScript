let numeros = [2, 4, 6, 7, 9, 12, 14, 18, 20]

let num = numeros.indexOf(6)
if (num == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor esta na posição ${num}`)
}

// O indexOf() método de Array retorna o primeiro índice no qual um determinado elemento pode ser encontrado na matriz, ou -1 se ele não estiver presente.