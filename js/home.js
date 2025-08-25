document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amountAdd = document.getElementById("amount-add");
    const amountAddNew = parseInt(amountAdd.value);
    const bankPinNumber = document.getElementById("bank-pin-number").value;

    // console.log(bank, accountNumber, amountAdd, bankPinNumber);

    //Total Available Balance
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    const totalavailableBalance = amountAddNew + availableBalance;
    document.getElementById("available-balance").innerText = totalavailableBalance;
    amountAdd.value = '';


    
  });
