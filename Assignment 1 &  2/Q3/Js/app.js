function checkInteger() {
    const numInput = document.getElementById("num");
    const numValue = parseFloat(numInput.value);
    const resultDiv = document.getElementById("result");
  
    try {
      checkIntegerValue(numValue);
      resultDiv.textContent = `The number ${numValue} is an integer.`;
      resultDiv.className = "";
    } catch (e) {
      resultDiv.textContent = e.message;
      resultDiv.className = "error";
    }
  }
  
  function checkIntegerValue(n) {
    if (!Number.isInteger(n)) {
      throw new Error(`"${n}" is not an integer.`);
    }
    return n;
  }