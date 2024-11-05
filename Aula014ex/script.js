function contar() {
    var ini = document.getElementById('iniciotxt')
    var fim = document.getElementById("fimtxt")
    var passo = document.getElementById("passotxt")
    var res = document.getElementById('resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Está faltando preencer campo')
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = "Contando: "
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }
    }

}