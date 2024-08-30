const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Por favor, insira sua idade: ', idade => {
    const idadeNum = parseInt(idade, 10); // Converte a entrada para um número inteiro
  
    if (!isNaN(idadeNum)) { // Verifica se a conversão para número foi bem-sucedida
      if (idadeNum >= 18) {
        console.log('Você é maior de idade.');
      } else {
        console.log('Você não é maior de idade.');
      }
    } else {
      console.log('Por favor, insira uma idade válida.');
    }
  
    readline.close();
  });