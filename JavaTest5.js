let soma = 0;

console.log('Múltiplos de 5 de 1 a 100:');
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
        soma += i;
    }
}

console.log(`A soma dos múltiplos de 5 de 1 a 100 é: ${soma}`);