function exp() {
    let bas = window.document.getElementById('base')
    let x = (bas.value)
    let expo = window.document.getElementById('exp')
    let y = (expo.value)
    let exp = (x ** y)
    let res = window.document.getElementById('resp')
    res.innerHTML = `${x} ^ ${y} <br> Resultado: ${exp}`
}