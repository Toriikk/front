// const 에러 유형 - 모두 실행 안 됨 
const URL = 'http://js.com'; // 대문자로 쓰는 건 기호상수
URL = 'http://naver.com';

if(true) {
    var URL2 = 'http://js.com';
    // let URL2 = 'http://js.com';
    // const URL2 = 'http://js.com';
    // 인식 못 함 
}
console.log(URL2);


//var은 선언 중복 가능 에러 x
// var URL = 'http://js.com'; // 대문자로 쓰는 건 기호상수
// var URL = 'http://naver.com';

// if(true) {
//     var URL2 = 'http://js.com';
// }
// console.log(URL2);

