const calculator = ['(',')','%','AC','7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+']

let main = document.createElement("main");
document.querySelector("body").appendChild(main);

/**Create Ecran Output */
let divOutput = document.createElement("div");
main.appendChild(divOutput);
divOutput.classList.add('output');
let divPrevious = document.createElement("div");
divOutput.appendChild(divPrevious);
divPrevious.classList.add('previous');
let divCurrent = document.createElement("div");
divOutput.appendChild(divCurrent);
divCurrent.classList.add('current');

/**Create button */
for (let i = 0; i < calculator.length; i++) {
  let btn = document.createElement("button");
  let btnText = document.createTextNode(calculator[i]);
  btn.appendChild(btnText);
  main.appendChild(btn);
  btn.classList.add('btnStyle', 'btn'+i);
}
