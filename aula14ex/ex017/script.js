function tabuada() {
    let num = document.getElementById('num')
    let tabuada = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um numero!')
    } else {
        tabuada.innerHTML = ''
        let n = Number(num.value)

        for (let i = 0; i <= 10; i++) {
            let option = document.createElement('option')
            option.innerHTML = `${n} x ${i} = ${n * i}`
            option.value = `tab${i}`
            tabuada.appendChild(option)
        }
    }

}