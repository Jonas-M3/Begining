//Exercicio 2
let valor
let quantidade
let litroGasolina = 5
let litroAlcool = 3
console.log("Valor da gasolina 5,00 R$ o litro")
console.log("Valor do alcool 3,00 R$ o litro")

let escolha = prompt ("Boa Tarde Campeão. Você Deseja abastecer com gasolina, alcool ou calibrar seus pneus ?"+"\n1 - abastecer com gasolina: \n2 - abastecer com alcool: \n3 - calibrar pneu:")

  switch (escolha){

    case "1":
     valor = parseInt (prompt("Quantos reais você deseja abastecer"))
      console.log('Foram Abastecidos, '+ valor / litroGasolina + " litros de gasolina comun")
      break;
       case "2":
       valor = parseInt (prompt("Quantos reais você deseja abastecer"))
         console.log('Foram Abastecidos, '+ valor / litroAlcool + " litros de alcool")
         break;
          case '3':
            console.log("Pneus Calibrados!")
            break;   
  }      
    
