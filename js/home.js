const validPin = 12345;

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
    if(accountNumber.length < 11){
      alert("Please Provide Valid Account Number")
      return;
    }

    // Pin number is valid or not
    if(bankPinNumber != validPin){
      alert("Please Provide Valid Pin Number");
      return;
    }

    // Total Available Balance
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    const totalavailableBalance = amountAddNew + availableBalance;
    document.getElementById("available-balance").innerText = totalavailableBalance;
    amountAdd.value = '';



  });
