// ** Class Decorator: Default values da class

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

function delay(ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any) {
            console.log(`Espetando ${ms}...`);
            
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms);

            return descriptor;
        }
    }
}

class Greeter {
    greeting: string

    constructor(g: string) {
        this.greeting = g;
    }

    // Esperar um tempo e depois vai rodar o método (ms)
    @delay(2000)
    greet() {
        console.log(`Hello! ${this.greeting}`);
    }
}

const pessoinha = new Greeter("Pessoinha!");
pessoinha.greet();