 
 /*
 JavaScript Code Execution

1️ Compilation Phase
   ├──  Syntax Error Checking (Tokenizing / Parsing)
   ├──  Scope Setup (Lexical Scoping)
   └──  Global Memory Allocation
       ├── window: Global Object
       ├── this: window
       ├── foo: undefined
       ├── getFullName: function reference
       └── personName: undefined

 Global Execution Context (GEC) Created
   ├── Pushed to Call Stack
   ├── Memory Setup as above

 Code Execution Phase
   ├── let foo = "foo";
   │   └── Memory Update: foo = "foo"
   ├── console.log(foo);
   │   └── Output: "foo"
   ├── Function Declaration: getFullName()
   │   └── Already stored during compilation
   ├── Function Call: getFullName("harshit", "sharma")
   │   └── Creates New Function Execution Context (FEC)
   │       ├── Arguments Object: {0: "harshit", 1: "sharma"}
   │       ├── myVar: "var inside func"
   │       ├── fullName: "harshit sharma"
   │       └── Returns: "harshit sharma"
   └── const personName = "harshit sharma";
       └── Stored in Global Memory

 GEC Popped from Stack After Execution
*/