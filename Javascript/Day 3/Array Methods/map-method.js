// ################### Map method #####################
const users = [
    {firstName:"Tanu",age : 22},
    {firstName:"",age : 20},
    {firstName:"Sanu",age : 21},
    {firstName:"Priya",age : 17},
    {firstName:"Sneha",age : 16},
]

const user_names = users.map((user)=>{
    return user.firstName;
})
console.log(user_names);