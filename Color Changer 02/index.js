// let red = document.querySelector(".red");
// let blue = document.querySelector(".blue");
// let green = document.querySelector(".green");
// let yellow = document.querySelector(".yellow");
// let reset = document.querySelector(".white");

// function change(color){
//     document.body.style.backgroundColor = color;
// }

// red.addEventListener("click", ()=>change("lightpink") );
// blue.addEventListener("click", ()=>change("lightblue") );
// green.addEventListener("click", ()=>change("lightgreen") );
// yellow.addEventListener("click", ()=>change("yellow") );
// reset.addEventListener("click", ()=>change("white") );

// Or using bubbling

let parent = document.querySelector(".parent");

parent.addEventListener("click", (e)=>{
    // console.log(e.target.className);
    let color = e.target.className;
    document.body.style.backgroundColor = color;

})