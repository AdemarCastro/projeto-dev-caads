let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let varAux;

/* varAux = varA;
varA = varB;
varB = varC;
varC = varAux; */

// outra forma de fazer sem criar uma variavel Temporaria

[varA, varB, varC] = [varB, varC, varA];

console.log (varA, varB, varC);
