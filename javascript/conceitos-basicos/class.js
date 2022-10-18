class People {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  say() {
    console.log(`Hello, ${this.firstName} ${this.lastName}`);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

p1 = new People("John", "Doe");
p2 = new People("Max", "Doe");
p3 = new People("John", "Max");

// p3.say();
console.log(p3.fullName);
