//HCF function
function HCF(x,y)
{
  if(y==0)
  {
  	return x;
  }
  else
  {
  	return HCF(y,x%y);
  }
}


function LCM(x,y)
{
	let lcm=(x*y)/HCF(x,y);
	return lcm;
}

function factors(x)
{
	for(let i=1;i<=x;i++)
	{
		if(x%i===0)
		{
			console.log(i);
		}
	}
}
let num1=parseInt(prompt("number 1"))
let num2=parseInt(prompt("number 2"))
console.log(LCM(num1,num2))
//console.log(HCF(num1,num2))
//factors(num1)