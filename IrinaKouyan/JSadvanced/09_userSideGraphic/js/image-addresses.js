var images = document.images;
var addresses = new String;
var displayAddresses = document.getElementById("addressesList");
var caption = document.getElementsByClassName("caption");
var button = document.getElementById("go");
var i, j;

button.addEventListener("click", DisplayAddresses, false);

function DisplayAddresses() {
    for (i = 0; i < images.length; i++) {
        images[i].style.border = "4px solid rgba(201, 54, 76, .7)";
        addresses += images[i].src + "<br/><br/>";
    }

    for (j = 0; j < caption.length; j++) {
        caption[j].innerHTML = images[j].src;
    }
}