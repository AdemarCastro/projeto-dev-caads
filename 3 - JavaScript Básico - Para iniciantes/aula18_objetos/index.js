/* const array = [1, 2, 3];
array.push(4);
array[0] = 'Luiz';
array = 'Outra'; // Apenas se fosse Let
console.log(array); */

/* const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;
const nome02 = 'Roberto';
const sobrenome02 = 'Castro';
const idade02 = 18;
const nome03 = 'Helton';
const sobrenome03 = 'Junior';
const idade03 = 20; // Seria muito mais fácil criar um objeto

const pessoa1 = { // Objeto LITERAL
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

const pessoa2 = { // Objeto LITERAL
    nome: 'Maria',
    sobrenome: 'Miranda',
    idade: 20
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade); // Ainda sim vou ter que criar 1000 objetos para cada pessoa */

// Usando Function com Objetos

function criaPessoa (nome /* Parametro */, sobrenome, idade) {
    return {nome, sobrenome, idade}; // ou
    /* return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }; */
}

const pessoa1 = criaPessoa('Luiz' /* Argumento */, 'Otávio', 25);
const pessoa2 = criaPessoa('Roberta', 'Silva', 18);
const pessoa3 = criaPessoa('Junior', 'Igor', 16);
const pessoa4 = criaPessoa('Yara', 'Teresa', 13);
const pessoa5 = criaPessoa('Naruto', 'Uzumaki', 31);

// Argumento é o valor que é passado para o Parametro

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
console.log(pessoa5.nome, pessoa5.sobrenome, pessoa5.idade);


const pessoa10 = {
    nome: 'Ademar',
    sobrenome: 'Castro',
    idade: 28,

    /* function */ fala () {
        console.log('Olá mundo');
        console.log(`${this.sobrenome} está falando oi... que tem a idade atual de ${this.idade}.`);
    }, // Atenção com a virgula

    incrementoIdade() {
        this.idade++;
    }
};

pessoa10.fala();
pessoa10.incrementoIdade();
pessoa10.fala();
pessoa10.incrementoIdade();
pessoa10.fala();
pessoa10.incrementoIdade();
pessoa10.fala();


// Coração da linguagem JavaScript - Função, Objeto e Array
