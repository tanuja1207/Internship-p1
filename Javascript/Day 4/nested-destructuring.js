// Nested Destructuring

const users = [
    {
        userid: 1,
        user_name: "Tanuja",
        gender: "female"
    },
    {
        userid: 2,
        user_name: "Sushant",
        gender: "male"
    },
    {
        userid: 3,
        user_name: "Sanu",
        gender: "female"
    }
];

// Step 1: Destructure array elements
const [user1, user2, user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);

// Step 2: Destructure specific values from objects inside array
const [{ user_name }, , { gender }] = users;
console.log(user_name); // from first user
console.log(gender);    // from third user

// Step 3: Destructure and assign new variable names
const [{ user_name: user1_username, userid }, , { gender: user3_gender }] = users;
console.log(user1_username); // "Tanuja"
console.log(user3_gender);   // "female"
console.log(userid);         // 1
