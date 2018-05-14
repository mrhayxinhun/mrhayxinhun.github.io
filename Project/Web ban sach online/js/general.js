
// Button Back to top
let backToTopBtn = document.querySelector(".back-to-top");
let scrollPosition = 0;
window.addEventListener("scroll", function () {
    scrollPosition = document.documentElement.scrollTop;
    if (scrollPosition > 120) {
        backToTopBtn.classList.add("back-to-top__active");
    }
    else {
        backToTopBtn.classList.remove("back-to-top__active");
    }
});
// Button Back to top ends

function openForm(evt, formName, formDescription) {
    let tabContent = document.getElementsByClassName("tab__content");
    let tabLink = document.getElementsByClassName("tab__link");
    let tabDescription = document.getElementsByClassName("tab__description");
    for (let element of tabContent) {
        element.style.display = "none";
    }
    for (let element of tabLink) {
        element.classList.remove("tab__link--active");
    }
    for (let element of tabDescription) {
        element.style.display = "none";
    }
    evt.currentTarget.classList.add("tab__link--active");
    document.getElementById(formName).style.display = "block";
    document.getElementById(formDescription).style.display = "block";
}

document.getElementById("tab__link--default").click();

let btnLogin=document.getElementById("login-btn");
let loginContainer=document.querySelector(".login-container");
btnLogin.addEventListener("click", function (){
    loginContainer.style.display= "block";
});

window.onclick = function(event) {
    if (event.target == loginContainer) {
        loginContainer.style.display= 'none';
    }
}

