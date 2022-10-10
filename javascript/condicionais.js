//if e else
var condicao = true;

if (condicao) {
  //codigo
  console.log("Se a condição for verdadeira, executa esse código");
} else {
  //codigo
  console.log("Se a condição for falsa, executa esse código");
}

var pais = "EUA";

console.log(!(pais != "Brasil"));

//switch

switch (pais) {
  case "Brasil":
    console.log("Brasileiro");
    break;
  case "EUA":
    console.log("Americano");
    break;
  default:
    console.log("Não sei");
}

//for
for (var i = 0; i < 10; i++) {
  console.log(i);
}

//for in
var numeros = [1, 2, 3, 4, 5];
for (const key in numeros) {
  console.log(key);
}

//forEach
numeros.forEach((element) => {
  console.log(element);
});

//while
var i = 0;
// Verifica pra depois executar
while (i < 10) {
  console.log(i);
  i++;
}

//do while
var i = 0;
do {
  //sempre executa, independente da condição
  console.log(i);
  i++;
} while (i < 1);

//for of
// //itera sobre os valores, ideal para pegar propriedades de objetos
// for (const iterator of numeros) {
//   console.log(iterator);
// }
