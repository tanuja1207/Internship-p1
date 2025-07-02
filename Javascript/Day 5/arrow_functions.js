//################# Function in JavaScript ############### 


// #############  Basics OF Function ###########
//Arrow Function
/*
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");


// So We can make function and just call its function
// Declaration of Arrow function :
const printText = () =>{
    console.log("This is console text");
}
// Calling Function / Invoked Function/ Run Function
// Code Reusability
printText();
printText();
printText();
*/



/*
// Function Expression 
// we initialize const variable to function
// so addition here expresses function
const addition = ()=>{
    return 12+4;
  }
  const result = addition();
  console.log(result);
  */
  
  
/*
    const additionofThree = (num1,num2,num3)=>{
        return num1 + num2+num3
    
     }
    
    // const sumofThree = additionofThree(10,20); // 10+20+undefined = NAN
     const sumofThree = additionofThree(10,20,30); // 10+20+30 = 60
     console.log(sumofThree);
    */
    
    // odd or Even 
    /*
    const isEven=  (num) =>{
      if(num % 2 === 0){
            return true;
        }
        return false;
    }
    
*/
/*
    //  const isEven = num=>  num % 2 === 0;

   function isEven(num){
       
    return num % 2 === 0;
  }

console.log(isEven(2));

   */   
    
  const firstChar = (str)=>{
        return str[0];
    }
    
    console.log(firstChar("tanuja"));
    
    
    // Create function
    // input : array , target(number)
    // output : index of target present in array
    // linear Search
    
   const linearSearch = (arr,target)=>{
        
        for(let i=0;i<arr.length; i++){
            if(arr[i]===target){
                return i;
            }
        }
        return -1;
    }
    const arr = [1,2,3,4,5,6,7,8,9,10];
    const res = linearSearch(arr,10);
    console.log(res);
    
    
  
  // Above All are function expression :
