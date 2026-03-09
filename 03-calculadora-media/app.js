function removerClasses(){
    const resultado = document.getElementById("resultado")
    resultado.classList.remove("aprovado", "recuperacao" , "reprovado")
}



function calcularMedia (){
    const nota1 = document.getElementById("nota1").value
    const nota2 = document.getElementById("nota2").value
    const nota3 = document.getElementById("nota2").value
    const resultado = document.getElementById("resultado")

    removerClasses()
    let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3 

    if(media >= 7){
        resultado.textContent = `Media: ${media} | Situação: Aprovado`
        resultado.classList.add("aprovado")

    }else if (media < 5){
        resultado.textContent = `Media: ${media} | Situação: Reprovado`
        resultado.classList.add("reprovado")
    } else {
        resultado.textContent = `Media: ${media} | Situação: Recuperação`
        resultado.classList.add("recuperacao")

    }

    


}