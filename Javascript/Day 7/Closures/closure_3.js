// Outer function that takes 'power' as input
function myfunction(power) {
    // Returns an inner function that remembers 'power'
    return function(number) {
        return number ** power;
    };
}

// Creating square function using closure
const square = myfunction(2);
const ans = square(3); // 3² = 9
console.log(ans);      // Output: 9

// Creating cube function using closure
const cube = myfunction(3);
const ans1 = cube(3); // 3³ = 27
console.log(ans1);    // Output: 27
