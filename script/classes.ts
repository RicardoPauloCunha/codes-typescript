// Abstract não pode criar objetos, mas pode entender a partir dessa classe
abstract class UserAccount {
    name: string;
    // Não pode chamar fora das classes
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }
}

class CharAccout extends UserAccount {
    // Forma mais pesada de privar, set e get
    private nickname: string;
    // Outra forma de privar, set
    readonly level: number;

    // Propriedade que faz ações
    get getLevel() {
        console.log("----- get level ----")
        return this.level
    }

    // Propriedade que seta um valor
    set setName(name: string) {
        this.name = name;
    }

    constructor(name: string, age: number, nickname: string, level: number) {
        // Para as props do objeto de cima
        super(name, age);

        this.nickname = nickname;
        this.level = level;
    }

    logCharDetails(): void {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at leve ${this.level}`)
    }
}

const john = new CharAccout("John", 12, "JohnBoy", 10);
john.logCharDetails();
console.log(john.getLevel);
john.setName = "Johns";