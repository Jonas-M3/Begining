// Exercicio 2

let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");  
let carta = prompt("Você tem carteira de motorista? sim ou não").toLowerCase();
let moto = prompt("Você tem uma moto? sim ou não").toLowerCase();

if (idade < 18 || carta === "não") {
    console.log(nome +", você não pode dirigir");
}
else if (idade >= 18 && carta === "sim" && moto === "nao") {
    console.log("infelizmente, " + nome + " , você pode dirigir mas não tem uma moto");
}
else if (idade >= 18 && carta === "sim" && moto === "sim"){
    console.log(nome + " , A Primeira e pra cima !")
}