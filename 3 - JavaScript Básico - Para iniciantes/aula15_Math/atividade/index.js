const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo'); /* método */
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML += `<p>Seu número - 2 é ${numero - 2}</p>`;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** (1/2)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando pra baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando pra cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para o número inteiro mais próximo: ${Math.round(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;

// é recomandado que tenha apenas um elemento com este ID na página










// let numero = prompt(`Seu número é: `);
// document.body.innerHTML += `<h3>Seu número é ${numero}</h3>`;
// document.body.innerHTML += `Raiz quadrada: ${numero ** (1/2)}</br>`;
// document.body.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}</br>`;
// document.body.innerHTML += `É NaN: ${Number.isNaN(numero)}</br>`;
// document.body.innerHTML += `Arrendondando para baixo: ${Math.min(numero)}</br>`;
// document.body.innerHTML += `Arrendondando para cima: ${Math.max(numero)}</br>`;
// document.body.innerHTML += `Com duas casas decimais: ${}</br>`;
