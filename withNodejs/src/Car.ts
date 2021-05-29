// decorator testing 
function CarDecorator( constructor: Function ){
    constructor.prototype.date=new Date();
    constructor.prototype.giveMeDate=()=>{
        console.log('running the givemedate function')
        console.log(constructor.prototype.date);
    }
    // return class extends constructor {
    //     date=new Date();
    //     // giveMeDate=()=>{
    //     //     alert(this.date);
    //     // }
    // }
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

console.log((newCar as any).date);
(newCar as any).giveMeDate();
















// generic learning
const makeTurple= <T,Y=any>(a:T,b:Y):[T,Y]=>{
    return [a,b];
}

console.log(makeTurple<string|null,number>('asdf',1111))

function last<T>(a:T[]){
    return a[a.length-1]
}

console.log(last<number>([1,2,3,2,5,]))

// use generic to have any properties
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

// interface of generic
interface Tab<T>{
    id:string;
    position:number;
    date:T;
}
type NumberTab=Tab<number>


// react pass generic to children function 

type FormProps<T>= {
    value:T
    childrenFunction:(value:T)=>void;
}

function Form <T>(props:FormProps<T>){
    return props.childrenFunction(props.value);
}
function children<T>(value:T){
    console.log('the value of this passed to props is '+value);
}

Form<number|boolean>({value: 123, childrenFunction: children})