function calcularIMC(){
    const peso = document.getElementById("peso").value
    const altura = document.getElementById("altura").value
    const resultado = document.getElementById("resultado")

    let imc = Number(peso) / (Number(altura) * Number(altura))

    if ( imc < 18.5){
        resultado.textContent = `Resultado: ${imc.toFixed(2)} | Classificação: Abaixo do peso`
    } else if ( imc < 25){
        resultado.textContent = `Resultado: ${imc.toFixed(2)} | Classificação: Peso normal`
    }else if ( imc < 30){
        resultado.textContent = `Resultado: ${imc} | Classificação: SobrePeso`
    }else if ( imc < 35){
        resultado.textContent = `Resultado: ${imc.toFixed(2)} | Classificação: Obesidade Grau I`
    }else if ( imc < 40){
        resultado.textContent = `Resultado: ${imc.toFixed(2)} | Classificação: Obesidade Grau II`
    }else{
        resultado.textContent = `Resultado: ${imc.toFixed(2)} | Classificação: Obesidade Grau III`
    }
}