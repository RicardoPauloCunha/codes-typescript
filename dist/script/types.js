"use strict";
// boolean (true / false)
var isOpen;
isOpen = true;
// String ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// number (int, float, hex, binary)
var total;
total = 1;
// array (type[])
var items;
items = [1, 2, 3];
// array generic
var values;
values = [1, 2, 3];
// * Novos do TS
// tuple (sabe o número de items e o tipo)
var title;
title = [1, "foo"];
// enum (chave, valor)
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa) NÃO É LEGAL!
var coisa;
coisa = "qualquer coisa";
// void (vazio)
function logger() {
    console.log('foo');
}
// never (nunca vai retorna, exception)
function error() {
    throw new Error("error");
}
// object (diferente dos tipos acima, sendo qualquer coisa)
var cart;
cart = {
    key: "f1"
};
// type inference (com base no valor, define o tipo)
var message2 = "mensagem definida";
message2 = "mensagem nova";
window.addEventListener("click", function (e) {
    console.log(e.target);
});
