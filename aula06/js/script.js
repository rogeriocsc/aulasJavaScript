let bas = window.document.getElementById('ibase')
let exp = window.document.getElementById('iexp')
let res = window.document.getElementById('resposta')

function exponencial() {
    let base = (bas.value)
    let expo = (exp.value)
    let expoente = base ** expo
    res.innerHTML = `${base} ^ ${expo} <br> Resultado: <strong> ${expoente}
    </strong>`
}