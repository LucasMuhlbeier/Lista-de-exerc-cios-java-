let ipTexto = document.querySelector("#ipNumero");
let ipTexto2 = document.querySelector("#ipNumero2");
let ipTexto3 = document.querySelector ("#ipNumero3");
let Resultado = document.querySelector("#Resultado1");
let Calcular = document.querySelector("#btResultadoUM");

function calcularMediaA(){
    let num1 = Number(ipTexto.value);
    let num2 = Number(ipTexto2.value);
    let num3 = Number(ipTexto3.value);
    let soma = (num1 + num2 + num3) /3 ;
    Resultado.textContent = String(soma);
}
Calcular.onclick=function(){
    calcularMediaA()
}
// exercicio B //
let ipTexto4 = document.querySelector("#ipValor");
let ipTexto5 = document.querySelector("#ipValor2");
let ipTexto6 = document.querySelector("#ipValor3");
let Resultado2 = document.querySelector("#MediaPonder");
let Calcular1 = document.querySelector("#btResultadoDOIS");

function calcularMediaP(){
    let num4 = Number(ipTexto4.value);
    let num5 = Number(ipTexto5.value);
    let num6 = Number(ipTexto6.value);
    let somas = (num4*3 + num5*2 + num6*5 ) /10 ;
    Resultado2.textContent = String(somas);
}

Calcular1.onclick=function(){
calcularMediaP();
}

// exercicio c //

let ipTexto7 = document.querySelector( "#ipDigito");
let ipTexto8 = document.querySelector("#ipDigito2");
let ipTexto9 = document.querySelector("#ipDigito3");
let Resultado3 = document.querySelector("#somarmedia");
let Calcular2 = document.querySelector("#btResultadoTRES");

function calcularSomas(){
    let num7 = Number(ipTexto7.value);
    let num8 = Number(ipTexto8.value);
    let num9 = Number(ipTexto9.value);
    let somar =  (num7 + num8 + num9) /3 + (num7*3 + num8*2 + num9*5 ) /10 ;
    Resultado3.textContent = String(somar);
}
Calcular2.onclick=function(){
    calcularSomas();

}
// exercício d

let ipTexto10 = document.querySelector("#ipDigito4");
let ipTexto11 = document.querySelector("#ipDigito5");
let ipTexto12 = document.querySelector("#ipDigito6");
let Resultado4 = document.querySelector("#MediaDasMedias");
let Calcular3 = document.querySelector("#btResultadoQUATRO");

function mediadasmedia(){
    let num10 = Number(ipTexto10.value);
    let num11 = Number(ipTexto11.value);
    let num12 = Number(ipTexto12.value);
    let medias =  ( (num10 + num11 + num12) /3 + (num10*3 + num11*2 + num12*5 ) /10) /2;
    Resultado4.textContent = String(medias);
}

Calcular3.onclick=function(){
    mediadasmedia();
}