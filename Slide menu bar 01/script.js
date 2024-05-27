const button = document.querySelector('.menu-button')
const menuBar = document.querySelector('.full-menu')
const cancle = document.querySelector('.heading p')

button.addEventListener('click', e => {
    button.style.visibility = "hidden"
    menuBar.style.visibility = "visible"
    console.log(e);
});

cancle.addEventListener('click', e => {
    button.style.visibility = "visible"
    menuBar.style.visibility = "hidden"
});