//uso do splice

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//removendo o elemento 3 do array na segunda posição, podemos adicionar valores no lugar do que foi removido
arr.splice(2, 1, "tres");
console.log(arr);
