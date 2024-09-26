const start = document.getElementById('start')
const stop = document.getElementById('stop')

   const randomColor= function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0; i<6;i++){
        color +=hex[Math.floor(Math.random()*16)]
    }

    return color
   }
// console.log(randomColor());


//    start.addEventListener('click',()=>{
          
//            const colorchange =function(){
//             document.body.style.backgroundColor=randomColor()
//             console.log(randomColor());
            
//            }
//            let interval = setInterval(colorchange,100)
           
//            document.getElementById('stop').addEventListener('click',()=>{
//             clearInterval(interval)
//             console.log("ended");
            
//            })    
//    })           


let interval;

const changebgcolor = function(){
    if(!interval){
        interval=setInterval(startbgcolor,1000)
        console.log("start");
        
        
    }

    function startbgcolor(){
        document.body.style.backgroundColor=randomColor()
        console.log(randomColor());

        
    }
}

function stopcolor(){
    clearInterval(interval)
    interval=null
}
start.addEventListener('click',changebgcolor)
document.getElementById('stop').addEventListener('click',stopcolor)