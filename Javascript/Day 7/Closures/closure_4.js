

function func(){
    let counter=0;
    return function(){
        if(counter<1){
            counter++;
            console.log("Hi function is Been Called!!!");
        }else{

            console.log("Hi You have exceeded Call limit ");

        }
    }
}

const myFunc = func();
myFunc();
myFunc();
myFunc();

const myFunc2 = func();
myFunc2();
myFunc2();
myFunc2();