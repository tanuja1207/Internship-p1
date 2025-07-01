
// #################### Object Destructuring ###################

/*
const band = {
    bandName : "Beatles",
    famousSong : "Hey Jude",
};

const bandName = band.bandName;
const famousSong = band.famousSong;

console.log(bandName,famousSong);

*/


// Other way to Destructure

/*
const band = {
    bandName : "Beatles",
    famousSong : "Hey Jude",
};


// First we need to decide we want const let or var
// we want two variables
const{bandName,famousSong}= band;

console.log(bandName,famousSong);

*/

//  ############ ###########  ############# #############
/*

const band = {
    bandName : "Beatles",
    famousSong : "Hey Jude",
};


// First we need to decide we want const let or var
// we want two variables
// const{bandName,famousSong}= band;
// bandName = "queen"; //  error --> (we cannot change const)

 let{bandName,famousSong}= band;
bandName = "queen";
// here it is changed

console.log(bandName,famousSong);

*/
//  ############ ###########  ############# #############

/*

const band = {
    bandName : "Beatles",
    famousSong : "Hey Jude",
    year : 1983,
    othersong: "Stairway to heaven",
};

// First we need to decide we want const let or var
// we want two variables
// const{bandName,famousSong}= band;

 let{bandName,famousSong}= band;

console.log(bandName,famousSong);
// Here
// Year key and othersong and its value is in object
// it is not destructured.
*/


//  ############ ###########  ############# #############
/*
const band = {
    bandName : "Beatles",
    famousSong : "Hey Jude",
    year : 1993,
    othersong: "Stairway to heaven",
};

// First we need to decide we want const let or var
// we want two variables
// const{bandName,famousSong}= band;

 let{bandName : var1,famousSong :var2}= band;

console.log(var1,var2);

*/


//  ############ ###########  ############# #############

const band = {
    bandName : "Beatles",
    famousSong : "Hey Jude",
    year : 1993,
    othersong: "Stairway to Heaven",
};

// First we need to decide we want const let or var
// we want two variables
// const{bandName,famousSong}= band;

 let{bandName ,famousSong ,...restprops}= band;

 console.log(bandName,famousSong,restprops);



