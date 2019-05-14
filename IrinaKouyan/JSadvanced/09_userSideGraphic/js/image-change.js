var image = document.images[0];
var buttons = document.getElementsByTagName("button");
var i;

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        if (this.id == "field") {
            image.src = "images/field.jpg";
        } else if (this.id == "tree") {
            image.src = "images/tree.jpg";
        } else {
            image.src = "images/stone.jpg";
        }
    });
}