function openTabBookInfo(event, tabName){
    let tabBtn=document.getElementsByClassName("tab-book__item");
    let tabBookContent=document.getElementsByClassName("tab-book__content");
    for (let element of tabBtn){
        element.classList.remove("tab-book__item--active");
    }
    for (let element of tabBookContent){
        element.style.display="none";
    }
    event.currentTarget.classList.add("tab-book__item--active");
    document.getElementById(tabName).style.display="block";
}

document.getElementById("tab-book__item--default").click();

function tabImg(evt, imgName){
    let tabImg=document.getElementsByClassName("tab-image__thumbnail-wrapper");
    let tabImgContent = document.getElementsByClassName("book-to-buy__image");
    for (let element of tabImg){
        element.classList.remove("tab-image__thumbnail-wrapper--active")
    }
    for (let element of tabImgContent){
        element.style.display="none";
    }
    evt.currentTarget.classList.add("tab-image__thumbnail-wrapper--active")
    document.getElementById(imgName).style.display="block";
}

document.getElementById("tab-image-default").click();

