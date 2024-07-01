function submitForm() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const city = document.getElementById("city").value;
  
    const person = {
      name: name,
      age: age,
      city: city
    };
  
const { name: userName, age: userAge, city: userCity } = person;
  
document.getElementById("output").innerHTML = `
      <p>Name: ${userName}</p>
      <p>Age: ${userAge}</p>
      <p>City: ${userCity}</p>
    `;
  }