// filter Method in Array Methods.

const numbers = [1,3,2,6,4,8];

const isEven= function(number){
    return number % 2 === 0;
}

const Even_numbers = numbers.filter(isEven);
console.log(Even_numbers);

