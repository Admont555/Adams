//gallery

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);
const images = document.querySelectorAll(".grid-img");
const closingIcon = document.querySelector(".closing-box");


images.forEach(image =>{
    image.addEventListener('click', e =>{
        lightbox.classList.add("active");
        closingIcon.classList.add("active");
        const img = document.createElement('img');
        img.src = image.src;

        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }

        lightbox.appendChild(img)

    })
})

lightbox.addEventListener('click', e =>{
    if(e.target !== e.currentTarget) return;
    lightbox.classList.remove("active")
    closingIcon.classList.remove("active");
})

closingIcon.addEventListener('click', ()=>{
    lightbox.classList.remove("active");
    closingIcon.classList.remove("active");
})
