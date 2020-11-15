var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`Agora são exatamente ${hora}:${minutos} horas.`)
if(hora >= 24 || (hora >= 1 && hora < 6)){
    console.log('Boa madrugada!')
} else if(hora < 12) {
    console.log('Bom Dia!')
} else if(hora <= 18) { 
    console.log('Boa tarde!')
} else if(hora < 24){
    console.log('Boa noite!')
} 

