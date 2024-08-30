let numero = 8

if (!isNaN(numero)) { // Verifica se a entrada é um número.
    if (numero % 2 === 0) {
        console.log(numero + " é par.");
    } else {
        console.log(numero + " é ímpar.");
    }
} else {
    console.log("Por favor, digite um número válido.");
}
