// == valor igual independente do tipo (true) / != valor diferente independente do tipo (true) / > maior (true) / < menor (true) / >= maior ou igual (true) / <= menor ou igual (true) 
// === igual valor e o tipo (true) / !== diferente valor ou o tipo  (true)
// && e / || ou / ! não / else se não / else if se não se
// if (condição) {bloco de código} else {bloco de código}
// para && dar true as duas condições tem que ser verdadeiras
// para || dar true uma das condições tem que ser verdadeira
// if 

// Exercicio 1

const fome = prompt("Você está com fome? sim ou não")
const dinheiro = prompt("Você tem dinheiro? sim ou não")
const restaurante = prompt("O restaurante está aberto? sim ou não")

if (fome === "nao" || dinheiro === "não" ) {
    console.log("Hoje a janta é em casa");
} else if (fome === "sim" && dinheiro === "sim" && restaurante1 === "não") {
    console.log("Peça um Delivery");
} else if (fome === "sim" && dinheiro === "sim" && restaurante === "sim") {
    console.log("Hoje Vamos Jantar No restaurante");
}


