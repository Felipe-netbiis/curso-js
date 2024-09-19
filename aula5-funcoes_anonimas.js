// funcoes anonimas e expressões de função

// sem nome, puxada por variável
let anonima = function(){
    console.log("exemplo");
}

anonima();

// arrow function
let arrow = () => { console.log('Arrow function');}
arrow();

let somar = (a,b) => a+b;
let imc = (peso,altura) => (peso/(altura**2)).toFixed(2);

console.log(somar(5,10));
console.log(imc(70,1.75));