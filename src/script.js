const genButten = document.getElementById('qrBtn')
const qrInput = document.querySelectorAll('input')[0]
const qrBox = document.querySelector('.qrBox')
const qrImage = document.querySelector('.qrBox img')

genButten.addEventListener('click', () =>{
    if (!qrInput.value){
        return alert("Please enter valid text on input!")
    }
    

    
    genButten.style.opacity = "0.5";
    genButten.style.pointerEvents = "none";
    let oldText = genButten.innerText;
    genButten.innerText = "Generating...";


    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput.value}`
    qrImage.addEventListener('load' , () =>{
        qrBox.classList.remove('hidden')

        genButten.style.opacity = "";
        genButten.style.pointerEvents = "";
        genButten.innerText = oldText;
        
    })

})

qrInput.addEventListener('keyup', ()=>{
    if(!qrInput.value){
        qrBox.classList.add('hidden')
    }
})