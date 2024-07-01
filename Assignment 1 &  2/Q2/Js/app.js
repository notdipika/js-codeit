function delayCallback(callback) {
    setTimeout(callback, 2000);
  }
  
  function myCallback() {
    console.log("Callback invoked!");
    var alertMessage = document.getElementById("alert-message");
    alertMessage.innerHTML = "CALLBACK INVOKED";
    alertMessage.style.display = "block";
    setTimeout(function() {
      alertMessage.style.display = "none";
    }, 2000);
  }