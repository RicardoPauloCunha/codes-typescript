"use strict";
// ** Class Decorator: Default values da class
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// // Factory
// function Logger(prefix: string){
//     return (target) => {
//         console.log(`${prefix} - ${target}`);
//     }
// }
// @Logger("awesome")
// class Foo {
// }
// function setAPIVersion(apiVersion: string){
//     return (constructor) => {
//         return class extends constructor {
//             version = apiVersion
//         }
//     }
// }
// // Decorator - anotar a versão da API
// @setAPIVersion('1.0.0')
// class API {
// }
// console.log(new API())
// ** Property Decorator: DataAnnotations
// function minLength(length: number){
//     return (target: any, key: string) => {
//         let val = target[key];
//         const getter = () => val;
//         const setter = (value: string) => {
//             if (value.length < length)
//                 console.log(`Error: você não pode criar ${key} com tamanho menor que ${length}`);
//             else
//                 val = value;
//         }
//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter,
//         })
//     }
// }
// class Movie {
//     // Validação - se for menor que 5 - erro
//     @minLength(5)
//     title: string;
//     constructor(t: string)
//     {
//         this.title = t;
//     }
// }
// const movie = new Movie("Interstellar");
// console.log(movie.title);
// ** Method Decorater
function delay(ms) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Espetando " + ms + "...");
            setTimeout(function () {
                originalMethod.apply(_this, args);
            }, ms);
            return descriptor;
        };
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(g) {
        this.greeting = g;
    }
    // Esperar um tempo e depois vai rodar o método (ms)
    Greeter.prototype.greet = function () {
        console.log("Hello! " + this.greeting);
    };
    __decorate([
        delay(2000)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
var pessoinha = new Greeter("Pessoinha!");
pessoinha.greet();
