
// Important Array Methods :

        //  ################# For Each ##############
const numbers = [4,2,5,8];

function myfunct(number,index){

    console.log("index is ",index);
    console.log(`${number}*2 = ${number*2} `);

    console.log(`index is ${index} and number is ${number}`);
}



for(let i =0;i<numbers.length;i++){

    myfunct(numbers[i],i);
}



numbers.forEach(myfunct);



const users = [
   {firstName:"Tanuja",age : 21},
   {firstName:"Sanu",age : 19},
   {firstName:"Shreya",age : 23},
   {firstName:"Sneha",age : 17},
   {firstName:"Priya",age : 18},
]

// More often seen
users.forEach(function(user){
    console.log(user.firstName);
});

// recent in ES6
for(let user of users){
    console.log(user.firstName);
}

users.forEach((user,index)=>{
    console.log(user.firstName,index);
})