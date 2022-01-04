let hcf=(num1,num2)=>{
	if(num2==0)
	{
		return num1;
	}
	else
	{
		return hcf(num2,num1%num2);
	}
};

let lcm=(num1,num2)=>{
		return (num1*num2)/hcf(num1,num2);
	
};

let fac=(num1)=>{
  for(let i=1;i<=num1;i++)
  {
  	if(num1%i==0)
     {
     	console.log(i);
     }
  }
};

let sum =(num1,num2)=>
{
	console.log(num1+num2);
}

let num1=parseInt(prompt("number 1"));
let num2=parseInt(prompt("number 2"))
sum(num1,num2);
//fac(num1);
//console.log(lcm(num1,num2))