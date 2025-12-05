const getSumbtn = document.createElement('button');
getSumbtn.append("get total price");
document.body.appendchild(getSumbtn);

const getsum = () =>{
	let prices= document.query('.price')
	let total = 0
prices.foreach((p)=>{
	total+=parseInt(p.innerText)
})
	const totalrow = document.createElement('tr');
	const totalname = document.createElement("td");
	const totalprice = document.createElement('td');
totalname.textContent="total price"
totalprice.textContent=`${total}`
totalrow.append(totalname,totalprice)
totalrow.id="ans"
document.querySelector("table").appendchild(totalrow);
	
}

getSumbtn.addEventListener("click",getsum);