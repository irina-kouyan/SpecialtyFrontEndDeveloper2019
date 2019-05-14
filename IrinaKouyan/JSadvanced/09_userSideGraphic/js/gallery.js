var thumbs = document.getElementsByClassName("imageThumbs");
var images = [];
var modal = document.getElementById("modal");
var modalOverlay = document.getElementById("modalOverlay");
var j, i;

function cacheImages() {
    for (j = 0; j < cacheImages.arguments.length; j++) {
        images[j] = new Image;
        images[j].src = cacheImages.arguments[j];
    }
}

cacheImages(
    "images/field.jpg",
    "images/tree.jpg",
    "images/stone.jpg"
)
    
window.onload = function () {
    for (i = 0; i < thumbs.length; i++) {
        thumbs[i].src = images[i].src;
        thumbs[i].addEventListener("click", showHiRes, false);
    }
}
   
function showHiRes() {
    modal.style.visibility = "visible";
    modalOverlay.style.visibility = "visible";

    modalOverlay.addEventListener("click", closeAll, false);

    modal.innerHTML = "<img class='imagesHiRes' src='" + this.src + "'><button class='close' id='close'>x</button>";

    var closeButton = document.getElementById("close");

    closeButton.addEventListener("click", closeAll, false);    
}

function closeAll() {
    modal.style.visibility = "hidden";
    modalOverlay.style.visibility = "hidden";    
}