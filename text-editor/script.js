const input = document.getElementById('input-field')
const tButton = document.querySelectorAll('.btn')
const output = document.getElementById('output-field')


tButton.forEach((list)=>{
    // console.log(list);
    list.addEventListener('click',(e)=>{
        btncl = e.target.classList

        if(btncl.contains("uppercase")){
            input.style.textTransform="uppercase"
        }
       else  if(btncl.contains("lowercase")){
            input.style.textTransform="lowercase"
        }
        else if (btncl.contains("capitalize")){
            input.style.textTransform="capitalize"
        }
        else if (btncl.contains("bold")){
            input.style.textTransform="bold"
        }
        else if (btncl.contains("italic")){
            input.style.fontStyle="italic"
        }
        else (input.style.textDecoration="underline")
    })
})
