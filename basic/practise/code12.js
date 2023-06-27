function outer(){
     function inner(){
       console.log("inner called...")
     }
}
inner();


2) code

function outer(){
     function inner(){
       console.log("inner called...")
     }
     inner();
}
outer();

3) code
function outer(){
     function inner(){
       console.log("inner called...")
     }
      return inner();
}
const cl= outer();
cl();


 4) code

const outer=()=>{
    return ()=>{
       console.log("inner called...");
     }
   
}
const cl= outer();
cl();

5) code


const addcounter=()=>{
 let counter=0;
 counter++;
 return counter;
}
console.log(addcounter());
console.log(addcounter());
console.log(addcounter());

6) code

onst addcounter=()=>{
  let counter=0;
  return ()=>{
     counter++;
     return counter;
  }
}
const cl = addcounter();
console.log(cl());
console.log(cl());

