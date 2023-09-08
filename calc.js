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


equal.addEventListener("click", () => {
  let result = performOperation(currentInput);

  if (result === "Error") {
    input.value = "Error";
    setTimeout(() => {
      input.value = "";
    }, 1000);
  } else {
    input.value = convertToNepaliNumerals(result.toString());
    currentInput = result.toString();
  }
});

clear.addEventListener("click", () => {
  input.value = "";
  currentInput = "";
});

erase.addEventListener("click", () => {
  currentInput = currentInput.substr(0, currentInput.length - 1);
  input.value = convertToNepaliNumerals(currentInput);
});
