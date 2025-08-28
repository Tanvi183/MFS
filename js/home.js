const validPin = 1234;

const transactionData = [];

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

    // Alert For less than 0 amount
    if(amountAdd <= 0){
      alert("Invalid Amount")
      return;
    }

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

    // History Store
    const history = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(history);
  });



// Money withdraw Feature
document
  .getElementById("btn-withdraw-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amountWithdraw = getInputValueNumber("amount-withdraw");

    const availableBalance = getInnerText("available-balance");

    // withdraw amount not be heiger than available amount
    if(amountWithdraw <= 0 || availableBalance <= amountWithdraw){
      alert ("Invalid Amount");
      return;
    }

    const totalNewAvailableBalance = availableBalance - amountWithdraw;

    setInnerText(totalNewAvailableBalance);

    cleanInputField("amount-withdraw");

    // History Store
    const history = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(history);
    console.log(transactionData);
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
    for (const btn of formBtns) {
      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
      btn.classList.add("border-gray-300");
    }
    // Set the clicked button to active style
    const activeBtn = document.getElementById(id1);
    activeBtn.classList.remove("border-gray-300");
    activeBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]");

    // only for transaction history show
    if (id1 === "transactions-section") {
      const transactionContainer = document.getElementById(
        "transaction-container"
      );
      // Clear previous data
      transactionContainer.innerHTML = ""; 
      for (const data of transactionData) {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="bg-white rounded-xl p-3 mb-3 flex justify-between items-center">
            <div class="flex items-center">
                <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" class="mx-auto" alt="wallet">
                </div>
                <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      `;
      transactionContainer.appendChild(div);
      }
    }
  });
}

handleToggle("add-money-section", "add-money-parent");
handleToggle("cash-out-section", "cash-out-parent");
handleToggle("transfer-money-section", "transfer-money-parent");
handleToggle("get-bonus-section", "get-bonus-parent");
handleToggle("pay-bill-section", "pay-bill-parent");
handleToggle("transactions-section", "transaction-history-parent");
