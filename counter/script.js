const heading = document.getElementById('counter-value')
const btn = document.querySelectorAll('.btn')
const ram = document.querySelector('.decrease')
console.log(ram);
// let count =0


// btn.forEach(function(list){
//     // console.log(list);
//     list.addEventListener('click',(e)=>{
//         if(e.target.id==='increase'){
//            heading.innerText=count++
//         }
//         else if (e.target.id==='reset'){
//             heading.innerHTML=count=0 
//         }
//         else if (e.target.id==='decrease'){
//             heading.innerHTML=count--
//         }
//     })
// })


// let count = 0;


// btn.forEach(function(list){

//     list.addEventListener('click',(e)=>{
// // let count = Number(heading.innerText)
//         if(e.target.id==='increase'){
//             count++
//         }
//         else if (e.target.id==='reset'){
//             count = 0
//         }
//         else if(e.target.id==='decrease'){
//             count--
//         }
//         heading.innerText=count
//     })
// })



let count = 0


btn.forEach(function(list){
    list.addEventListener('click',function (e) {
     btnclass = e.target.classList

          if(btnclass.contains('decrease')){
            count--                         
          }
          else if(btnclass.contains('increase')){
            count++
          }
          else if (btnclass.contains('reset')){
            count=0
          }

          if(count<0){
            heading.style.backgroundColor='red'
            alert('you are so negative')
          }
          else if (count>0){
            heading.style.backgroundColor='green'

        }

        else{
              heading.style.backgroundColor='black'
        }                                       
          heading.innerText=count
    })
})