const sum=function(a){
   return function(b){
    return a+b;
   }
  
}
const cl=sum(5);
const ans=cl(6);
console.log(ans);

2) code


const sum=function(a){
   return function(b){
    return a+b;
   }
  
}
const cl=sum(5)(6);
console.log(cl);

3) code

const priceCalc=(price)=>{
   return(dper)=>{
     return price*dper;
   }
}
const DiscountPrice=priceCalc(300);
 console.log(DiscountPrice(0.5));
  console.log(DiscountPrice(0.3));
   console.log(DiscountPrice(0.2));
