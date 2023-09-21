let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

let currentInput = "";

// Function to convert Nepali numerals to Arabic numerals
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

// Function to perform the calculation
function performOperation(inputValue) {
  let arabicInput = convertToArabicNumerals(inputValue);

  try {
    let result = eval(arabicInput);

    if (arabicInput === "77+88") {
      // Easter egg condition: If the input is "77+88", redirect to a YouTube link
      window.location.href = "https://youtu.be/xvFZjo5PgG0?si=Z1iO9Ol3FuU6lkXo";
      return "तपाईंले चाल पत्ता लगाउनुभयो!";
    }

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
  } else if (result !== undefined) {
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

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode) {
  body.classList.add('dark-mode');
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});