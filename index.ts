var a = [1,'dsfasdf']; 
var b: [string, number]=['asdfasdf',1];

type abc = string[];

let bb:abc = ['asdf','asdf','dfdfdf'];



// decorator learning

function CarDecorator1(constructor: Function ){
    constructor.prototype.date=new Date();
    constructor.prototype.giveMeDate=()=>{
        alert(this.date);
    }
}

@CarDecorator1
class Car1{
    private brand: string;
    public logo:string;
    constructor(brand:string){
        this.brand=brand;
        this.logo='this is a car logo'
    }
    
}
let newCar1=new Car1('Honda');

console.log((<any>newCar1 as any).date)

