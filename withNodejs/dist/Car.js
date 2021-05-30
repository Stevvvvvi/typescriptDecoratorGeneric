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
        console.log(constructor.prototype.date);
    };
    constructor.prototype.logo = "updated logo";
}
var OtherDecorator = function (name) {
    // constructor.prototype.other="this is from other decorator"
    return function (constructor) {
        name ? constructor.prototype.logo = "this is the name of " + name
            :
                constructor.prototype.logo = "the car has no owners";
    };
};
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
        this.logo = 'this is a car logo';
    }
    Car = __decorate([
        OtherDecorator("Mike"),
        CarDecorator,
        __metadata("design:paramtypes", [String])
    ], Car);
    return Car;
}());
var newCar = new Car('Honda');
console.log(newCar.date);
newCar.giveMeDate();
console.log(newCar.other);
console.log(newCar.logo);
// method decorator
function PrintDecorator(target, propertyKey, descriptor) {
    target.constructor.prototype.otherTools = 'bbbbb';
    // console.log("this is toolName "+target.print);
    descriptor.writable = true;
    descriptor.value = function () {
        console.log("updated print function");
    };
    console.log("this is value of print method " + descriptor.value);
}
var Tool = /** @class */ (function () {
    function Tool() {
        this.toolName = 'tools';
    }
    Tool.prototype.print = function () {
        console.log('print function');
    };
    __decorate([
        PrintDecorator,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Tool.prototype, "print", null);
    return Tool;
}());
var newTool = new Tool();
console.log(newTool.otherTools);
console.log(newTool.print());
// newTool.print=function(){
//     console.log("I have changed print method")
// }
//property Decorator
function NameDecorator(target, propertyKey) {
    target.constructor.prototype.name = "MikeUpdated";
    // console.log("property decorator name "+propertyKey)
}
var Names = /** @class */ (function () {
    function Names(name) {
        this.name = name;
    }
    __decorate([
        NameDecorator,
        __metadata("design:type", String)
    ], Names.prototype, "name", void 0);
    return Names;
}());
var newName = new Names("Mike");
console.log("Property decorator update name test " + newName.name);
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
