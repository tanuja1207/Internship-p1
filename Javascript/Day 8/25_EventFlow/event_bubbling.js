// Event Bubbling, Capturing, and Delegation

const grandparent = document.querySelector(".grandparent");

// --- Event Delegation (active code) ---
grandparent.addEventListener("click", (e) => {
  console.log(e.target); // Logs the clicked element inside grandparent
});

/* 
//  Event Capturing (capture = true)
child.addEventListener("click", () => {
  console.log("Capturing: Child");
}, true);

parent.addEventListener("click", () => {
  console.log("Capturing: Parent");
}, true);

grandparent.addEventListener("click", () => {
  console.log("Capturing: Grandparent");
}, true);

document.body.addEventListener("click", () => {
  console.log("Capturing: Body");
}, true);
*/

/*
//  Event Bubbling (capture = false, default)
child.addEventListener("click", () => {
  console.log("Bubbling: Child");
});

parent.addEventListener("click", () => {
  console.log("Bubbling: Parent");
});

grandparent.addEventListener("click", () => {
  console.log("Bubbling: Grandparent");
});

document.body.addEventListener("click", () => {
  console.log("Bubbling: Body");
});
*/
