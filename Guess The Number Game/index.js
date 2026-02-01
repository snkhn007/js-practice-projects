// let number = Math.ceil(Math.random() * 100);
let number = 50;
let inpArr = [];
let btn = document.querySelector(".target");
let firstClickAfterChange = false;
let changeLater = true;

function resetGameState(){
    inpArr = [];
    number = Math.ceil(Math.random() * 100);
    removeLines();
    document.getElementById("gmOvr").innerHTML = "";
    document.getElementById("gmOvrRm").innerHTML = "";
    document.getElementById("number").value = "";
    document.getElementById("number").focus();
}

function removeLines() {
  // remove three lines after each input
  let errors = document.getElementsByClassName("erMsg");
  for (let item of errors) {
    item.innerHTML = "";
  }
}

// random number generated outside so that it wont update after each wrong guess
function addData() {
  removeLines();
  var inputValue = document.forms["myForm"]["number"].value;
// if (!Number.isInteger(Number(inputValue))) {
  if(inputValue < 0 || inputValue > 100 || inputValue ==""){
    alert("Please enter a valid number");
    // return;
  }else{
      inpArr.push(Number(inputValue));
  }
  let p = document.createElement("div");
  // create Element is a document method and thus following is incorrect
  // let guess = p.createElement('p');

  let guess = document.createElement("p");
  let result = document.createElement("p"); //game over
  let hint = document.createElement("p"); //removes when game over
  guess.className = "erMsg";
  result.className = "erMsg";
  hint.className = "erMsg";

  result.id = "gmOvr";
  hint.id = "gmOvrRm";
  p.appendChild(guess);
  p.appendChild(result);
  p.appendChild(hint);
  let target = document.querySelector(".form");
  target.insertAdjacentElement("afterend", p);


  // initializing
  let res, h;
  let lastGuess = Number(inpArr[inpArr.length - 1]);
//   Number(inputValue)

  if(lastGuess == number ){
      res = "Right Answer!!!";
      btn.textContent = "Play Again";
      result.style.backgroundColor = "green";
      firstClickAfterChange = true;
      //   return;
    }else if(inpArr.length >= 3){
        //   displayError("!!!GAME OVER!!!");
        res = "!!!GAME OVER!!!";
        hint.textContent = "";
        changeLater = false;
        firstClickAfterChange = true;
        btn.textContent = "Play Again";
        //   return;
    }else{
        res = "Wrong Answer!!!";
        result.style.backgroundColor = "red";
  }

  if (lastGuess < number && changeLater) {
    h = "Last guess was too low!";
  }else if (lastGuess > number && changeLater) {
    h = "Last guess was too high!";
  }

  guess.textContent = `Previous guesses: ${inpArr}`;
  result.textContent = res;
  hint.textContent = h;
}

btn.addEventListener("click", handleClick);

function handleClick() {
    if (firstClickAfterChange) {
        resetGameState();
        btn.textContent = "Submit guess";
        firstClickAfterChange = false;
        return;
    }
    addData();
}

// let b = document.querySelector(".target");
// b.addEventListener("click", addData);
// if(firstClickAfterChange){
//     b.addEventListener("clcik", restGameState)
// }
// b.addEventListener("click", alert("working"));
// incorrect addition to target position
// let target = document.querySelector(".content");
// target.appendChild(p);
