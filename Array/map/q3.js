let products=[
    	{pCode:1,pName:"Apple"},
    	{pCode:2,pName:"Banana"},
    	{pCode:3,pName:"Grapes"},
    	{pCode:4,pName:"Oranges"}]
      
let product_name = products.map((ele,index)=>{
	   return ele.pName;
});

console.log(product_name);
