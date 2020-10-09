// boolean (true / false)
let isOpen: boolean;
isOpen = true;

// String ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 1;

// array (type[])
let items: number[];
items = [1, 2, 3];

// array generic
let values: Array<number>;
values = [1, 2, 3];

// * Novos do TS

// tuple (sabe o número de items e o tipo)
let title: [number, string];
title = [1, "foo"];

// enum (chave, valor)
enum Colors {
    white = '#fff',
    black = '#000' 
}

// any (qualquer coisa) NÃO É LEGAL!
let coisa: any;
coisa = "qualquer coisa";

// void (vazio)
function logger(): void {
    console.log('foo');
}

// null | undefined (não sabe valor, não foi definido)
type Bla = string | undefined;

// never (nunca vai retorna, exception)
function error(): never {
    throw new Error("error");
}

// object (diferente dos tipos acima, sendo qualquer coisa)
let cart: object;
cart = {
    key: "f1"
};

// type inference (com base no valor, define o tipo)
let message2 = "mensagem definida";
message2 = "mensagem nova";

window.addEventListener("click", (e) => {
    console.log(e.target)
})




