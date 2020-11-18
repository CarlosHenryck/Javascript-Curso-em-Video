let numbers = []
var infoContainer = document.getElementById('infoContainer')
var select = document.querySelector('select#viewNum')

function addNum() {
    var num = document.getElementById('num')
    var option = document.createElement('option')

    if (num.value < 1 || num.value > 100 || numbers.indexOf(Number(num.value)) != -1) {
        alert("Valor inválido ou já encontrado na lista")
    } else {
        numbers.push(Number(num.value))
        option.innerHTML = `Valor ${num.value} adicionado`
        select.appendChild(option)
        infoContainer.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

function info() {
    if(numbers.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        var maior = Math.max(...numbers)
        var menor = Math.min(...numbers)
        var soma = 0
    
        for (pos in numbers) {
            soma += numbers[pos]
        }
    
        for (var i = 0; i < 5; i++) {
            var p = document.createElement('p')
            p.setAttribute('class', 'content')
            infoContainer.appendChild(p)
        }
    
        var p = document.querySelectorAll('p.content')
        var media = soma / 2
    
        p[0].innerHTML = `Ao todo, temos ${numbers.length} números cadastrados`
        p[1].innerHTML = `O maior valor informado foi ${maior}`
        p[2].innerHTML = `O menor valor informado foi ${menor}`
        p[3].innerHTML = `Somando os valores, temos ${soma}`
        p[4].innerHTML = `A média dos valores digitados é ${media}`
    }
}

function remover() {
    var opt
    var len = select.options.length

    for (var i = 0; i < len; i++) {
        opt = select.options[i]
        if(opt.selected == true) {
            opt.remove()
            numbers.splice(i, 1)
            infoContainer.innerHTML = ''
            num.focus()
            break;
        }
    }
}