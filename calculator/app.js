const result = document.querySelector('.result')
const input = document.querySelector('.input')
const buttons=document.querySelectorAll('.button')

let count = ""; 

Array.from(buttons).forEach((list)=>{
    list.addEventListener('click',(e)=>{
        let num1 = e.target.value;
        let num2 = e.target.value;
        let percentage = (num1+num2)/100;

        if(e.target.value === "="){
            count= (eval(count));
            result.innerHTML = count;
        }
         
        // else if (e.target.value ==="%"){
        //        count = (count*count)%100;
        //        result.innerHTML = count;
        // }
        
        else if (e.target.id === "cut"){
                count 
                input.innerHTML = count;
        }

        else if(e.target.id ==="c"){
             count = ""
             input.innerHTML= count;
             result.innerHTML=count;
        }

        else if(e.target.id ==="ce"){
             count = ""
             input.innerHTML=count;
        }

        else if (e.target.id ==="xsqu"){
             count = count*count;   
            result.innerHTML = `sqr${count}`;
        }
        
        else if(e.target.id ==="onebyx"){
            result.innerHTML = `1/${count}`;
                 count = 1/count;
                input.innerHTML = count;
        }

        else {console.log(e.target);
        count = count + e.target.value;
        input.innerHTML = count;
       }
    })
})