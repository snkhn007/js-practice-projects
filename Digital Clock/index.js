setInterval(() => {
    const target = document.querySelector(".time");
    let time = new Date();
    target.textContent = time.toLocaleTimeString();
}, 1000);