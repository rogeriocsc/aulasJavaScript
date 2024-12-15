// while (enquanto)
// Enquanto a expressão booleana for verdadeira, executa os comandos do bloco 
// c = 0 enquanto c <= 20, executa o bloco e incrementa, até a condição for verdadeira

// var c = 0
// while (c <= 20) {
//     console.log(c)
//     c++
// }

/* while faz primeiro o teste logico
do while executa primeiro o bloco de comando 
e depois é que vai fazer o teste lógico
*/

var c = 0
do {
    console.log(`Passo ${c}`)
    c++ // c = c + 1
} while (c <= 20)
