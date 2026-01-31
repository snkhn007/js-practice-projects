let number = Math.ceil(Math.random() * 100);
function addData(){
    // random number generated outside so that it wont update after each wrong guess
    
    let p = document.createElement('div')
    // create Element is a document method and thus following is incorrect
    // let guess = p.createElement('p');

    let guess = document.createElement('p');
    let result = document.createElement('p');
    let hint = document.createElement('p');

    guess.textContent = "Previous guesses:  ";
    result.textContent = `${number}`;
    hint.textContent = "Previous guesses:  ";
    p.appendChild(guess);
    p.appendChild(result);
    p.appendChild(hint);

    // incorrect addition to target position
    // let target = document.querySelector(".content");
    // target.appendChild(p);

    let target = document.querySelector(".form");
    target.insertAdjacentElement("afterend", p)
}

let b = document.querySelector(".target");
b.addEventListener("click", addData);
// b.addEventListener("click", alert("working"));