// rest parameters : 

function myfunction(a,b,c){
    console.log(`a  is ${a}`);
    console.log(`b  is ${b}`);
    console.log(`c  is ${c}`);
}

myfunction(1,3,4);
// printed avaiable parameters
myfunction(10,20,30,40);





// Handling above condition with rest parameters

function myfunction(a,b,...c){
    console.log(`a  is ${a}`);
    console.log(`b  is ${b}`);
    console.log(`c  is ${c}`);
}

myfunction(1,3,4);
myfunction(10,20,30,40,50,60,70);


// Rest Parameter is used

const addAll = (...numbers) =>{
    
    let total = 0;
   
    for(let num of numbers){

        total = total + num;
    }

    return total;
    
}
const ans = addAll(1,2,3,4,5,6,7,8,9,10);
console.log(ans);
