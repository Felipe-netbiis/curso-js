function somarValores(valor1,valor2){
    if(typeof valor1!== "number" || typeof valor2!== "number"){
        throw new Error("os valores devem ser números");
    }
return valor1+valor2;
}

console.log(somarValores("10","20"));

