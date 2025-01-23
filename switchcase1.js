   //Exercicio 1

let numero1 = Number(prompt("Digite um Número: "));
let numero2 = Number(prompt("Digite outro Número: "));
let operacao = prompt("Digite Qual Aritimética você Deseja Reazlizar com esses númeoros " );

switch (operacao) {
 case "+" :
    console.log(numero1 + numero2)
   break;
     case "-" :
        console.log (numero1 - numero2)
     break;
       case "*" :
            console.log (numero1 * numero2)
        break;
         case "/" :
                console.log (numero1 / numero2)
        break;
            default:
                console.log("F5 na página e tente novamente")
                break;
}

    
         