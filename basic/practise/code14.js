let arr=[2,6,7,9];
for( let i of arr){
     console.log(i);
}

2) code

let arr=[2,6,7,9];
let itr=arr[Symbol.iterator]();
console.log(itr);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());


3) code


let object={
 a:10,
 b:20,
 [Symbol.iterator](){
   return this;
 },
  next(){
   if(object.a<object.b){
     return{value:object.a++,done:false}
   }else{
     return{done:true}
   }
  }
}
for(let i of object){
   console.log(i);
  }
