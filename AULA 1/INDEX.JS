const nome = 'Vitória';
const sobrenome = 'Ferreira de Sá';
const idade = 23;
const cidade = 'São Bernardo do Campo';
const estado = "São Paulo"
const peso = 63.5;
const alturaEmM = 1.63;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2021 - idade;
console.log(`Olá! me chamo ${nome} ${sobrenome}, tenho ${idade} anos de idade e nasci no ano de ${anoNascimento} em ${cidade} - ${estado}.`)
console.log(`Gosto de exercícios físicos e, recentemente descobri que meu IMC é de ${imc}.`)