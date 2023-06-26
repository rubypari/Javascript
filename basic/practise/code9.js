function sum(...nums){
console.log(nums);

}
sum(4,5);
sum(6,7,8,9);

2) code

function sum(){
console.log(arguments);

}
sum(4,5);
sum(6,7,8,9);

3) code
let arr1=[1,2,3];
let arr2=[...arr1,6,7,8,9];
console.log(arr1);
console.log(arr2);

4) code

let arr=[1,2,5,7,876,5435,98];
console.log(Math.max(...arr));
