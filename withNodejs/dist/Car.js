"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// decorator testing 
function CarDecorator(constructor) {
    constructor.prototype.date = new Date();
    constructor.prototype.giveMeDate = function () {
        console.log('running the givemedate function');
        alert(constructor.prototype.date);
    };
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
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
        this.logo = 'this is a car logo';
    }
    Car = __decorate([
        CarDecorator,
        __metadata("design:paramtypes", [String])
    ], Car);
    return Car;
}());
var newCar = new Car('Honda');
console.log(newCar.date);
newCar.giveMeDate();
// generic learning
var makeTurple = function (a, b) {
    return [a, b];
};
console.log(makeTurple('asdf', 1111));
function last(a) {
    return a[a.length - 1];
}
console.log(last([1, 2, 3, 2, 5,]));
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + ' ' + obj.lastName });
};
var v4 = makeFullName({ firstName: 'bob', lastName: 'U', way: 1111, age: 11 });
console.log(v4.fullName);
function Form(props) {
    return props.childrenFunction(props.value);
}
function children(value) {
    console.log('the value of this passed to props is ' + value);
}
Form({ value: 123, childrenFunction: children });
