// Aritméticos 
// + Adição ou Concatenação
// - Subtração / Divisão * Multiplicação 
// ** Potenciação
// % Resto da divisão
// ++ Depois - Operador de incremento / Antes, ele primeiro incrementa o valor e depois mostra o novo valor, depois ele primeiro mostra o valor e depois incrementa o valor
// -- Operador de decremento / Antes, ele primeiro decrementa o valor e depois mostra o novo valor, depois ele primeiro mostra o valor e depois decrementa o valor

/* Precedencia
()
**
* / %
+ -
*/
/* 
let contador = 1;
contador++;
console.log(contador); */

let contador = 0;
contador += 2; // = contador = contador + 2;
contador **= 10; // = contador = contador ** 2;
console.log(contador);

// NaN - Not a number - tomar cuidado com  os tipos de dados do seu programa

// JavaScript tenta resolver a maioria dos problemas, exemplo

const num1 = 10;
const num2 = Number('5.2'); // Primeiro metodo de conversão de String para Número
// parseFloat(decimais) parseInt(inteiro) Number(Se vira kkk)
console.log(num1 * num2);
console.log(typeof num2);

// 3 Maneiras diferentes de conversão de String para Número

// 1) parseInt - Apenas para um número Inteiro, eliminando as casas decimais
const number1 = parseInt('100');
console.log(number1);

// 2) parseFloat - Apenas para um número Decimal
const number2 = parseFloat('100.548121');
console.log(number2);

// 3) Number - JavaScript faz a conversão da maneira que achar melhor
const number3 = Number('121.44843');
console.log(number3);
