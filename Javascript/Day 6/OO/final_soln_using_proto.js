
const userMethods={
    // User Method Objects
    // Method about
    // key : value
    // about : method
    about : function(){
        return `${this.first_name}  ${this.last_name} is ${this.age} years old.`;
    },
    // Method is18
    // key : value
    // is18 : method
    is18 : function(){
        return this.age>=18;
    },

    sing : function(){
        return 'firstname';
    }
    
}


function createUser(first_name,last_name,email,age,address){
      
    // const user = {};// 1 . Creating empty object -> Object literals
    // other way with proto 
    const user = Object.create(userMethods);
    // proto property of object is used to fetch the functions
    user.first_name = first_name,
    user.last_name = last_name,
    user.email = email,
    user.age = age,
    user.address = address
    // Reference given
    // user.about = userMethods.about;
    // user.is18 = userMethods.is18;
    // user.sing = userMethods.sing;

   return user;
}

const user1= createUser("Tanuja","Kadam","tanuja7614@gmail.com",21,"home,building,pincode,state");
// console.log(user1);
// const is18 = user1.is18();
// console.log(is18);
// const about = user1.about();
// console.log(about);

const user2= createUser("Sanika","Chaure","sanika124@gmail.com",21,"home,building,pincode,state");
const user3= createUser("Sneha","Gaikwad","sneha231@gmail.com",21,"home,building,pincode,state");

console.log(user1);
const is18 = user1.is18();
console.log(is18);

/*

    JavaScript object.create() method is used to create a new object with the specified
     prototype object and properties. Object.create() method returns a new object with 
     the specified prototype object and properties.
   
     Return Value: Object.create() returns a new object with the specified prototype 
     object and properties. 

*/

