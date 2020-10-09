// Define o input1 como o tipo input
const input1 = document.getElementById("num1") as HTMLInputElement;
// Define o input2 como o tipo input
const input2 = document.getElementById("num2") as HTMLInputElement;
// ! avisa que tem o button
const button = document.getElementById("button")!;

// Define os tipos dos parametros, como o tipo number
function sum(a: number, b: number) {
    return a + b;
}

// Converte a string para number
button.addEventListener("click", function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
});

// * Se o TS não reclama então deixa como está