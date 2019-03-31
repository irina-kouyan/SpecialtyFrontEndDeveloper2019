var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.move = function () {
        console.log(this.name + " \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u0433\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u0441\u0443\u0448\u0435.");
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(name, population, isExtinct) {
        this.name = name;
        this.population = population;
        this.isExtinct = isExtinct;
    }
    Bird.prototype.move = function () {
        console.log(this.name + " \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u0433\u0430\u0435\u0442\u0441\u044F \u0432 \u0432\u043E\u0437\u0434\u0443\u0445\u0435.");
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(name, isExtinct, habitationArea) {
        this.name = name;
        this.isExtinct = isExtinct;
        this.habitationArea = habitationArea;
    }
    ;
    Fish.prototype.move = function () {
        console.log(this.name + " \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u0433\u0430\u0435\u0442\u0441\u044F \u0432 \u0432\u043E\u0434\u0435.");
    };
    return Fish;
}());
var Shark = new Fish('Акула', false, 'ocean');
Shark.move();
