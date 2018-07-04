let number = 10;
// we can't assign another value to a const in the same scope as opposed to let
// number = 1;
 {
     number = 20;
     console.log(number);
 }

console.log(number)

var car = {
    color: 'White',
    getCar: function(parameter){
        console.log(`${parameter}, Your car is ${this.color}`);
    }
}

// all three functions print same result
car.getCar('Nor');
car.getCar.call(car,'Nor');
car.getCar.call(car,['Nor']);