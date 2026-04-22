
// Inputs
const descInput = document.querySelector("#desc");
const amountInput = document.querySelector("#amount");

// Lists
const incomeList = document.querySelector("#incomeList");
const expenseList = document.querySelector("#expenseList");

// Balance
const balanceEl = document.querySelector("#balance");
let balance = 0;

// Buttons (you must verify these IDs in your HTML)
const incomeBtn = document.querySelector("#incomeBtn");
const expenseBtn = document.querySelector("#expenseBtn");

// Update balance display
function updateBalance() {
  balanceEl.textContent = balance;
}

// Clear inputs
function clearInputs() {
  descInput.value = "";
  amountInput.value = "";
}

// Validation function
function isValid(desc, amount) {
  if (!desc || !amount) return false;
  if (isNaN(amount)) return false;
  return true;
}

// INCOME
incomeBtn.addEventListener("click", () => {
  const desc = descInput.value.trim();
  const amount = Number(amountInput.value);

  if (!isValid(desc, amount)) return;

  // Add to list
  const li = document.createElement("li");
  li.textContent = `${desc} - ${amount} kr (Inkomst)`;
  incomeList.appendChild(li);

  // Update balance (+1000 style example)
  balance += amount;

  updateBalance();
  clearInputs();
});

// EXPENSE
expenseBtn.addEventListener("click", () => {
  const desc = descInput.value.trim();
  const amount = Number(amountInput.value);

  if (!isValid(desc, amount)) return;

  // Add to list
  const li = document.createElement("li");
  li.textContent = `${desc} - ${amount} kr (Utgift)`;
  expenseList.appendChild(li);

  // Update balance (-500 style example)
  balance -= amount;

  updateBalance();
  clearInputs();
});

// initial render
updateBalance();
