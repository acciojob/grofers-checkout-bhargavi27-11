const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Get all cells that contain prices
    const priceCells = document.querySelectorAll(".price");
    let sum = 0;

    // Add all the values
    for (let i = 0; i < priceCells.length; i++) {
        const value = Number(priceCells[i].innerText);
        if (!isNaN(value)) {
            sum += value;
        }
    }

    // Check if a total row already exists
    let ansCell = document.getElementById("ans");
    const table = document.getElementById("groceryTable");

    if (!ansCell) {
        const row = document.createElement("tr");
        ansCell = document.createElement("td");
        ansCell.id = "ans";
        ansCell.colSpan = 2;           // single cell spanning both columns
        row.appendChild(ansCell);
        table.appendChild(row);
    }

    // Set / update the total value
    ansCell.innerText = sum;
};

getSumBtn.addEventListener("click", getSum);