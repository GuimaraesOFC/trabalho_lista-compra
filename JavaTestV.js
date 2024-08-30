const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Insira o primeiro número inteiro: ', (num1) => {
    readline.question('Insira o segundo número inteiro: ', (num2) => {
      const numero1 = parseInt(num1, 10);
      const numero2 = parseInt(num2, 10);
  
      // Verifica se os números são válidos
      if (isNaN(numero1) || isNaN(numero2)) {
        console.log('Por favor, insira números inteiros válidos.');
      } else {
        // Calcula a diferença
        const diferenca = Math.abs(numero1 - numero2);
        console.log(`A diferença entre o maior número e o menor é: ${diferenca}`);
      }
  
      readline.close();
    });
  });