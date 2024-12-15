// A instrução for cria um loop
// for ([inicialização]; [condição]; [expressão final])
//     declaração

let valores = [4, 7, 9, 10, 12, 15, 17, 19, 20, 22]
console.log(valores)

for (let val = 0; val < valores.length; val++) {
    console.log(valores[val]) 
}

// Forma simplificada for in

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for (let vl of valores) {
    console.log(vl)
}