
var vet = []
var numero = window.document.getElementById("numeroid")
var ns = document.getElementById("numerosadicionados")
var c = 0


function adicionar() {
    
    if (numero.value.length == 0) {
        window.alert("Digite algo antes de clicar em adicionar!")
    } else if (numero.value > 100) {
        window.alert("Numero invalido")
    } else {                                            
        let valorNumerico = Number(numero.value)
        vet.push(valorNumerico)

        let item = document.createElement("option")
        item.text = `indice ${c} recebeu ${vet[c]}`
        ns.appendChild(item)
        c++
        
        numero.value = ""
        numero.focus()
    }
    
}

function numeroscadastrados() {
    let ncad = document.getElementById("ncadid")
    ncad.innerHTML = `Ao todo, temos ${c} numeros cadastrados`
}

function maiorvalor() {
    let maivalor = document.getElementById("maiorvalorid")
    let lastElement = 0

    lastElement = vet.length - 1
    window.alert(lastElement)
    maivalor.innerHTML = `O maior valor informado foi ${vet[lastElement]}`

}

function menorvalor() {
    let menValor = document.getElementById('menorvalorid')
     menValor.innerHTML = `O menor valor informado foi ${vet[0]} `
}

function somatorio(){
    let somando = document.getElementById('somatorioid')
    let resultado = 0
   
    for(let i = 0 ; i < vet.length  ; i++){
        resultado = resultado + vet[i]
    }
   
   
    somando.innerHTML = `Somando todos os valores, temos ${resultado}`
}

 function finalizar(){
    vet.sort((a, b) => a - b);
    console.log(vet)
    numeroscadastrados()
    maiorvalor()
    menorvalor()
    somatorio()
 }