const hamburger= document.querySelector(".hamburger")
const closeBtn= document.querySelector(".close")
const productwrap= document.querySelector(".productwrap")
const showfunc=()=>{
    productwrap.classList.toggle("active")
    hamburger.classList.toggle("active")
    closeBtn.classList.toggle("active")
}
const closefunc=()=>{
    productwrap.classList.remove("active")
    hamburger.classList.remove("active")
closeBtn.classList.remove("active")
}
hamburger.addEventListener("click",showfunc)
closeBtn.addEventListener("click",showfunc)