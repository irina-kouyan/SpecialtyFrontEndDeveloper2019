abstract class Car{
    abstract name: string;
    abstract horsepowers: number;
    abstract yearOfProduction: number;
    abstract doors: number;
    abstract typeCoupe: string;
    abstract seats: number;
    abstract modification: string;
    protected secretInfo: string;

    constructor(public brand: string){}

    abstract drive():void;
    public getInfo(): void{
        console.log({Name: this.name, Horsepowers:this.horsepowers, 'Year of Production':this.yearOfProduction, 'Number of Doors': this.doors, Coupe:this.typeCoupe, 'Number of seats': this.seats, 'Engine modification': this.modification});
    }

}
class BMW extends Car{
    constructor(public name: string, public horsepowers: number, public yearOfProduction: number, public doors:number, public typeCoupe: string, public seats: number, public modification: string, protected secretInfo: string){
        super('BMW');
    }
    drive(){
        console.log(`${this.brand} ${this.name} едет.`)
    }
}
class Tesla extends Car{
    constructor(public name: string, public horsepowers: number, public yearOfProduction: number, public doors:number, public typeCoupe: string, public seats: number, public modification: string, protected secretInfo: string){
        super('Tesla');
    }
    drive(){
        console.log(`${this.brand} ${this.name} едет.`)
    }
}
class Ford extends Car{
    constructor(public name: string, public horsepowers: number, public yearOfProduction: number, public doors:number, public typeCoupe: string, public seats: number, public modification: string, protected secretInfo: string){
        super('Ford');
    }
    drive(){
        console.log(`${this.brand} ${this.name} едет.`)
    }
}
let x5 = new BMW('E70', 407, 2013, 5, 'SUV', 5, '50i', 'BMW X5 secrets');
x5.getInfo();
let i3 = new BMW('i3', 184, 2018, 5, 'Хэтчбек', 4, '42.2', 'i3 secret info');
i3.getInfo();
let model3 = new Tesla('Model 3', 261, 2017, 4, 'Седан', 5, 'P50', 'Model 3 secret info');
model3.getInfo();
let modelS = new Tesla('Model S', 539, 2016, 5, 'Лифтбек', 5, 'P90D', 'Model S secret info');
modelS.getInfo();
let mondeo = new Ford('Mondeo Sedan IV', 210, 2017, 4, 'Седан', 5, '2.0 TDCi', 'Ford Mondeo secrets');
mondeo.getInfo();
let mustang = new Ford('Mustang', 526, 2017, 2, 'Купе', 2, 'Shelby GT350', 'Too cool');
mustang.getInfo();
