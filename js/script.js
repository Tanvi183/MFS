// Login button Functionality
document.getElementById("btn-login").
addEventListener("click", function (event) {
    event.preventDefault();

    // Keep phone number as string
    const mobileNumber = "8801837889646"; 
    const pinNumber = "1234"; 


    const mobileNumberValue = document.getElementById('mobile-number').value.trim();
    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-number').value.trim();
    const pinNumberValueConverted = parseInt(pinNumberValue);

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href = "../home.html";
    }else {
        alert("Invalid Credentials");
    }
    
});
