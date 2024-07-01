const colors = ["red", "green", "blue"];

// Use array destructuring to assign the first two elements to variables firstColor and secondColor
const [firstColor, secondColor] = colors;

// Print these variables
document.getElementById("output").innerHTML = `
  <p>First Color: ${firstColor}</p>
  <p>Second Color: ${secondColor}</p>
`;
