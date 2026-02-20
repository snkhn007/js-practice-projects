let b = document.body;
b.addEventListener("click", (e)=>{
    const c = document.createElement("div");
    c.className= "circle";
    c.style.left = e.clientX - 15 + "px";
    c.style.top = e.clientY - 15 + "px";

    c.style.backgroundColor = `rgb(${255*Math.random()}, ${255*Math.random()}, ${255*Math.random()})`;

    b.appendChild(c);

    setTimeout(() => {
        c.remove();
    }, 5000);
})