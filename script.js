//your JS code here. If required.
const p1=document.getElementById("p1")
const p2=document.getElementById("p2")
const p3=document.getElementById("p3")
const p4=document.getElementById("p4")
const p01=document.getElementById("p01")
const p02=document.getElementById("p02")
const p03=document.getElementById("p03")
const p04=document.getElementById("p04")

constt Promise1 = () => {
	return new Promise((resolve,reject)=>
		{
			let a=Math.floor(Math.random()*3)+1;
			setTimeout(()=>
			{
				
				p1.innerHTML=`${a}`
				p01.innerHTML=`Promise 1`
				resolve(a);
			},a*1000)
		})
}
cont Promise2 = () => {
	return new Promise((resolve,reject)=>
		{
			let b=Math.floor(Math.random()*3)+1;
			setTimeout(()=>
			{
				
				p2.innerHTML=`${b}`
				p02.innerHTML=`Promise 2`
				resolve(a);
			},b*1000)
		})
}
cont Promise3 = () => {
	return new Promise((resolve,reject)=>
		{
			let c=Math.floor(Math.random()*3)+1;
			setTimeout(()=>
			{
				
				p3.innerHTML=`${c}`
				p03.innerHTML=`Promise 3`
				resolve(c);
			},c*1000)
		})
}
let startTime=Date.now();
Promise.all([Promise1(),Promise2(),Promise3()]).then((data)=>
	{
		let endTime=Date.now()
		let totalTime= (endTime-startTime)/1000;
			p4.innerHTML=`${totalTime.toFixed(3)}`;
		p04.innerHTML=`Total`
	})