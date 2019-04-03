import {Animal} from "./interfaces";



export class Cat implements Animal{
    name: string;
   
    constructor(name: string){
        this.name = name;
    }
    move(): void{
        console.log(`${this.name} передвигается по суше.`);
    }
}
export class Bird implements Animal{
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
export class Fish implements Animal{
    constructor(public name: string, public isExtinct: boolean, public habitationArea: string){};
    move(): void{
        console.log(`${this.name} передвигается в воде.`)
    }
}




