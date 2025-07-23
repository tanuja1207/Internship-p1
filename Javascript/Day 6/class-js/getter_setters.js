class Student {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();  // read-only logic
  }

  set name(newName) {
    this._name = newName.trim();      // write logic
  }
}

const s1 = new Student("tanuja");
console.log(s1.name);     // TANUJA

s1.name = "   sneha   ";
console.log(s1.name);     // SNEHA
