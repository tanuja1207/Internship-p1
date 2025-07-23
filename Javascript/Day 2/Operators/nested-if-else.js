// ################### Temperature Check ###################

let tempInDegree = 50;

// Check ranges from lowest to highest
if (tempInDegree < 0) {
  console.log(" Extremely cold outside");
} 
else if (tempInDegree < 16) {
  console.log(" It is cold outside");
} 
else if (tempInDegree < 25) {
  console.log(" Weather is okay");
} 
else if (tempInDegree < 35) {
  console.log(" Let's go for a swim!");
} 
else if (tempInDegree < 45) {
  console.log(" Turn on the AC");
} 
else {
  console.log(" Too hot!! Stay hydrated");
}
