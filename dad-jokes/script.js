const joke = document.querySelector('#jokes')
const btn = document.querySelector('button')

// https://official-joke-api.appspot.com/random_joke

// jokeGenrate()

function jokeGenrate(){
  const url = fetch('https://api.chucknorris.io/jokes/random')

  url.then(res=>res.json())
  .then((data)=>{
    console.log(data);
    joke.innerHTML = data.value
    return data
  })
  .catch((error)=>console.log(error)
  )
}

btn.addEventListener('click',jokeGenrate)