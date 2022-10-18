//                   0        1        2
const alunoNome = ['Luiz', 'Maria', 'João']; // O ideal é colocar apenas um tipo dentro, mas é permitido colocar vários tipos juntos, como String, Number, Boolean
alunoNome[alunoNome.length] = 'Luiza'; // Adicionando
alunoNome.unshift('Bruna'); // Adiciona no começo
alunoNome.unshift('Castro'); // Adiciona no começo
alunoNome.push('Lucas'); // Adiciona no final
alunoNome.push('Ademar'); // Adiciona no final
const removeFinal = alunoNome.pop(); // Remove do final
const removeInicio = alunoNome.shift(); // Remove do inicio
delete alunoNome[3]; // Remove um elemento especifico, João neste caso
console.log(alunoNome); // Exibindo
console.log(removeInicio); // Removido
console.log(removeFinal); // Removido
console.log(alunoNome[50]); // Não existe - Undefined
console.log(alunoNome.slice(0, 3)); // Do inicio - dividir os elementos
console.log(alunoNome.slice(0, -1)); // Do final - dividir os elementos
console.log(alunoNome.slice(0, -1)); // Do final - dividir os elementos
console.log(typeof alunoNome); // Vai apenas declarar que é objeto
console.log(alunoNome instanceof Array); // Perguntar se é um Array

alunoNome[0] = 'Eduardo'; // Altera
alunoNome[0] += ' Otávio'; // Adiciona
console.log(alunoNome[0]);
console.log(alunoNome[1]);
console.log(alunoNome[2]);