Section1 : Difference between null and undefined

Q.1) What is "undefined" in JavaScript ?

Q.2) What will be the output of undefined==null & undefined===null ? Why ?

Q.3) Can you explicitly assign "undefined" to a variable ? (let i = undefined)


// Section2: Function and Block Scope

Q.1) What is hoisting in javascript ?

Q.2) How does block scope work ?

Q.3) What is the scope of a variable ?


// section3: ASI

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


// section4: Difference Between the Rest operator and Spread operator


Q.1) Can we use arguments object in arrow function?

Q.2) Which is the best way to create new arrays with assignment?

Q.3) How can you handle the �n� number of parameters passed to a function ? or create a function which can take any number of parameters and returns sum or max or any other such calculative values.

Q.4) Can the rest operator be placed anywhere in the function parameter list? Or
      function test(...a,b){
         //statements
      }
Is this piece of code valid? Give the reason.

// Section5: Finity and Infinity

Q.1) How will you put a validation for positive or negative Infinity?

Q.2) What will be the output of this code?
Code:
console.log(1/0);

// Section6: NAN(Not a Number)
Q.1) What will be the output of the below statement?
console.log(NaN==NaN);

Q.2) What is the difference between isNaN() and isFinite() method?

// Section7: Arrow Function

Q.1) Explain the syntactical features of arrow function.

Q.2) Why �this� does not work in arrow function?

Q.3) Explain output of following code with reason.
const obj={
     method:()=>{
                      console.log(this);
      }
}

Q.4) How can you handle arguments object like functionality in arrow function?

Q.5) Can you write IIFE with arrow function syntax?


// section8:Closure

Q.1) How can you access private variable or function outside the scope ?

Q.2) Explain the advantage of closure ?


// section9: Currying

Q.1) What is function currying?

Q.2)const multiplication=a=>b=>c=>return a*b*c
What will this statement do? Explain in detail.

Q.3) Explain practical usage of function currying.


