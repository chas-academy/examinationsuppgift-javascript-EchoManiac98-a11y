// Inputs
const descInput = document.querySelector("#desc");
const amountInput = document.querySelector("#amount");

// Lists
const incomeList = document.querySelector("#incomeList");
const expenseList = document.querySelector("#expenseList");

// Balance
const balanceEl = document.querySelector("#balance");
let balance = 0;

// Buttons
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

// Validation
function isValid(desc, amountValue) {
  if (desc.trim() === "") return false;
  if (amountValue.trim() === "") return false;
  if (isNaN(amountValue)) return false;
  return true;
}

// INCOME
incomeBtn.addEventListener("click", () => {
  const desc = descInput.value.trim();
  const amountValue = amountInput.value.trim();

  if (!isValid(desc, amountValue)) return;

  const amount = Number(amountValue);

  const li = document.createElement("li");
  li.textContent = `${desc} - ${amount} kr (Inkomst)`;
  incomeList.appendChild(li);

  balance += amount;

  updateBalance();
  clearInputs();
});

// EXPENSE
expenseBtn.addEventListener("click", () => {
  const desc = descInput.value.trim();
  const amountValue = amountInput.value.trim();

  if (!isValid(desc, amountValue)) return;

  const amount = Number(amountValue);

  const li = document.createElement("li");
  li.textContent = `${desc} - ${amount} kr (Utgift)`;
  expenseList.appendChild(li);

  balance -= amount;

  updateBalance();
  clearInputs();
});

// initial render
updateBalance();
