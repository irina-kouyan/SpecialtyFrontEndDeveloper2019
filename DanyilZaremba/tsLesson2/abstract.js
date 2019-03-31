var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.getInfo = function () {
        console.log({ Name: this.name, Horsepowers: this.horsepowers, 'Year of Production': this.yearOfProduction, 'Number of Doors': this.doors, Coupe: this.typeCoupe, 'Number of seats': this.seats, 'Engine modification': this.modification });
    };
    return Car;
}());
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(name, horsepowers, yearOfProduction, doors, typeCoupe, seats, modification, secretInfo) {
        var _this = _super.call(this, 'BMW') || this;
        _this.name = name;
        _this.horsepowers = horsepowers;
        _this.yearOfProduction = yearOfProduction;
        _this.doors = doors;
        _this.typeCoupe = typeCoupe;
        _this.seats = seats;
        _this.modification = modification;
        _this.secretInfo = secretInfo;
        return _this;
    }
    BMW.prototype.drive = function () {
        console.log(this.brand + " " + this.name + " \u0435\u0434\u0435\u0442.");
    };
    return BMW;
}(Car));
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla(name, horsepowers, yearOfProduction, doors, typeCoupe, seats, modification, secretInfo) {
        var _this = _super.call(this, 'Tesla') || this;
        _this.name = name;
        _this.horsepowers = horsepowers;
        _this.yearOfProduction = yearOfProduction;
        _this.doors = doors;
        _this.typeCoupe = typeCoupe;
        _this.seats = seats;
        _this.modification = modification;
        _this.secretInfo = secretInfo;
        return _this;
    }
    Tesla.prototype.drive = function () {
        console.log(this.brand + " " + this.name + " \u0435\u0434\u0435\u0442.");
    };
    return Tesla;
}(Car));
var Ford = /** @class */ (function (_super) {
    __extends(Ford, _super);
    function Ford(name, horsepowers, yearOfProduction, doors, typeCoupe, seats, modification, secretInfo) {
        var _this = _super.call(this, 'Ford') || this;
        _this.name = name;
        _this.horsepowers = horsepowers;
        _this.yearOfProduction = yearOfProduction;
        _this.doors = doors;
        _this.typeCoupe = typeCoupe;
        _this.seats = seats;
        _this.modification = modification;
        _this.secretInfo = secretInfo;
        return _this;
    }
    Ford.prototype.drive = function () {
        console.log(this.brand + " " + this.name + " \u0435\u0434\u0435\u0442.");
    };
    return Ford;
}(Car));
var x5 = new BMW('E70', 407, 2013, 5, 'SUV', 5, '50i', 'BMW X5 secrets');
x5.getInfo();
var i3 = new BMW('i3', 184, 2018, 5, 'Хэтчбек', 4, '42.2', 'i3 secret info');
i3.getInfo();
var model3 = new Tesla('Model 3', 261, 2017, 4, 'Седан', 5, 'P50', 'Model 3 secret info');
model3.getInfo();
var modelS = new Tesla('Model S', 539, 2016, 5, 'Лифтбек', 5, 'P90D', 'Model S secret info');
modelS.getInfo();
var mondeo = new Ford('Mondeo Sedan IV', 210, 2017, 4, 'Седан', 5, '2.0 TDCi', 'Ford Mondeo secrets');
mondeo.getInfo();
var mustang = new Ford('Mustang', 526, 2017, 2, 'Купе', 2, 'Shelby GT350', 'Too cool');
mustang.getInfo();
