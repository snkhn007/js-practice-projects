const form = document.querySelector('#myForm');
const target = document.querySelector(".quizForm");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let score = 0;
    const one = document.querySelector('input[name="q1"]:checked')?.value;

    const two = document.querySelector('input[name="q2"]:checked')?.value;

    const three = document.querySelector('input[name="q3"]:checked')?.value;

    if(!one || !two || !three){
        alert("Please answer all questions");
        return;
    }
    if(one == "async") score++;
    if(two == "post") score++;
    if(three == "install") score++;

    let res = document.querySelector(".result");
    if(!res){
        res = document.createElement('div');
        res.classList.add('result');
        target.appendChild(res);
    }
    res.textContent = `Score : ${score*10}/30`;
})