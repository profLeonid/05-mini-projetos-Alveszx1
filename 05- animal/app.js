'use strict'
const definirEscolha= function(){
    const vertebras = document.getElementById("vertebra").value 

    limparAlimentacao()

    if(vertebras === "vertebrado"){
        definirClasseVertebrados()
    } else if (vertebras === "invertabrados"){
        definirClasseInvertebrados()
    } else {
        limparClasseAnimal()
    }
}

const definirClasseVertebrados = function(){
    const classe = document.getElementById("classe")
    classe.textContent = ""

    const optionEscolha = document.createElement('option')
    optionEscolha.value = ""
    optionEscolha.textContent = "Escolha"
    const optionAve = document.createElement('option')
    optionAve.value = "Ave"
    optionAve.textContent = "Ave"
    const optionMamifero = document.createElement('option')
    optionMamifero.value = "Mamífero"
    optionMamifero.textContent = "Mamífero"

    classe.append(optionEscolha)
    classe.appendChild(optionAve)
    classe.appendChild(optionMamifero)

}


document.getElementById("classe").addEventListener("change", function(){
    const alimentacao = document.getElementById("alimentacao")
    alimentacao.textContent = ""

    if(classe.value === "Ave"){

        const optionEscolha = document.createElement('option')
        optionEscolha.value = ""
        optionEscolha.textContent = "Escolha"
        const carnivoro = document.createElement("option")
        carnivoro.value = "carnivoro"
        carnivoro.textContent = "Carnivoro"
        const onivoro = document.createElement("option")
        onivoro.value = "onivoro"
        onivoro.textContent = "Onivoro"

        alimentacao.appendChild(optionEscolha)
        alimentacao.appendChild(carnivoro)
        alimentacao.appendChild(onivoro)


    } else if (classe.value === "Mamífero"){
        const optionEscolha = document.createElement('option')
        optionEscolha.value = ""
        optionEscolha.textContent = "Escolha"
        const onivoro = document.createElement("option")
        onivoro.value = "onivoro"
        onivoro.textContent = "Onivoro"
        const  herbivoro = document.createElement("option")
        herbivoro.value = "herbivoro"
        herbivoro.textContent = "Herbivoro"

        alimentacao.appendChild(optionEscolha)
        alimentacao.appendChild(onivoro)
        alimentacao.appendChild(herbivoro)
    } else if (classe.value === "Inseto"){
        const optionEscolha = document.createElement('option')
        optionEscolha.value = ""
        optionEscolha.textContent = "Escolha"
        const hematofago = document.createElement('option')
        hematofago.value = "hematofago"
        hematofago.textContent = "Hematofago"
        const  herbivoro = document.createElement("option")
        herbivoro.value = "herbivoro"
        herbivoro.textContent = "Herbivoro"

        alimentacao.appendChild(optionEscolha)
        alimentacao.appendChild(hematofago)
        alimentacao.appendChild(herbivoro)
    } else if (classe.value === "Anelídeo"){

        const optionEscolha = document.createElement('option')
        optionEscolha.value = ""
        optionEscolha.textContent = "Escolha"
        const hematofago = document.createElement('option')
        hematofago.value = "hematofago"
        hematofago.textContent = "Hematofago"
        const  onivoro = document.createElement("option")
        onivoro.value = "onivoro"
        onivoro.textContent = "Onivoro"

        alimentacao.appendChild(optionEscolha)
        alimentacao.appendChild(hematofago)
        alimentacao.appendChild(onivoro)

    }


})

document.getElementById("alimentacao").addEventListener("change", function(){
    const resultado = document.getElementById("resultado")
    const alimentacao = document.getElementById("alimentacao")


    if(alimentacao.value === "carnivoro" && classe.value === "Ave"){
        resultado.textContent = "Aguia"
    } else if(alimentacao.value === "onivoro" && classe.value === "Ave"){
        resultado.textContent = "Pomba"
    } else if(alimentacao.value === "onivoro" && classe.value === "Mamífero"){
        resultado.textContent = "Homem"
    } else if(alimentacao.value === "herbivoro" && classe.value === "Inseto"){
        resultado.textContent = "Lagarta"
    } else if(alimentacao.value === "herbivoro" && classe.value === "Mamífero"){
        resultado.textContent = "Vaca"
    } else if(alimentacao.value === "hematofago" && classe.value === "Inseto"){
        resultado.textContent = "Pulga"
    } else if(alimentacao.value === "hematofago" && classe.value === "Anelídeo"){
        resultado.textContent = "Sanguessuga"
    } else if(alimentacao.value === "onivoro" && classe.value === "Anelídeo"){
        resultado.textContent = "Minhoca"
    } else {
        resultado.textContent = ""
    }
})


const definirClasseInvertebrados = function(){

    const classe = document.getElementById("classe")
    classe.textContent = ""



    const optionEscolha = document.createElement('option')
    optionEscolha.value = ""
    optionEscolha.textContent = "Escolha"
    const optionInseto = document.createElement('option')
    optionInseto.value = "Inseto"
    optionInseto.textContent = "Inseto"
    const optionAnelideo = document.createElement('option')
    optionAnelideo.value = "Anelídeo"
    optionAnelideo.textContent = "Anelídeo"

    classe.appendChild(optionEscolha)
    classe.appendChild(optionInseto)
    classe.appendChild(optionAnelideo)

}

const limparAlimentacao = function (){
    const alimentacao = document.getElementById("alimentacao")
    alimentacao.textContent = ""
}

const limparClasseAnimal = function (){
    const classe = document.getElementById("classe")
    classe.textContent = ""
}