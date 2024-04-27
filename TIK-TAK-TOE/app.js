let game = document.querySelector(".game");
var box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winMsg = document.querySelector('.msg');

let player = "o";
let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// =================Add value
box.forEach((box) => {
  box.addEventListener("click", function () {
    if (player === "x") {
      player = "o";
      box.innerHTML = "x";
      box.style.color = 'Red';
    } else if (player === "o") {
      player = "x";
      box.innerHTML = "o";
      box.style.color = 'blue';
    }
    box.disabled = true;
    //===============wine
    chackwin();
  });
  //=================reset
  reset.addEventListener("click", function () {
    box.innerHTML = "";
    box.disabled = false;
    winMsg.innerText="";
  });
});
const chackwin = () => {
  for (let pattern of winPattern) {
    console.log(pattern[0], pattern[1], pattern[2]);
    //console.log(box[pattern[0]].innerText, box[pattern[1]].innerText, box[pattern[2]].innerText);

    let a = box[pattern[0]].innerText;
    let b = box[pattern[1]].innerText;
    let c = box[pattern[2]].innerText;
    console.log(a);
    console.log(b);
    console.log(c);
    if (a != "" && b != "" && c != "") {
      if (a === b && b === c) {
        if (a === 'x') {
          winMsg.innerText = "you win Red";
          winMsg.style.color = 'red';
          
        } else {
          winMsg.innerText = "you win Blue";
          winMsg.style.color = 'Blue';
          
        }

      }
    }
  }
};