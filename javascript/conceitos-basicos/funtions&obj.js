// Modos de criar objetos
var people = {
  lastName: "John",
  firstName: "Doe",
};

var people02 = new Object();
people02.lastName = "John";
people02.firstName = "Max";

//Criando função para pessoa
people02.sayHello = function () {
  console.log("Hello");
  console.log("My name is", this.firstName);
};

// people02.sayHello();

function createPeople(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}
