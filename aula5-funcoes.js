function somar(a, b) {
    return a + b;
}

let resultado = somar(1, 2);
console.log(resultado);

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
// sem retorno
function mensagemBoasVindas() {
    console.log('----------')
    console.log('Bem vindo')
    console.log('----------')
}

console.log(calcularIMC(70, 1.75).toFixed(2));
mensagemBoasVindas();