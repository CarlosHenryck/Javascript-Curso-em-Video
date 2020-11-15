function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var keyNumber = Number(inicio.value)

    if (passo.value <= 0) {
        passo.value = 1
        alert('Passo INVALIDO, considerando PASSO 1')
    }

    if (inicio.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else if (inicio.value < fim.value) {
        res.innerHTML = 'Contando: </br>'

        while (keyNumber <= fim.value) {
            res.innerHTML += `${keyNumber} \u{1F449}`
            keyNumber += Number(passo.value)
        }
    } else {
        res.innerHTML = 'Contando: </br>'

        while (keyNumber >= fim.value) {
            res.innerHTML += `${keyNumber} \u{1F449}`
            keyNumber -= Number(passo.value)
        }
    }

    res.innerHTML += `\u{1F3C1}`
}