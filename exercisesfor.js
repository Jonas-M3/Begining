// Exercise 1
let valor = Number(prompt("Escolha Um Número inteiro!"))
for(let t = 0; t <= valor; t++){
    console.log(t)
}

// Exercise 2

for(let i = 0; i <= 10 ; i++){
    console.log(i*5)
}

// Exercise 3
for(let i = 10; i >= 0; i--){
    console.log(i*5)
}

// Exercise 4

let num = parseInt(prompt("Escolha Um número inteiro e positivo"))
 for(let i = num;  i <= num + 2; i++){
   console.log("tabuada do número escolhido: " + i) 
    for(let n =0; n <= 10; n++){
      console.log(i + " X " + n + " = " + (i*n))
}
}