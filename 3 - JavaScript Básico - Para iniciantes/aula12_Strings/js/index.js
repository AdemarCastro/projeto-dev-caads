//                012345678910
let umaSrting = "Um \"texto\"";

console.log(umaSrting.charAt(6));
console.log(umaSrting[0]);
console.log(umaSrting.concat(' ', 'em', ' um', ' lindo dia.'));
console.log(umaSrting + ' em um lindo dia.');
console.log(`${umaSrting} em um lindo dia.`);
console.log(umaSrting.indexOf('o', 3));
console.log(umaSrting.lastIndexOf('o'));
console.log(umaSrting.match(/[a-z]/));
console.log(umaSrting.search(/[m]/));
console.log(umaSrting.replace(/t/g, 'Outro')); // Substitui a letra em todo o texto
console.log(umaSrting.length);
console.log(umaSrting.slice(4, 9));
console.log(umaSrting.slice(-3, -2));
console.log(umaSrting.substring(umaSrting.length -5, umaSrting.length -1));
console.log(umaSrting.split(' '));
console.log(umaSrting.split('t'));
console.log(umaSrting.split(' ', 1));
console.log(umaSrting.toUpperCase()); // Maiusculo
console.log(umaSrting.toLowerCase()); // Minusculo

// developer.mozilla.org/pt-BR/docs/Web/JavaScript
// Site oficial do Mozilla de documentação do JavaScript