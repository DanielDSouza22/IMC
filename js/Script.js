
peso = parseFloat(prompt('Digite seu peso'))

altura = parseFloat(prompt('Digite sua altura em metros'))

imc = (altura*altura)/peso

if(imc < 20){

    alert('Você está abaixo do peso, procure ajuda.'+imc)

  }else if(imc>=20 || imc<25){

    alert('Você está no peso ideal.'+imc)

  }else if(imc>=25 || imc<30){

    alert('Você está em estado inicial de Obesidade, se cuide!'+imc)

  }else if(imc>=30){

    alert('Você se encontra com o estado de Obesidade (Severa), procure ajuda.'+imc)

  }

// RESOLUÇÂO Docente
/*
var peso  = parseFloat(prompt('Peso: '))
var altura  = parseFloat(prompt('Altura: '))

var imc = peso/(altura*altura)

alert('IMC: ' + imc)

if(imc <= 18.5){
  alert('Abaixo do peso')
}
else if(imc <= 24.9){
  alert('Peso ideal')
}
else if(imc <= 29.9){
  alert('Sobrepeso')
}
else if(imc <= 34.9){
  alert('Obesidade Grau I')
}
else if(imc <= 39.9){
  alert('Obesidade Grau II')
}
else{
  alert('Obesidade Grau III')
} */