let numeros = [2, 4, 7, 8, 12, 15, 117, 200]
console.log(numeros)

let novoArray = numeros.filter((el)=>{
    return el > 10
})
console.log(novoArray)
// Retorna elmentos maior que 10

let frutas = ['Abacate', 'Abacaxi','Açaí', 'Acerola', 'Banana', 'Caju', 'Caqui', 'Melancia', 'Morango', 'Pera']

let arrayFrutas = frutas.filter((el)=>{
    return el != 'Caju'
})

console.log(frutas)
console.log(arrayFrutas)

// Retorna um novo Array com os elementos, e exclui o elemento em questão. return el != 'Caju. 
// vantagem: preservar o Array original

// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida

