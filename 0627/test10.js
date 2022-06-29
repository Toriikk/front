//ES6에 추가된 화살표 함수 
const double = x => x + x;
console.log(double(2));

//원래는 이렇게 하지만 위를 사용하면 더 간단하게 가능
// const double = x => x + x;
/* function double(x) {
x + x;
}
 console.log(double(2)); */

const add = (a, b) => a+b;
/*
function add(a, b) {
    return a+b;
}
*/
console.log(add(1,2));

// const sum = (...args) => {
function sum(...args){    
    let total = 0;
        for(let i=0; i < args.length; i++) {
        total += args[i];
    }
    return total;
    }
// }
console.log(sum(1, 2, 3));

setTimeout(()=>{
    console.log('화살표 함수')
}, 10);