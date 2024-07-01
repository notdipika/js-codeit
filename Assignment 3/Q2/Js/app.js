document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generate-button");
    generateButton.addEventListener("click", generateGreeting);
  
    function generateGreeting() {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const greeting = `Hello, ${firstName} ${lastName}!`;
      document.getElementById("greeting").innerHTML = greeting;
    }
  });