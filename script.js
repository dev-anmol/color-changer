const buttons=document.querySelectorAll(".button");
const body=document.body;

for(let i=0;i<4;i++){
    buttons[i].addEventListener("click",()=>{
        body.style.backgroundColor=buttons[i].id;
    })
}