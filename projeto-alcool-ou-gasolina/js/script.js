function  calcularMelhorPreco() {
               
    //validar campos
    let precoAlcool= document.getElementById('alcool').value
    let precoGasolina = document.getElementById('gasolina').value

    if(precoAlcool != ""){
       if(precoGasolina != ""){
            //calcular
            let resultado = precoAlcool/ precoGasolina
            
            if(resultado >=0.7){
                //alert("Melhor utilizar gasolna")
                document.getElementById('resultado').innerHTML= "Melhor Utilizar a gasolina"
            }else{
                //alert("Melhor utilizar alcool")
                document.getElementById('resultado').innerHTML= "Melhor Utilizar o alcool"
            }
       }else{
        alert("Preencha o preço da Gasolina")
       }
    }else{
        alert("Preencha o preço do Álcool")
    }
}
