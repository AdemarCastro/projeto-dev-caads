/* Primitivos - string, number, boolean, undefined, null (bigint, symbol) ** Não podem ser mudados */

// Exemplo

/* let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome);

let a = 'A';
let b = a; // Cópia - B vai manter seu valor independente do valor de A
a = 'Outra coisa';
console.log(a, b);
 */

// Valor que não é primitivo 
// Referência (mutável) - array, object, function

/* let a = [1, 2, 3];
//let b = a; // B aponta para o mesmo local da memória que A - Igual ponteiros em C
let b = [...a]; // Cópia do Array de A para o B, não mais pega o local de memória
let c = b;
console.log(a, b);

a.push(4); // Também altera o B
console.log(a, b);

b.pop(); // Também altera o A
console.log(a, b);

a.push('Luiz');
console.log(c);
// let b = a; -> B aponta para o mesmo local de memória que A */

const a = {
    nome: 'Luiz',
    sobrenome: 'Castro'
};

// const b = a; // Recebe o local de memória de A

const b = {...a}; // Forma de alterar apenas o valor de B e não pegar a referência de memória de A. Pois os valores Referências pegam o local de memória automaticamente do contrário.

a.nome = 'João';
console.log(b);
console.log(a);
