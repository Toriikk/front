// 자료형변환
console.log("5" + 1); // 더하기 연산이 안 됨 
console.log("5" - 1); // 빼기 연산 가능
console.log("5" * 2); // 곱하기 연산 가능
console.log("There is " + 5);
console.log("five" * 2);

console.log('- 연산자를 활용한 자료형 변환');
let str = 5 + "1";
console.log(str);
console.log(typeof str); // 타입 : 문자

var num = str++;  // 증가연산자 쓰고 나니 숫자 타입으로 바뀜 
console.log(num);
console.log(typeof num);

console.log('- 함수를 활용한 자료형 변환');
str = String(num);
console.log(str);
console.log(typeof str);

num = Number(str);
console.log(num);
console.log(typeof num);