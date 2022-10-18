var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrNomes = [
  { nome: "João", idade: 24 },
  { nome: "Maria", idade: 25 },
  { nome: "José", idade: 26 },
  { nome: "Ana", idade: 27 },
  { nome: "Pedro", idade: 28 },
  { nome: "Paulo", idade: 29 },
  { nome: "Joaquim", idade: 30 },
  { nome: "Joaquina", idade: 31 },
  { nome: "Joana", idade: 32 },
  { nome: "José", idade: 33 },
];

var nums = arr.map(function (item) {
  return item * 2;
});
console.log(nums);

var name = arrNomes.map((arrNomes) => arrNomes.nome);
console.log(name);
