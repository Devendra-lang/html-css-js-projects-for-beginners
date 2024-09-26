const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const image = document.querySelector('img')
const para = document.querySelector('p')

const url =('https://dog.ceo/api/breeds/image/random')


// startBtn.addEventListener('click',()=>{
//     function dogImage() {
//         fetch(url).then((res)=>res.json())
//         .then((data)=>{
//             console.log(data);
//             image.src = data.message
//         })
//         .catch((error)=>{
//             console.log("cannot load image",error);
//         })
//         }
//         const setIntervalId = setInterval(dogImage,2000)

//         stopBtn.addEventListener('click',()=>{
//             clearInterval(setIntervalId)
//         })
// }
// )

// async function dogImage() {
//      try {
//         const res = await fetch(url)
//         const data = await res.json()
//         image.src = data.message
//      } catch (error) {
//         console.log("error");
//         para.innerHTML = "something went wrong"
//      }
// }

 
// // dogImage()



// startBtn.addEventListener('click',()=>{
//         dogImage()
//         const interid = setInterval(dogImage,2000)

//         stopBtn.addEventListener('click',()=>{
//             clearInterval(interid)
//         })

// })



