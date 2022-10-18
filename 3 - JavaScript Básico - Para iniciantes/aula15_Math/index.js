let num1 = 9.4151;
let num2 = Math.floor(num1); // arrendonda pra baixo
console.log(num2);
num2 = Math.ceil(num1); // arrendonda pra cima
console.log(num2);
num2 = Math.round(num1); // arrendoda para o número inteiro mais próx
console.log(num2);
console.log(Math.max(1,2,3,822,-88,19)); // maior número
console.log(Math.min(1,2,3,822,-88,19)); // menor número
const aleatorio1 = Math.random(); // numero aleatório
console.log(aleatorio1);
const aleatorio2 = Math.random() * (10 /* max */- 5 /* min */) + 5; // aleatorio com regras
console.log(aleatorio2);
const aleatorio3 = Math.round(Math.random() * (10 - 5 ) + 5); // aleatorio com regras
console.log(aleatorio3);
console.log(Math.PI); // número PI
console.log(Math.pow(2, 10)); // eleva a N 
console.log(2 ** 10); // mesma coisa da funçao pow, mas com operador
console.log(9 ** (1/2)); // raiz quadrada
console.log(9 ** 0.5); // raiz quadrada
console.log(Math.sqrt(9)); // raiz quadrada
console.log(!!(100 / 0)); // Infinity - Tomar cuidado com essa conta pois ela vai dar como verd

