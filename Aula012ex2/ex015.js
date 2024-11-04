function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById("txtano")
    var res = window.document.getElementById("res")
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert("Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fAno.value)
        var genero = ""
        res.innerHTML = `Idade calculada: ${idade}`
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', '....')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', '....')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '....')
            } else {
                //Idoso
                img.setAttribute('src', '....')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', '....')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', '....')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '....')
            } else {
                //Idoso
                img.setAttribute('src', '....')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
