'use strict'
const definirEscolha= function(){
    const vertebras = document.getElementById("vertebra").value 

    if(vertebras === "vertebrado"){
        definirClasseVertebrados()
    } else {
        definirClasseInvertebrados()
    }
}

const definirClasseVertebrados = function(){

    const classe = document.getElementById("classe")
    classe.textContent = ""


    const optionAve = document.createElement('option')
    optionAve.value = "Ave"
    optionAve.textContent = "Ave"
    const optionMamifero = document.createElement('option')
    optionMamifero.value = "Mamífero"
    optionMamifero.textContent = "Mamífero"


    classe.appendChild(optionAve)
    classe.appendChild(optionMamifero)


}


const definirClasseInvertebrados = function(){

    const classe = document.getElementById("classe")
    classe.textContent = ""


    const optionInseto = document.createElement('option')
    optionInseto.value = "Inseto"
    optionInseto.textContent = "Inseto"
    const optionAnelideo = document.createElement('option')
    optionAnelideo.value = "Anelídeo"
    optionAnelideo.textContent = "Anelídeo"


    classe.appendChild(optionInseto)
    classe.appendChild(optionAnelideo)

    const alimentacao = document.getElementById("alimentacao")
    const optionHerbivoro = document.createElement('option')
     optionHerbivoro.value = "Herbivoro"
    optionHerbivoro.textContent = "Herbivoro"
    const optionOnivoro = document.createElement('option')
    optionHerbivoro.value = "Herbivoro"
    optionHerbivoro.textContent = "Herbivoro"
    alimentacao.appe



}