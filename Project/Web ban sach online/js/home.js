let slideIndex = 0;
autoSlide();
function autoSlide() {
    let slideItems = document.querySelectorAll(".slide__item");
    for (let i = 0; i < slideItems.length; i++) {
        slideItems[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slideItems.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = slideItem.length;
    slideItems[slideIndex - 1].style.display = "block";
    setTimeout(autoSlide, 3000);
}