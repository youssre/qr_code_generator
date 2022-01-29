let input = document.querySelector('.form #txt'),
    btn = document.getElementById('btn'),
    myimg = document.getElementById('imgs');

btn.addEventListener('click',()=>{
    let data = input.value;
    if(data.length > 0){
        let imgsrc= ` https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${data} `;
        myimg.src = imgsrc;
        myimg.parentElement.classList.remove('hidden');
        console.log(myimg.src);
    }
    
});
