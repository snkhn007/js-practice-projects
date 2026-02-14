let quotes = [
"Believe in yourself.",
"Small steps every day lead to big results.",
"Do not stop when you are tired. Stop when you are done.",
"Learning never exhausts the mind.",
"Your future depends on what you do today.",
"Dream big and start small.",
"Consistency is more powerful than motivation."
];

let b = document.querySelector(".btn");
let res = document.querySelector(".res");

b.addEventListener("click", ()=>{
    let randInd = Math.floor(Math.random() * quotes.length);

    res.style.display = "inline";
    res.style.color = "rgb(240, 105, 105)";
    res.textContent = quotes[randInd];
})