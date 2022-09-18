
    // ELEMENT SELECTION

const mobileMenu = document.querySelector(".nav-list-mobile");
const mobileIcon = document.querySelector(".mobile-menu");
const heroTitle = document.querySelector(".mainHeader");


// END OF SECTION
// MOBILE MENU

mobileIcon.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("show")
})

// END OF SECTION
// TITLE ANIMATION
const stringText = heroTitle.textContent;
const splitText = stringText.split("")

heroTitle.textContent=""; //remove original h1

for(let i=0; i<splitText.length; i++ ){
    heroTitle.innerHTML += "<span>" + splitText[i] + "</span>";
} //crates and loops each letter and crates a span

let char = 0;
let timer = setInterval(onTick, 50)

function onTick(){
    const span = heroTitle.querySelectorAll("span")[char];
    span.classList.add('fade');
    char++;
    if(char===splitText.length){
        complete();
        return
    }
    function complete(){
        clearInterval(timer);
        timer = null;
    }
}

// END OF SECTION



//PROGRESS BAR
const progressBar = document.querySelector(".progress-bar");
const bodyHeight = document.querySelector("body")


const animateProgress= ()=>{
    let scrollDistance = bodyHeight.getBoundingClientRect().top;
    console.log(scrollDistance);
}

animateProgress()