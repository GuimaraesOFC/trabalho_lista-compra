const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Pergunta ao usuário pelo primeiro valor
  readline.question('Insira o primeiro valor: ', (valor1) => {
    // Pergunta ao usuário pelo segundo valor
    readline.question('Insira o segundo valor: ', (valor2) => {
      const num1 = parseFloat(valor1);
      const num2 = parseFloat(valor2);
  
      // Verifica qual valor é maior e imprime o resultado
      if (num1 > num2) {
        console.log(`O maior valor é: ${num1}`);
      } else if (num2 > num1) {
        console.log(`O maior valor é: ${num2}`);
      } else {
        console.log('Os dois valores são iguais.');
      }
  
      // Fecha a interface de linha de comando
      readline.close();
    });
  });