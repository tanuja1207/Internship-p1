// function returning function

function myfunc(){
    function hello(){
        return "hello world";
    }


    // function returning function
    return hello;
}

const ans = myfunc();
// console.log(ans);

// calling the function returned function
// ans();
console.log(ans());


