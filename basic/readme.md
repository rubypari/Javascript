Section1 : Difference between null and undefined

Q.1) What is "undefined" in JavaScript ?

Q.2) What will be the output of undefined==null & undefined===null ? Why ?

Q.3) Can you explicitly assign "undefined" to a variable ? (let i = undefined)


section3: ASI

Q.1) Should you terminate all lines by a �;� ?

Q.2) Why this code is returning undefined in spite of function returning a valid object literal ?
         function test(){
   	 return 
   	{
      	         a:5
    	}
         }
        const obj=test();
        console.log(obj);
        
Q.3) Can �use strict� statement or the strict mode change the behavior of ASI ?


section4: Difference Between the Rest operator and Spread operator


Q.1) Can we use arguments object in arrow function?

Q.2) Which is the best way to create new arrays with assignment?

Q.3) How can you handle the �n� number of parameters passed to a function ? or create a function which can take any number of parameters and returns sum or max or any other such calculative values.

Q.4) Can the rest operator be placed anywhere in the function parameter list? Or
      function test(...a,b){
         //statements
      }
Is this piece of code valid? Give the reason.
