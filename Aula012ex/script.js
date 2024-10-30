
function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var agora = new Date()
    var hora = agora.getHours()

    
    msg.innerHTML=`Agora são ${hora} Horas.`

    if(hora >= 0 && hora <12){
        img.src = './assets/fotomanha.png'
        document.body.style.background = '#ffcc00'

    }else if (hora >= 12 && hora <=18){
        img.src = './assets/fototarde.png'
        document.body.style.background = '#f8ca68'

    }else{
        img.src = './assets/fotonoite.png'
        document.body.style.background = '#23394d'
    }

}