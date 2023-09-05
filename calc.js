let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

let currentInput = ""; 
function convertToArabicNumerals(nepaliNumber) {
  const nepaliNumerals = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
  let arabicNumber = "";
  for (let char of nepaliNumber) {
    if (nepaliNumerals.includes(char)) {
      arabicNumber += nepaliNumerals.indexOf(char);
    } else {
      arabicNumber += char;
    }
  }
  return arabicNumber;
}


function convertToNepaliNumerals(arabicNumber) {
  const nepaliNumerals = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
  let nepaliNumber = "";
  for (let char of arabicNumber) {
    if (/[0-9]/.test(char)) {
      nepaliNumber += nepaliNumerals[char];
    } else {
      nepaliNumber += char;
    }
  }
  return nepaliNumber;
}

// Function to perform arithmetic operations
function performOperation(inputValue) {
  let arabicInput = convertToArabicNumerals(inputValue);

  try {
    let result = eval(arabicInput);
    return result;
  } catch (err) {
    return "Error";
  }
}

document.querySelectorAll(".input-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += button.value;
    input.value = convertToNepaliNumerals(currentInput);
  });
});

button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    // Remove leading zeros from the input value
    const inputValue = input.value.replace(/^0+/, '');
    input.value = inputValue + button_class.value;
  });
});
