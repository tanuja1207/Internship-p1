// and  or operators



let firstname = "Tanuja";
let age = 21;


// Conditions checked but separately
 if(firstname[0]=== "T")
{
 console.log("Name starts with T");
}

if(age>18)
{
    console.log("you are above 18");
}



// Conditions checked but Both at once


// Both a or b condition should be true 


if(firstname[0]=== "T" && age>18){
     console.log("Name starts with T and above 18");
}else{
    console.log("not qualified");
}



// atleast 1 should be true to get if condition

if(firstname[0]=== "T" || age>18){
    console.log("Name starts with T and above 18");
}else{
   console.log("not qualified");
}