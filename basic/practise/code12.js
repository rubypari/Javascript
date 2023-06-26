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
