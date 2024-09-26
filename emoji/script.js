




const temoji = document.getElementById('emoji')






const emoji = [ '😆',
    '😅',
    '🤣',
    '😂',
    '😀',
    '🤑',
    '🤨',
    '🙂',
    '😊',
    '😗',
    '😛',
    '😏',
    '🤥',
    '😴',
    '🥺',
    '😧',
    '😇',
    '😳',
    '🙃',
    '🥴',
    '🧐',
    '🤨',
    '😒',
    '🤔',
    '🤭',
    '🥰',
    '🤐',
    '👀',
    '🤔',
    '🤪',
    '🥲',
    '😃',
    '😁',
    '😬',]


    
    // console.log(nemoji);
    // const nemoji = emoji.map((list)=>list)

    

    let index = 0

temoji.addEventListener('mouseover',(e)=>{
    index%=emoji.length
    temoji.innerHTML=emoji[index]
    index++
})



    
  

