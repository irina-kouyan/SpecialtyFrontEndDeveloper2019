var images = document.images;
var caption = document.getElementsByClassName("caption");
var button = document.getElementById("go");
var i = 0;
var j = 0;

button.addEventListener("click", DisplayAddresses, false);

function DisplayAddresses() {
    setTimeout(function () {
        images[i].style.border = "4px solid rgba(201, 54, 76, .7)";
        caption[i].innerHTML = images[i].src;
        i++;
        if (i < images.length) {
            DisplayAddresses();
        } else {
            i = 0;
        }
    }, 1000);
}
