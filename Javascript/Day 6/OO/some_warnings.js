
// Don't do this Mistakes : 



const user1 = {
    first_name : "Tanuja",
    age : 21,
  
    about : function(){

     console.log(this);

    console.log(this.first_name,this.age);
    }

}


// user1.about(); 
// Here this of about is pointing to object instance of user1

const myfunc = user1.about;
myfunc();
// we assigned about function to myfunc




const myfunc1 = user1.about.bind(user1);
myfunc1();
