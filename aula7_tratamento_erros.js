// let numero = 10;
// try {
//     console.log(numero.toUpperCase());
// } catch (erro) {
//     console.log("Um erro aconteceu: " + erro.message);
// } finally {
//     console.log("Finalizando")
// }

try {
    //type error
    console.log(numero.toUpperCase());

    //reference error
    console.log(teste)

    // syntax error
    // console.log('teste)
} catch (error) {
    console.log("Um erro aconteceu: " + error.message);
} finally {
    console.log('Fim')
}
