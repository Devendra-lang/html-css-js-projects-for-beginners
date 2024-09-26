const pswd = document.querySelector('#pswd')
const icon = document.querySelector('.ri-eye-line')


icon.addEventListener('click',()=>{
    if(pswd.type === 'password'){
        pswd.type = 'text'
    }
    else{
        pswd.type = 'password'
    }
})