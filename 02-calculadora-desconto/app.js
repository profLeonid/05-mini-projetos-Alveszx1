function removerClasses(){
    const resultado = document.getElementById("resultado")
    resultado.classList.remove("descontoBaixo", "descontoMedio" , "descontoAlto")
}


function calcularDesconto(){
    const precoOriginal = document.getElementById("preco")
    const percentualDesconto = document.getElementById("desconto")
    const resultado = document.getElementById("resultado")

    let preco = Number(precoOriginal.value) 
    let valordesconto = Number(percentualDesconto.value)
    let descontoCalculado = preco - ((preco / 100) * valordesconto)
    let valorEconomizado = preco - descontoCalculado
                                                                            
    removerClasses()
    if (valordesconto <= 5 ){
        resultado.textContent = `O valor com desconto é ${descontoCalculado} reais, você economizou ${valorEconomizado} reais`

        resultado.classList.add("descontoBaixo")
    } else if (valordesconto < 11){
        resultado.textContent = `O valor com desconto é ${descontoCalculado} reais, você economizou ${valorEconomizado} reais`
        resultado.classList.add("descontoMedio")
    } else {
        resultado.textContent = `O valor com desconto é ${descontoCalculado} reais, você economizou ${valorEconomizado} reais`
        resultado.classList.add("descontoAlto")
    }

}