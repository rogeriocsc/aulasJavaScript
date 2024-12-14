let resp = window.document.getElementById('resp')
function soma(vlA, vlB) {
    return vlA + vlB
}

resp.innerText = "Função Soma: (40 + 10) = " + soma(40, 10)

// Função par impar
function parimpar(v) {
    if (v % 2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}
let res = parimpar(4)
console.log(res)

// Colocar uma função dentro de uma variavel
let v = function (x) {
    return x * 4
} 
console.log(v(5))

// RECURSIVIDADE
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))
// 5! = 5 x 4 x 3 x 2 x 1 = 120

// ao inves de function usamos que chamamos de seta ou 
// Arrow Function, função de seta.

let somar = (v1, v2) => {
    return v1 + v2
}
console.log(somar(10, 5))