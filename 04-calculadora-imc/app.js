function removerClasses(){
    const resultado = document.getElementById("resultado")
    resultado.classList.remove("pesoBaixo", "pesoNromal" , "sobrepeso" , "obesidade1" , "obesidade2" , "obesidade3")
}



function calcularIMC(){
    const peso = document.getElementById("peso").value
    const altura = document.getElementById("altura").value
    const resultado = document.getElementById("resultado")

    let imc = Number(peso) / (Number(altura) * Number(altura))
    removerClasses()
    if ( imc < 18.5){
        resultado.textContent = `Resultado: ${imc.toFixed(2)} | Classificação: Abaixo do peso`
        resultado.classList.add("pesoBaixo")
    } else if ( imc < 25){
        resultado.textContent = `Resultado: ${imc.toFixed(2)} | Classificação: Peso normal`
        resultado.classList.add("pesoNormal")

    }else if ( imc < 30){
        resultado.textContent = `Resultado: ${imc} | Classificação: SobrePeso`
        resultado.classList.add("sobrepeso")

    }else if ( imc < 35){
        resultado.textContent = `Resultado: ${imc.toFixed(2)} | Classificação: Obesidade Grau I`
        resultado.classList.add("obesidade1")

    }else if ( imc < 40){
        resultado.textContent = `Resultado: ${imc.toFixed(2)} | Classificação: Obesidade Grau II`
        resultado.classList.add("obesidade2")

    }else{
        resultado.textContent = `Resultado: ${imc.toFixed(2)} | Classificação: Obesidade Grau III`
        resultado.classList.add("obesidade3")

    }
}