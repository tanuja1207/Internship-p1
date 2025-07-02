// ################# Lexical Scope ##################################
/*
const myvar = "value1";

function myApp(){
     
    function myfunc(){
        // const myvar= "value59";
        console.log("inside myFunc",myvar);
    }
    
    console.log(myvar);
    myfunc();
}
*/
myApp();
function myApp(){
     
    const myvar = "value1";
    function myfunc(){
        const myvar= "value59";
        console.log("inside myFunc",myvar);
    }
    const myfunc2 = function(){}
    const myfunc3 = () =>{}
    console.log(myvar);
    myfunc();
}
