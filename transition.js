

window.onload = () => {

    const transition = document.querySelector(".transition");

    const makeTransitions = document.querySelector(".make-transition")

    setTimeout(() => {
        transition.classList.remove("is-active")
    }, 500);

    makeTransitions.addEventListener("click",(e)=>{
        e.preventDefault();
        let target = e.target.href;
        transition.classList.add("is-active");
        setTimeout(() => {
            window.location.href=target;
        }, 500);
    } )

}
