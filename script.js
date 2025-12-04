// Create the button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to calculate and show the total price
const getSum = () => {
    // Get all price cells
    const priceCells = document.querySelectorAll(".prices");
    let total = 0;

    // Sum all prices
    priceCells.forEach((cell) => {
        const value = Number(cell.textContent);
        if (!isNaN(value)) {
            total += value;
        }
    });

    // Get the table
    const table = document.querySelector("#groceryTable");

    // If a total row already exists, remove it so we don't create duplicates
    const existingTotalRow = document.querySelector(".total-row");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for the total
    const totalRow = document.createElement("tr");
    totalRow.classList.add("total-row");

    // Create a single cell spanning both columns
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.textContent = Total Price: Rs ${total};

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
};

// Attach click event to the button
getSumBtn.addEventListener("click", getSum);