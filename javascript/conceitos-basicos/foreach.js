var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.shift());

console.log(arr.pop());

//forEach inline
arr.forEach((item) => console.log(item));

//forEach function
var somatorio = 0;
arr.forEach(function (item) {
  somatorio += item;
});

console.log(somatorio);

//forEach function per index
arr.forEach(function (item, index, array) {
  console.log(array[index]);
});
