const validPin = 1234;

// function to get input value with converted
function getInputValueNumber(id) {
  const inputField = parseInt(document.getElementById(id).value);
  return inputField;
}

// function to get input value
function getInputValue(id) {
  const inputField = document.getElementById(id).value;
  return inputField;
}

// function to get innertext
function getInnerText(id) {
  const element = parseInt(document.getElementById(id).innerText);
  return element;
}

// function to set innertext
function setInnerText(value) {
  const availableBalance = document.getElementById("available-balance");
  availableBalance.innerText = value;
}

// function to clean the input field
function cleanInputField(id) {
  const inputField = document.getElementById(id);
  inputField.value = "";
}



// Add money feature
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const bank = getInputValue("bank");
    const accountNumber = getInputValue("account-number");
    const amountAdd = getInputValueNumber("amount-add");
    const bankPinNumber = getInputValueNumber("bank-pin-number");

    // Is bank account numbers are 11 digit or not
    if (accountNumber.length < 11) {
      alert("Please Provide Valid Account Number");
      return;
    }

    // // Pin number is valid or not
    if (bankPinNumber != validPin) {
      alert("Please Provide Valid Pin Number");
      return;
    }

    // Total Available Balance
    const availableBalance = getInnerText("available-balance");

    const totalavailableBalance = amountAdd + availableBalance;

    setInnerText(totalavailableBalance);

    // Clear the input field
    cleanInputField("amount-add");
  });


// Money withdraw Feature
document
  .getElementById("btn-withdraw-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amountWithdraw = getInputValueNumber("amount-withdraw");

    const availableBalance = getInnerText("available-balance");

    const totalNewAvailableBalance = availableBalance - amountWithdraw;

    setInnerText(totalNewAvailableBalance);

    cleanInputField("amount-withdraw");
  });




// Toggling Feature
function handleToggle(id1, id2) {
  document.getElementById(id1).addEventListener("click", function () {
    // Hide all transaction forms
    const forms = document.getElementsByClassName("transaction-form");
    for (const form of forms) {
      form.style.display = "none";
    }
    // Show the selected form
    document.getElementById(id2).style.display = "block";

    // Reset all buttons to inactive style
    const formBtns = document.getElementsByClassName("form-btn");
    for(const btn of formBtns){
      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
      btn.classList.add("border-gray-300");      
    }
    // Set the clicked button to active style
    const activeBtn = document.getElementById(id1);
    activeBtn.classList.remove("border-gray-300");
    activeBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  });
}

handleToggle("add-money-section", "add-money-parent");
handleToggle("cash-out-section", "cash-out-parent");
handleToggle("transfer-money-section", "transfer-money-parent");
handleToggle("get-bonus-section", "get-bonus-parent");
handleToggle("pay-bill-section", "pay-bill-parent");
handleToggle("transactions-section", "transaction-history-parent");





