const btn =document.querySelectorAll('.button')
const image =document.querySelector('#img1')
const img = document.querySelector('#img2')
console.log(btn);

let count = 0;
btn.forEach((e)=>{
         e.addEventListener('click',(list)=>{
            if(list.target.id==='btn1'&& count==0){
                image.style.display="none";
                img.style.display="block";
                count=1;
            }
            else{
                image.style.display="block";
                img.style.display="none";
                count=0;
            }
         })    
})
