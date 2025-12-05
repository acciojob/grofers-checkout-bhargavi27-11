const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let prices= document.querySelectorAll('.price')
	let total = 0
prices.forEach((p)=>{
	total+=parseInt(p.innerText)
})
	const totalrow = document.createElement('tr');
	const totalname = document.createElement("td");
	const totalprice = document.createElement('td');
totalname.textContent="Total Price"
totalprice.textContent=`${total}`
totalrow.append(totalname,totalprice)
totalrow.id="ans"
document.querySelector("table").appendChild(totalrow);
	
}

getSumBtn.addEventListener("click", getSum);