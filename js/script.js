{
function welcome() {
    console.log("Cześć!")
}

welcome;

const przycisk = document.querySelector(".przycisk")
const header = document.querySelector (".header")

const init = () => {
    const body = document.querySelector(".background"); 
    body.classList.toggle("darkbackground");
}
init();

const onChangeBackgroundClick = () => {
    const body = document.querySelector(".background");
    const button = document.querySelector(".button")

    button.addEventListener("click", () => {
        if(button.innerText === "Włącz tryb ciemny") {
            button.innerText = "Wyłącz tryb ciemny";
        }});

    body.classList.toggle("darkbackground");
}

onChangeBackgroundClick();


przycisk.addEventListener("click", () => {
    header.remove();
})

}