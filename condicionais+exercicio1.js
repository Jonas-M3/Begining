// == valor igual independente do tipo (true) / != valor diferente independente do tipo (true) / > maior (true) / < menor (true) / >= maior ou igual (true) / <= menor ou igual (true) 
// === igual valor e o tipo (true) / !== diferente valor ou o tipo  (true)
// && e / || ou / ! não / else se não / else if se não se
// if (condição) {bloco de código} else {bloco de código}
// para && dar true as duas condições tem que ser verdadeiras
// para || dar true uma das condições tem que ser verdadeira


// Exercicio 1

const fome = prompt("Você está com fome? sim ou não")
const dinheiro = prompt("Você tem dinheiro? sim ou não")
const restaurante = prompt("O restaurante está aberto? sim ou não")

if (fome === "sim" && dinheiro === "nao" ) {
    console.log("Hoje Vamos Jantar Em Casa");
}else if (fome === "sim" && dinheiro === "sim" && restaurante === "sim") {
    console.log("Hoje Vamos Jantar No Outback");
}else {
    console.log("Peça Comida Via Delivery");

}