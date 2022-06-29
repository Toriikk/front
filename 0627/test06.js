// var과 ES6에서 추가된 let과의 차이 
// let는 범위와 (선언)중복 불허 

if(true) {
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
}

console.log(functionScopeValue);
console.log(blockScopeValue);