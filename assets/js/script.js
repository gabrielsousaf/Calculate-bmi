const inputNome = document.getElementById("nome");
const inputAltura = document.getElementById("altura");
const inputPeso = document.getElementById("peso");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", imc);

function imc() {
  let nome = inputNome.value;
  let altura = inputAltura.value;
  let peso = inputPeso.value;

  if (!nome || !altura || !peso) {
    resultado.textContent='Preencha todos os campos!';
   
  }

  else if (altura < 0 || peso < 0){
    resultado.textContent='Preencha com numeros positivos';
  }

  else{
    
    let valorIMC = (peso / (altura * altura)).toFixed(1);
    
    if(valorIMC < 18.5){
      classificacao = 'abaixo do peso.'
    }
    else if (valorIMC < 25) {
      classificacao = 'com peso ideal!!'
    }
    else if (valorIMC < 30){
      classificacao = 'levemente acima do peso.'
    }
    else if (valorIMC < 35){
      classificacao = 'com obesidade grau I'
    }

    else if(valorIMC < 40){
      classificacao = 'com obesidade grau II'
    }
    else{
      classificacao = 'com obesidade grau III'
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC} e voçê esta ${classificacao}`


  }

  

}
