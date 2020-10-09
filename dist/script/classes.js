"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract não pode criar objetos, mas pode entender a partir dessa classe
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " years old.");
    };
    return UserAccount;
}());
var CharAccout = /** @class */ (function (_super) {
    __extends(CharAccout, _super);
    function CharAccout(name, age, nickname, level) {
        var _this = 
        // Para as props do objeto de cima
        _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    Object.defineProperty(CharAccout.prototype, "getLevel", {
        // Propriedade que faz ações
        get: function () {
            console.log("----- get level ----");
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccout.prototype, "setName", {
        // Propriedade que seta um valor
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    CharAccout.prototype.logCharDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " and has the char " + this.nickname + " at leve " + this.level);
    };
    return CharAccout;
}(UserAccount));
var john = new CharAccout("John", 12, "JohnBoy", 10);
john.logCharDetails();
console.log(john.getLevel);
john.setName = "Johns";
