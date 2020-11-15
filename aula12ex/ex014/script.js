function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}

function hours() {
    var hours = document.getElementById('hours')
    var date1 = new Date()
    var gthours = date1.getHours()
    var gtminutes = date1.getMinutes()
    var gtseconds = date1.getSeconds()

    if(gthours < 10) {
        gthours = `0${gthours}`
    } 
    if(gtminutes < 10) {
        gtminutes = `0${gtminutes}`
    }
    if(gtseconds < 10) {
        gtseconds = `0${gtseconds}`
    }

    hours.textContent = `${gthours}:${gtminutes}:${gtseconds}`
}
    var tictac = setInterval(hours, 1000)
hours()



