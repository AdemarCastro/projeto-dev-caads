// IEEE 754-2008 padrão JavaScript

let num1 = 0.7; // number
let num2 = 0.1; // number

num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0



// console.log(num1.toFixed(2)); // Não resolve
// num1 = Number(num1.toFixed(2)); // Resolve

num1 = Number(num1.toFixed(2));

console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2); // concatenação
// console.log(typeof num1);
// num1 = num1.toString();
// console.log(num1.toString(2)); // Representação binária sem alterar a variável
// console.log(num2.toFixed(2)); // Quantidade de casas após a virgula sem alterar a variável
// console.log(Number.isInteger(num1)); // Verificar se é do tipo Number
// let temp = num1 * 'Olá';
// console.log(temp);
// console.log(Number.isNaN(temp)); // Verificando se a conta é válida
// * Não faça conta com Strings