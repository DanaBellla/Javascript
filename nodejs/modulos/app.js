const saudacao = require('./meuModulo'); // Importando o módulo

const mensagem = saudacao('Joédio'); // Executando a função
console.log(mensagem);

const dividir = require('./divisão'); // Importando o módulo de divisão

const somar = require('./somar'); // Importando o módulo de soma

const resultado =(somar)(Num1, Num2); // Executando a função de soma
console.log(resultado);

const resultadoDivisao = dividir(10, 2); // Executando a função de divisão
console.log(`O resultado da divisão é: ${resultadoDivisao}`);