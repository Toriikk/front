let x = 5;   //숫자형
let y = 'five'; // 문자형
var isTrue = true; // 불린형(boolean)
var empty = null; // null
var nothing;  // underfined
var sym = Symbol('me') // symbol

let item = {
    price : 5000,
    count : 10
} // 객체(object)
/// ----------------------------------------------- 상위 내용은 데이터의 종류 

let fruits = ['apple', 'orange', 'kiwi'] // 배열 선언

let addFruit = function(fruit) {
    fruits.push(fruit);
} // 함수

addFruit('wateremelon'); // 함수 실행
console.log(fruits);  // 콘솔 출력