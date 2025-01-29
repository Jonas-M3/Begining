function Calculadora(numero1, numero2, operador){
let num1 = parseint(numero1)
let num2 = parseInt(numero2)

switch(operador){
case "+":
   resultado = (num1+num2)
   break;
case "-":
    resultado = (num1-num2)
    break;
case "/":
    resultado= (num1/num2)
    break;
case "*":
    resultado = (num1*num2)
    break;
case "e":
let contador = 1
resultado = num1*num2
while(contador < num2-1){
    resultado = resultado*num2
    contador++
}
    break;
}
   if(resultado == undefined || resultado >= 10000000)
    resultado = "ERRO"
return erro   
}