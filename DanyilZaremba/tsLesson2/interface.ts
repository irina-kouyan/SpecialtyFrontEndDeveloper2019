interface Animal{
    name: string;
    move: () => void;
    isExtinct?: boolean;
    
}

class Cat implements Animal{
    name: string;
   
    constructor(name: string){
        this.name = name;
    }
    move(): void{
        console.log(`${this.name} передвигается по суше.`);
    }
}
class Bird implements Animal{
    name: string;
    isExtinct: boolean;
    population: number;
    constructor(name: string, population: number, isExtinct: boolean){
        this.name = name;
        this.population = population;
        this.isExtinct = isExtinct;
    }
    move(): void{
        console.log(`${this.name} передвигается в воздухе.`);
    }
}
class Fish implements Animal{
    constructor(public name: string, public isExtinct: boolean, public habitationArea: string){};
    move(): void{
        console.log(`${this.name} передвигается в воде.`)
    }
}

let Shark = new Fish('Акула', false, 'ocean');
Shark.move();