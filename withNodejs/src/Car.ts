// decorator testing 
function CarDecorator( constructor: Function ){
    constructor.prototype.date=new Date();
    constructor.prototype.giveMeDate=()=>{
        console.log('running the givemedate function')
        console.log(constructor.prototype.date);
    }
    constructor.prototype.logo="updated logo"
}
const OtherDecorator=(name?:string)=>{
    // constructor.prototype.other="this is from other decorator"
    return (constructor:Function)=>{
        name ? constructor.prototype.other="this is the name of "+name
        : 
        constructor.prototype.other="the car has no owners";
    }

}

@OtherDecorator("Mike")
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
(<any>newCar).giveMeDate();
console.log((newCar as any).other)
console.log(newCar.logo);


// method decorator/////////////////////////////////////////////////////////
function PrintDecorator(target:Tool, propertyKey:string, descriptor:PropertyDescriptor){
    target.constructor.prototype.otherTools='bbbbb'
    // console.log("this is toolName "+target.print);
    descriptor.writable=true;
    descriptor.value=function (){
        console.log("updated print function")
    }
    console.log("this is value of print method "+descriptor.value);
}

class Tool {
    public toolName:string='tools'
    @PrintDecorator
    print( ){
        console.log('print function')
    }

}

const newTool=new Tool();
console.log((newTool as any).otherTools);
console.log(newTool.print());
// newTool.print=function(){
//     console.log("I have changed print method")
// }


//property Decorator////////////////////////////////////////////////////////

function NameDecorator(target:Names, propertyKey:string){
    target.constructor.prototype.name="MikeUpdated"
    // console.log("property decorator name "+propertyKey)
}
class Names{
    @NameDecorator
    public name:string
    constructor( name:string){
        this.name=name;
    }
}

const newName=new Names("Mike")
console.log("Property decorator update name test "+newName.name)


// parameter decorator //////////////////////////////////////////
function ParemeterDecorator(target:Object, PropertyKey:string,parameterIndex:number){

}

class Param{
    constructor(public random:boolean, @ParemeterDecorator public paramName:string){
        this.paramName=paramName;
        this.random=random;
    }
}





























// generic learning///////////////////////////////////////////////////////////
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



//advanced typescript ////////////////////////////////////////////////////////////////////
type Duck={
    color:string;
    feather:string;
    age:number;
}
type ReadOnlyDuck=Readonly<{
    color:string;
    feather:string;
    age:number;
}>

let newDuck:ReadOnlyDuck={color:'blue',feather:'light',age:2};

newDuck={...newDuck, age:3};

console.log(newDuck);

///partial /////////////////
type Starship = {
    name: string;
    enableHyperjump: boolean;
  };
  
  const updateStarship = (id: number, starship: Partial<Starship>) => {};
  
  updateStarship(1, { name: "explorer" });

  ///record<>/////////////////////////
  const starships:Record<string,Starship>={
      Explorer1:{
          name:'Explorer1',
          enableHyperjump:true,
      },
      Explorer2:{
          name:'Explorer2',
          enableHyperjump:false,
      }
  }
  

//InstanceType<T>////////////////////////////////

type Constructable<ClassInstance>=new (...arg:any[])=>ClassInstance;

function deletable<BaseClass extends Constructable<{}>>(Base:BaseClass){
    return class extends Base {
        deleted:boolean=true;
        delete(){this.deleted=false};
    }
} 

class Cat{
    // deleted:boolean=true;
    // delete(){this.deleted=false};
    constructor(public name:string){}
}

@deletable
class Dog{
    // deleted:boolean=true;
    // delete(){this.deleted=false};
    constructor(public name:string){}
}

const newDog=new Dog('wao')
console.log((newDog as any).deleted)

const DeletableCat=deletable(Cat);

type DeletableCatInstance=InstanceType<typeof DeletableCat>

class Profile{
    cat: DeletableCatInstance;
    constructor(cat:DeletableCatInstance){
        this.cat=cat;
    }
}

const profile =new Profile(new DeletableCat('Ferarry'));
console.log(profile);