// Block Scope Vs Function Scope


// ------------------------------------------------------------

/*

{   
    // Blocked Scoped
    const firstname = "tanuja";
    console.log(firstname);
}
// Outer Global body scope
const firstname = "shweta";
console.log(firstname);

*/

//-------------------------------------------------------------

/*
// In case of var

{
    var firstname = "tanuja";
}

{
    console.log(firstname); 
}
console.log(firstname); 
// can be accessed 
// for var whole global scope is function
// var is function scoped
*/
//--------------------------------------------------------------------
let firstname="tanu"; 
// can be accessed through lexical scope by
function myApp(){
    if(true){
        let firstname = "tanuja"; 
        console.log(firstname); 
    }
    console.log(firstname);
}
myApp();