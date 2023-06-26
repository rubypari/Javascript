let a=2;
let b="value";
if(isNaN(a*b)===false){
console.log("Is valid");
}else{
 console.log("Not Valid");
}
2) code
 let a=2;
let b="value"
console.log(isFinite(a*b));
console.log(isFinite(2*4));
console.log(isFinite(Number.MAX_VALUE*4));
console.log(isFinite(Infinity));
