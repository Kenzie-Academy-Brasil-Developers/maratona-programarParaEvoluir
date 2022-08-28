// declaração de variáveis (let e cosnt)

const NomeFacilitador01 = "Luiz";
let NomeFacilitador02 = "Maria";

// tipos de variáveis

//string - Texto
const nome = "Luiz";

//Number - Número
let idade = 28;
let altura = 1.74;

//boolean - Verdadeiro ou Falso

let isHuman = true;
const gostaDeAlgumaCoisa = false;

// outros

let indefinido = undefined;
let nulo = null;

// tipos de estrutura de dados:

// array
let tipoArray = [];

const arrayLuiz = ["Luiz", 1.74, 28, false, true];
console.log(arrayLuiz);
console.log(arrayLuiz[0]);

let notasDaTurma = [10, 8, 6, 9, 10, 1, 0];

//console.log(arrayLuiz);

// objeto
let tipoObjeto = {};

let objetoLuiz = {
  nome: "Luiz",
  idade: 28,
  altura: 1.74,
  isHuman: true,
};

// ================================

// Operadores lógicos

// Igualdade  ==  ou ===

console.log(5 == 5);

console.log(5 === "5");

console.log("luiz" == "luiz"); // verdadeiro
console.log("luiz" == "luiz paulo"); // falso

// Diferente  !=  ou  !==

console.log(5 !== "5");

// Maior e menor que     < ou >

console.log(5 > 4);
console.log(5 < 4);

let idadePessoa = 18;

console.log(idadePessoa >= 18);

// operador ou    ||
console.log(5 == 5 || 6 == 7);

// operador e     &&
console.log(5 == 5 && 6 == 7);

// ============= operadores matemáticos===

//SOMA    +

let numero1 = 5;
let numero2 = 6;
let soma = numero1 + numero2;

console.log(soma);

//Subtração    -

let numero3 = 5;
let numero4 = 6;
let soma2 = numero3 - numero4;

console.log(soma2);

// multiplicação   *

let mult1 = 2;
let mult2 = 6;
let resultMult = mult1 * mult2;

console.log(resultMult);

// divisão     /

let div1 = 30;
let div2 = 2;

let divResult = div1 / div2;

console.log(divResult);

// condicionais  if else

idadePessoa2 = 17;

if (idadePessoa2 >= 18) {
  console.log("Voce pode tirar CNH");
} else {
  console.log("Voce NÃO pode tirar CNH");
}

// exemplo de um banco

let salario = 4000;

if (salario >= 10000) {
  console.log("Você será OURO");
} else if (salario >= 5000 && salario < 10000) {
  console.log("Você será PRATA");
} else {
  console.log("Você será BRONZE");
}

// Estrutura de repetição For

// for (let index = 0; index < 20; index++) {
//   console.log("volta do for numero", index);
// }

let pessoas = [
  "luiz",
  "maria",
  "joão",
  "pedro",
  "mariana",
  "felipe",
  "Bartolomeu",
  "sssssss",
];

for (let i = 0; i < pessoas.length; i++) {
  console.log(pessoas[i]);
}
