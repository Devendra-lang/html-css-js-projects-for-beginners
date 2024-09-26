const hideBtn = document.querySelector('.ri-toggle-line')
const showBtn =document.querySelector('.ri-toggle-fill')
const body = document.body
hideBtn.addEventListener('click',()=>{
    body.classList.toggle('dark-mode')
    showBtn.style.display = "block"
    hideBtn.style.display = "none"    
})

showBtn.addEventListener('click',()=>{
    body.classList.toggle('dark-mode')
    hideBtn.style.display = "block"    
    showBtn.style.display = "none"
     
})