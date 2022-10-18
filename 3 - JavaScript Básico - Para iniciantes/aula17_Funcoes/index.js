/* function saudacao(nome) {
    // console.log(`Bom dia! ${nome}`); // Protegido - não pode ser acessado por fora
    return `Bom dia! ${nome}`; // Não retorna nada, apenas mostra um valor na tela
}

const variavel = saudacao('Luiz');
console.log(variavel);
saudacao('Maria');
saudacao('João'); */

/* function soma(x = 1, y = 1) { // com valores pré definidos
    const resultado = x + y;
    console.log('Olá');
    return resultado;
}

const resultado = soma();
console.log(resultado); */

/* console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));

console.log(soma(2, 2));

const resultado = soma(10, 2); // resultado não tem nada a ver com a outra variável dentro da função.
console.log(resultado);

const resultado2 = soma('luiz', 'castro');
console.log(resultado2); */


const raiz = function(n) { // outra maneira de fazer : const raiz = n => n ** 0.5;
    return n ** 0.5;
}; // precisa terminar com ';' sempre que usar sinal de atribuição '=' para criar uma função

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// Maneira mais moderna; ARROW FUNCTION

const raizAoQuadrado = n => n ** 0.5;

console.log(raiz(64));

const soma = function(n) {
    return n + n;
};

console.log(soma(9));

const soma2 = n => n + n;

console.log(soma2(18));

const multi = function(n) {
    return n * n;
};

console.log(multi(9));

const multi2 = n => n * n

console.log(multi2(9));

const divisao = function(n) {
    return n / n;
};

console.log(divisao(9));

const divisao2 = n => n / n

console.log(divisao2(10));

const multi3 = (n, a, c, d) => n * a * c * d

console.log(multi3(3, 4, 5, 6));

const raizAoCubo = n => n ** (1/3)

console.log(raizAoCubo(8));