const menu=document.querySelector(".menu")
const close=document.querySelector(".close")
const navOps=document.querySelector(".nav-ops")
const goTop =document.querySelector(".go-top")

menu.addEventListener("click",(e)=>{
   e.stopPropagation()
    navOps.style.right=" 24px"
})

close.addEventListener("click",()=>{
    navOps.style.right=" -100%"
})

navOps.addEventListener("click",(e)=>{
    e.stopPropagation()
})

goTop.addEventListener("click",()=>{
  document.querySelector(".main-contante").scrollTo(0,0)
}
)

window.addEventListener('click',()=>{
     navOps.style.right=" -100%"
})