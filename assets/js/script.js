//CALCULATOR
const calculator = [
  "(",
  ")",
  "%",
  "AC",
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];

let main = document.createElement("main");
document.querySelector("body").appendChild(main);

/**Create Ecran Output */
let divOutput = document.createElement("div");
main.appendChild(divOutput);
divOutput.id = "output";

let divPrevious = document.createElement("div");
divOutput.appendChild(divPrevious);
divPrevious.id = "previous";

let divCurrent = document.createElement("div");
divOutput.appendChild(divCurrent);
divCurrent.id = "current";

/**Create button */
for (let i = 0; i < calculator.length; i++) {
  let btn = document.createElement("button");
  let btnText = document.createTextNode(calculator[i]);
  btn.appendChild(btnText);
  main.appendChild(btn);
  btn.classList.add("btnStyle", "btn" + i);

  btn.id = calculator[i];
}

// concatenation in previous
for (let element of calculator) {
  let concatenate = document
    .getElementById(element)
    .addEventListener("click", (event) => {
      switch (element) {
        case "AC":
          concatenationReset();
          break;
        case "=":
          concatenationResult();
          displayNum(element);
          break;
        default:
          displayNum(element);
          break;
      }
    });
}
var displayString = "";
function displayNum(element) {
  let input = document.getElementById(element).textContent;
  let displayInputInOutput = document.getElementById("previous");
  displayString = displayString + input;
  displayInputInOutput.innerHTML = displayString;
}

// AC
function concatenationReset() {
  document.getElementById("previous").innerHTML = "";
  document.getElementById("current").innerHTML = "";
  displayString = "";
}
// result
function concatenationResult() {
  computeResult(displayString);
  document.getElementById("current").innerHTML = computeResult(displayString);
}
//
function computeResult(str) {
  return Function("return " + str)();
}

//Button enter
document.addEventListener("keydown", (event) => {
  if (event.key === 'Enter') {
    concatenationResult()
    displayNum(element);

  }
});