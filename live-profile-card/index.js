const name = document.querySelector('#fname');
const nameOut = document.querySelector('.Fname');
name.addEventListener("input", (e)=>{
    const inp = e.target.value.trim();
    console.log(inp);
    nameOut.textContent = inp;
})

const role = document.querySelector('#role');
const roleOut = document.querySelector('.Role');

role.addEventListener('input', (e)=>{
    const inp = e.target.value.trim();
    console.log(inp);
    roleOut.textContent = inp;

})

const imail = document.querySelector('#imail');

const email = document.querySelector('#email');
const emailOut = document.querySelector('.Email');

email.addEventListener('input', (e)=>{
    const inp = e.target.value.trim();
    console.log(inp);
    emailOut.textContent = inp;

    if(inp.length >0){
        imail.style.display = "inline";
    }else{
        imail.style.display = "none";
    }
    
})

const inum = document.querySelector('#iNumber');

const number = document.querySelector('#number');
const numOut = document.querySelector('.Number');

number.addEventListener('input', (e)=>{
    const inp = e.target.value.trim();
    console.log(inp);
    numOut.textContent = inp;

    if(inp.length >0){
        inum.style.display = "inline";
    }else{
        inum.style.display = "none";
    }
})

const bio = document.querySelector('#bio');
const bioOut = document.querySelector('.Bio');
bio.addEventListener('input', (e)=>{
    const inp = e.target.value.trim();
    console.log(inp);
    bioOut.textContent = inp;
})

const photoInput = document.querySelector("#photo");
const previewImg = document.querySelector("#previewImg");

photoInput.addEventListener("change", (e) => {
const file = e.target.files[0];
if (!file) return;

previewImg.style.display = "inline";
previewImg.src = URL.createObjectURL(file);
});