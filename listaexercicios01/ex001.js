// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt= require('prompt-sync')();

//Declaracao de variavel com coleta de entrada
let verificarNumero = Number(prompt('Informe um número Inteiro: '));

//verificacao e retorno da consulta.
if (verificarNumero % 2 == 0) {
    console.log(`O número digitado foi: ${verificarNumero},  é um NÚMERO PAR.`);
} else {
    console.log(`O número digitado foi: ${verificarNumero}, é um NÚMERO ÍMPAR.`);
}