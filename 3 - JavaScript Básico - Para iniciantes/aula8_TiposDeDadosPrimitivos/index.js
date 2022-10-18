// String, number, undefined, null, boolean
const nome = 'Luiz'; // string
const nome1 = "Luiz"; // string
const nome2 = `Luiz`; // string
const num1 = 10;
const num2 = 10.52;
let nomeAluno; // undefined = Não aponta pra local nenhum na mem
let sobrenomeAluno = null; // Nulo -> Não aponta pra local nenhum na mem // Utiliza quando queremos desconfigurar uma váriavel * quero que essa variável não aponte para um local na memoria
const boolean =  true; // const alunoAprovado = true ou false; (lógico)

// console.log(typeof nome, typeof num1); // para ver o tipo da variavel

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);

console.log(a, b);