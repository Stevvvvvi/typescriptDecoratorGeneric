var a = [1, 'dsfasdf'];
var b = ['asdfasdf', 1];
var bb = ['asdf', 'asdf', 'dfdfdf'];
var carDecorator = function (constructor) {
    console.log(constructor);
};
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
        this.logo = 'hello';
    }
    return Car;
}());
var newCar = new Car('Honda');
console.log(newCar.logo);
