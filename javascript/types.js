//laguage: javascript
var varBoolean = true;
var varNumber = 1;
var varString = "string";
var varObject = { a: 1, b: 2 };
var varArray = [1, 2, 3];
var varFunction = function () {
  return 1;
};
var varNull = null;
var varUndefined = undefined;

// var, let, const

let listVar = [
  varBoolean,
  varNumber,
  varString,
  varObject,
  varArray,
  varFunction,
  varNull,
  varUndefined,
];

for (let i = 0; i < listVar.length; i++) {
  console.log("Tipo: ", typeof listVar[i], " Valor: ", listVar[i]);
}
