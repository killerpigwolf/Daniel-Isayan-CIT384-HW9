// Section 1: Format and display today's date.
const today = new Date();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const year = today.getFullYear();

document.getElementById("dateDisplay").textContent = `Today is ${month}/${day}/${year}`;

// Section 2: Convert strings to numbers and check if they are NaN or integers.
const valueOne = "42";
const valueTwo = "19.75";
const valueThree = "hello";
const valueFour = "100";

const convertedOne = Number(valueOne);
const convertedTwo = Number(valueTwo);
const convertedThree = Number(valueThree);
const convertedFour = Number(valueFour);

const isNaNOne = Number.isNaN(convertedOne);
const isNaNTwo = Number.isNaN(convertedTwo);
const isNaNThree = Number.isNaN(convertedThree);
const isNaNFour = Number.isNaN(convertedFour);

const isIntegerOne = Number.isInteger(convertedOne);
const isIntegerTwo = Number.isInteger(convertedTwo);
const isIntegerThree = Number.isInteger(convertedThree);
const isIntegerFour = Number.isInteger(convertedFour);

let messageOne;
let messageTwo;
let messageThree;
let messageFour;

if (isNaNOne) {
  messageOne = "This value is not a valid number.";
} else if (isIntegerOne) {
  messageOne = "This value is an integer.";
} else {
  messageOne = "This value is not an integer.";
}

if (isNaNTwo) {
  messageTwo = "This value is not a valid number.";
} else if (isIntegerTwo) {
  messageTwo = "This value is an integer.";
} else {
  messageTwo = "This value is not an integer.";
}

if (isNaNThree) {
  messageThree = "This value is not a valid number.";
} else if (isIntegerThree) {
  messageThree = "This value is an integer.";
} else {
  messageThree = "This value is not an integer.";
}

if (isNaNFour) {
  messageFour = "This value is not a valid number.";
} else if (isIntegerFour) {
  messageFour = "This value is an integer.";
} else {
  messageFour = "This value is not an integer.";
}

const numberResults = document.getElementById("numberResults");
numberResults.innerHTML = `
  <p><strong>Original value:</strong> "${valueOne}" → <strong>Converted:</strong> ${convertedOne} → <strong>isNaN:</strong> ${isNaNOne} → <strong>isInteger:</strong> ${isIntegerOne}. ${messageOne}</p>
  <p><strong>Original value:</strong> "${valueTwo}" → <strong>Converted:</strong> ${convertedTwo} → <strong>isNaN:</strong> ${isNaNTwo} → <strong>isInteger:</strong> ${isIntegerTwo}. ${messageTwo}</p>
  <p><strong>Original value:</strong> "${valueThree}" → <strong>Converted:</strong> ${convertedThree} → <strong>isNaN:</strong> ${isNaNThree} → <strong>isInteger:</strong> ${isIntegerThree}. ${messageThree}</p>
  <p><strong>Original value:</strong> "${valueFour}" → <strong>Converted:</strong> ${convertedFour} → <strong>isNaN:</strong> ${isNaNFour} → <strong>isInteger:</strong> ${isIntegerFour}. ${messageFour}</p>
`;

// Section 3: Use arithmetic, formatting, and parsing to calculate results.
const itemPrice = 24.99;
const taxRate = 0.08;
const shippingCost = 5.5;
const quantity = 2;
const subtotal = itemPrice * quantity;
const taxAmount = subtotal * taxRate;
const totalCost = subtotal + taxAmount + shippingCost;
const discount = totalCost - 12;
const population = 1250000;
const formattedPopulation = population.toLocaleString();
const parsedFloatValue = Number.parseFloat("125.75");
const parsedIntegerValue = Number.parseInt("72.9");

const mathResults = document.getElementById("mathResults");
let orderMessage;

if (totalCost >= 60) {
  orderMessage = "This order is above the $60 threshold.";
} else {
  orderMessage = "This order is under the $60 threshold.";
}

mathResults.innerHTML = `
  <p><strong>Item price:</strong> $${itemPrice.toFixed(2)} × <strong>Quantity:</strong> ${quantity} = <strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
  <p><strong>Tax amount:</strong> $${taxAmount.toFixed(2)} and <strong>Shipping:</strong> $${shippingCost.toFixed(2)}</p>
  <p><strong>Total cost:</strong> $${totalCost.toFixed(2)}. After a $12 discount, the price is $${discount.toFixed(2)}.</p>
  <p><strong>Population:</strong> ${formattedPopulation} people.</p>
  <p><strong>Parsed float:</strong> ${parsedFloatValue} and <strong>Parsed integer:</strong> ${parsedIntegerValue}</p>
  <p>${orderMessage}</p>
`;
