function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
  }

  function greetUser() {
    const nameInput = document.getElementById("name");
    const greetingInput = document.getElementById("greeting");
    const outputDiv = document.getElementById("output");
  
    const name = nameInput.value;
    const greeting = greetingInput.value || undefined;
  
    const message = greet(name, greeting);
    outputDiv.innerText = message;
  }