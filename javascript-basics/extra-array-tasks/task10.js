// Сортировать в порядке по убыванию
// let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

// alert( arr ); // 8, 5, 2, 1, -10

let arr = [5, 2, 1, -10, 8];
let a = 0;
let b = 0;
arr.sort(function(a, b) {
return a - b
})

console.log(arr)