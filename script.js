let btn=document.querySelector("button")
btn.addEventListener("click", ()=>{
    if(btn.innerHTML=="Dark Mode"){
document.body.style.backgroundColor="black"
document.body.style.transition="background-color 0.5s";

btn.innerHTML="Light Mode"
    }
else{
    document.body.style.backgroundColor="white"
    btn.innerHTML="Dark Mode"   
}

})