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
  document.activeElement.blur(element);
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

//Button handle
document.addEventListener("keyup", (event) => {
  switch (event.key) {
    //operator
    case "Enter":
      concatenationResult();
      displayNum("=");
      break;
    case "+":
      displayNum("+");
      break;
    case "-":
      displayNum("-");
      break;
    case "*":
      displayNum("*");
      break;
    case "/":
      displayNum("/");
      break;
    case "%":
      displayNum("%");
      break;
    case "(":
      displayNum("(");
      break;
    case ")":
      displayNum(")");
      break;
    case ".":
      displayNum(".");
      break;
      case "Backspace":
        concatenationReset();
        break;
    //number
    case "0":
      displayNum("0");
      break;
    case "1":
      displayNum("1");
      break;
    case "2":
      displayNum("2");
      break;
    case "3":
      displayNum("3");
      break;
    case "4":
      displayNum("4");
      break;
    case "5":
      displayNum("5");
      break;
    case "6":
      displayNum("6");
      break;
    case "7":
      displayNum("7");
      break;
    case "8":
      displayNum("8");
      break;
    case "9":
      displayNum("9");
      break;
  }
});
