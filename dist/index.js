"use strict";
// Define o input1 como o tipo input
var input1 = document.getElementById("num1");
// Define o input2 como o tipo input
var input2 = document.getElementById("num2");
// ! avisa que tem o button
var button = document.getElementById("button");
// Define os tipos dos parametros, como o tipo number
function sum(a, b) {
    return a + b;
}
// Converte a string para number
button.addEventListener("click", function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
});
// * Se o TS não reclama então deixa como está
