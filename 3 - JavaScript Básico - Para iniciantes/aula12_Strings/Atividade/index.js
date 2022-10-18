const nome = prompt('Digite seu nome completo: ');
document.body.innerHTML += `O seu nome é: <strong>${nome}</strong> <br />`;
document.body.innerHTML += `O seu nome tem ${nome.length} <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br />`;
document.body.innerHTML += `Qual o primeiro índice da LETRA no seu nome: ${nome[0]} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra 'r' no seu nome: ${nome.indexOf('r')} <br />`;
document.body.innerHTML += `Qual o último índice da LETRA no seu nome: ${nome[nome.length-1]} <br />`;
document.body.innerHTML += `Qual o último índice da letra 'r' no seu nome: ${nome.lastIndexOf('r')} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3, nome.length)} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br />`;

