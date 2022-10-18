// Atividade

// Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.925925 - Mensagem tem de aparecer na tela sendo que deve ser modificado as informações por váriaveis ou constantes

const nome = 'Ademar';
const sobrenome = 'Castro';
const idade = 24;
const peso = 59;
const alturaEmM = 1.65;
let indiceMassaCorporal;
let anoNascimento;
const anoAtual = 2022;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);

anoNascimento = anoAtual - idade;

// console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg', ', nasceu em', anoNascimento , 'tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal + '.');

// template strings -> Forma mais utilizada e recomendada

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, nasceu em ${anoNascimento} tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}.`);