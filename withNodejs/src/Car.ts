function CarDecorator(constructor: Function ){
    constructor.prototype.date=new Date();
    constructor.prototype.giveMeDate=()=>{
        // alert(this.date);
    }
}
// type props={
//     brand:string;
// }
// type state={
//     [key:string]:any;
// }

@CarDecorator
class Car{
    private brand: string;
    public logo:string;
    constructor(brand:string){
        this.brand=brand;
        this.logo='this is a car logo'
    }
    
}
let newCar=new Car('Honda');

console.log((<any>newCar).date)



// generic learning
const makeTurple= <T,Y=any>(a:T,b:Y):[T,Y]=>{
    return [a,b];
}

console.log(makeTurple<string|null,number>('asdf',1111))

function last<T>(a:T[]){
    return a[a.length-1]
}

console.log(last<number>([1,2,3,2,5,]))

type name={
    firstName:string,
    lastName:string,
    // [key:string]:any,
}
type fullName=name & {
    fullName:string,
    [key:string]:any,
}
const makeFullName=<T extends name>(obj:T):fullName=>{
    return {
        ...obj,
        fullName:obj.firstName+' '+obj.lastName
    }
}

const v4=makeFullName({firstName:'bob', lastName:'U',way:1111, age:11})

console.log(v4.fullName);


