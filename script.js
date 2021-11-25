function recebeDados(){
    let peso_usuario = document.getElementById("peso_usuario").value;
    let altura_usuario = document.getElementById("altura_usuario").value;
    let teste_peso = isNumeric(peso_usuario);
    let teste_altura = isNumeric(altura_usuario);

    if (teste_peso == false && teste_altura == false || peso_usuario == '' && altura_usuario == '' ){
        document.getElementById("resultadoImc").innerHTML = `Por favor, digite um número valido`
        document.getElementById("resultadoImc").style.backgroundColor = "#FF0000"

    }else{
        let imc = peso_usuario / (altura_usuario ** 2);
        document.getElementById("leve").style.backgroundColor = "white"
        document.getElementById("levee").style.backgroundColor = "white"
        document.getElementById("normal").style.backgroundColor = "white"
        document.getElementById("normall").style.backgroundColor = "white"
        document.getElementById("medio").style.backgroundColor = "white"
        document.getElementById("medioo").style.backgroundColor = "white"
        document.getElementById("pesado1").style.backgroundColor = "white"
        document.getElementById("pesado11").style.backgroundColor = "white"
        document.getElementById("pesado2").style.backgroundColor = "white"
        document.getElementById("pesado22").style.backgroundColor = "white"
        document.getElementById("pesadao").style.backgroundColor = "white"
        document.getElementById("pesadaoo").style.backgroundColor = "white"

        if (Number.isNaN(imc) == true) {
            document.getElementById("resultadoImc").innerHTML = `Por favor, digite um número valido`
            document.getElementById("resultadoImc").style.backgroundColor = "#FF0000"
        
        }else if(imc < 18.5){
            document.getElementById("resultadoImc").innerHTML = `Seu imc é de ${imc.toFixed(2)} Abaixo do peso`
            document.getElementById("resultadoImc").style.backgroundColor = "#00FA9A"
            document.getElementById("leve").style.backgroundColor = "#00FA9A"
            document.getElementById("levee").style.backgroundColor = "#00FA9A"
        }
        else if(imc <= 24.9) {
            document.getElementById("resultadoImc").innerHTML = `Seu imc é de ${imc.toFixed(2)} Peso normal`
            document.getElementById("resultadoImc").style.backgroundColor = "#00FF00"
            document.getElementById("normal").style.backgroundColor = "#00FF00"
            document.getElementById("normall").style.backgroundColor = "#00FF00"

        }
        else if(imc <= 29.9){
            document.getElementById("resultadoImc").innerHTML = `Seu imc é de ${imc.toFixed(2)} Sobrepeso`
            document.getElementById("resultadoImc").style.backgroundColor = "#FFFF00"
            document.getElementById("medio").style.backgroundColor = "#FFFF00"
            document.getElementById("medioo").style.backgroundColor = "#FFFF00"
        }
        else if(imc <= 34.9){
            document.getElementById("resultadoImc").innerHTML = `Seu imc é de ${imc.toFixed(2)} Obesidade grau 1`
            document.getElementById("resultadoImc").style.backgroundColor = "#FF0000"
            document.getElementById("pesado1").style.backgroundColor = "#FF0000"
            document.getElementById("pesado11").style.backgroundColor = "#FF0000"
        }
        else if(imc <= 39.9){
            document.getElementById("resultadoImc").innerHTML = `Seu imc é de ${imc.toFixed(2)} Obesidade grau 2`
            document.getElementById("resultadoImc").style.backgroundColor = "#FF0000"
            document.getElementById("pesado2").style.backgroundColor = "#FF0000"
            document.getElementById("pesado22").style.backgroundColor = "#FF0000"
        }
        else{
            document.getElementById("resultadoImc").innerHTML = `Seu imc é de ${imc.toFixed(2)} Obesidade grau 3`
            document.getElementById("resultadoImc").style.backgroundColor = "#FF0000"
            document.getElementById("pesadao").style.backgroundColor = "#FF0000"
            document.getElementById("pesadaoo").style.backgroundColor = "#FF0000"
        }
    }
    
}



function isNumeric(val) {
    return /^-?\d+$/.test(val);
}
