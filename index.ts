var a = [1,'dsfasdf']; 
var b: [string, number]=['asdfasdf',1];

type abc = string[];

let bb:abc = ['asdf','asdf','dfdfdf'];


const carDecorator= (constructor:Function)=>{
    console.log(constructor);
}

class Car {
    private brand:string;
    public logo:string;
    constructor(brand:string){
        this.brand=brand;
        this.logo='hello';
    }
}
let newCar=new Car('Honda');
console.log(newCar.logo)