//filter

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//inLine
var arrFiltradoPar = arr.filter((item) => item % 2 == 0);
console.log(arrFiltradoPar);

//function
var arrFiltradoImpar = arr.filter(function (item) {
  return !(item % 2 == 0);
});
console.log(arrFiltradoImpar);

//function externa
function maiorQue5(item) {
  return item > 5;
}
var arrFiltradoMaiorQue5 = arr.filter(maiorQue5);
console.log(arrFiltradoMaiorQue5);

//function anonima
var filterComfunctionAnonima = arr.filter((item) => {
  return item > 5;
});

console.log(filterComfunctionAnonima);

//function anonima inline
var filterComfunctionAnonimaInline = arr.filter((item) => item > 5);

console.log(filterComfunctionAnonimaInline);
