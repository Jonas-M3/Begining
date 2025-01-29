let nome = prompt("Qual Seu Nome")
let idade = parseInt(prompt("Qual Sua Idade"))
let peso = prompt("Qual Seu Peso")
let altura = prompt("Qual Sua Altura")
let profissao = prompt("Qual Sua Profissão")

console.log ("Olá, "+ nome + ", Você Tem " + idade + " anos" + " é " + profissao + ", tem " + altura + "M de altura e " + peso + "kg")

if (idade>=18){   
    console.log ("Está Liberado pra entrar na festa")
}
else 
    console.log ("Infelizmente não posso deixar você entrar na festa")          

let meses = idade * 12
let dias = idade * 365
let seman = idade * 52
console.log("Sua idade em meses e: " + meses +" Meses")
console.log("Sua idade em dias e: " + dias + " Dias")
console.log("Sua idade em semanas e: " + seman + " Semanas")

let imc = peso / (altura*altura)
console.log(imc)

if (imc < 18,5){
    console.log("magreza!")
}
else if (imc >= 18,5 && imc <=24.9){
    console.log("normal")
}
else if (imc >= 25 && imc <= 30){
    console.log("Sobrepeso")
}
else 
console.log("Obesidade")