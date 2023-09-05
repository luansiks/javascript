function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var bod = window.document.getElementById('bod')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    if(hora >= 0 && hora <= 12){
        img.src = 'g1.png'
        bod.style.backgroundColor = 'rgb(238, 214, 117)'
    }else if(hora > 12 && hora < 18){
        img.src = 'g2.png'
        bod.style.backgroundColor = 'rgb(225, 160, 107)'
    }else{
        img.src = 'g3.png'
        bod.style.backgroundColor = 'rgb(36, 45, 61)'
    }
}
