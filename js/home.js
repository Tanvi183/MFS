const validPin = 1234;

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amountAdd = document.getElementById("amount-add");
    const amountAddNew = parseInt(amountAdd.value);
    const bankPinNumber = document.getElementById("bank-pin-number").value;

    // Is bank account numbers are 11 digit or not
    if (accountNumber.length < 11) {
      alert("Please Provide Valid Account Number");
      return;
    }

    // Pin number is valid or not
    if (bankPinNumber != validPin) {
      alert("Please Provide Valid Pin Number");
      return;
    }

    // Total Available Balance
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    const totalavailableBalance = amountAddNew + availableBalance;
    document.getElementById("available-balance").innerText =
      totalavailableBalance;
    amountAdd.value = "";
  });


// Toggling Features
document
  .getElementById("add-money-section")
  .addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block";
  });

document
  .getElementById("cash-out-section")
  .addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "block";
    document.getElementById("add-money-parent").style.display = "none";
  });


// Money withdraw
document
  .getElementById("btn-withdraw-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amountWithdraw = document.getElementById('amount-withdraw');
    const amountWithdrawNew = parseInt(amountWithdraw.value);

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    const totalNewAvailableBalance = (availableBalance - amountWithdrawNew);

    document.getElementById('available-balance').innerText = totalNewAvailableBalance;

    amountWithdraw.value = '';
    
  });
