let dia = 1;
let diastring = 'segunda'

switch (dia) {
    case 1:
        console.log('1')
        break;
    case 2:
        console.log('2')
        break;
    case 3:
        console.log('3')
        break;
    case 4:
        console.log('4')
        break;
    case 5:
        console.log('5')
        break;
    case 6:
        console.log('6')
        break;
    case 7:
        console.log('7')
        break;
    default:
        console.log('invalido')
}

function diaDaSemana(dia) {
    switch (dia) {
        case 1: return 'Domingo'
        case 2: return 'segunda'
        case 3: return 'terça'
        case 4: return 'quarta'
        case 5: return 'quinta'
        case 6: return 'sexta'
    }

}

function diaSemanaNumer(diastring) {
    switch (diastring) {
        case 'domingo': return 1
        case 'segunda': return 2
        case 'terça': return 3
        case 'quarta': return 4
        case 'quinta': return 5
        case 'sexta': return 6
        case 'sabado': return 7
        default: return 'inválido'
    }
}
console.log(diaDaSemana(dia))

console.log(diaSemanaNumer(diastring))