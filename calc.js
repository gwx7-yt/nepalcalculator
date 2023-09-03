let equal_pressed = 0;
let button_input = document.querySelectorAll(".input-button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
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

// Function to convert Arabic numerals to Nepali numerals
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

window.onload = () => {
  input.value = "";
};

button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    input.value += button_class.value;
  });
});

equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  let arabicInput = convertToArabicNumerals(inp_val);

  try {
    let solution = eval(arabicInput);
    let nepaliResult = convertToNepaliNumerals(solution.toString());

    input.value = nepaliResult;
  } catch (err) {
    input.value = "Error";
    setTimeout(() => {
      input.value = "";
    }, 1000);
  }
});

clear.addEventListener("click", () => {
  input.value = "";
});

erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
  function performOperation(inputValue) {
  try {
    let result = eval(inputValue);
    return result;
  } catch (err) {
    return "त्रुटि";
  }
}

button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    input.value += button_class.value;
  });
});

equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;

  let arabicInput = convertToArabicNumerals(inp_val);
  let result = performOperation(arabicInput);
  let nepaliResult = convertToNepaliNumerals(result.toString());

  input.value = nepaliResult;
});

clear.addEventListener("click", () => {
  input.value = "";
});

erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});
});

