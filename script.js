const menu=document.querySelector(".menu")
const close=document.querySelector(".close")
const navOps=document.querySelector(".nav-ops")
const goTop =document.querySelector(".go-top")

menu.addEventListener("click",()=>{
    navOps.style.right=" 24px"
})

close.addEventListener("click",()=>{
    navOps.style.right=" -100%"
})

goTop.addEventListener("click",()=>{
  document.querySelector(".main-contante").scrollTo(0,0)
}
)