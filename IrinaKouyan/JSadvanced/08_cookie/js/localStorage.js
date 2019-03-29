var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
var font = document.getElementById("font");
var color = document.getElementById("color");
var textBox = document.getElementById("text");
var saveChoices = document.getElementById("saveChoices");
var fontSize, colorValue;


window.onload = function () {
    textBox.style.backgroundColor = findColor();
    textBox.style.fontSize = findFontSize();

    font.addEventListener("keypress", function (e) {
        if (e.charCode < 48 || e.charCode > 57) {
            e.preventDefault();
            error2.innerHTML = "Enter only integer";
            error2.style.visibility = "visible";
        } else {
            error2.style.visibility = "hidden";
        }
    }, false);
    
    font.addEventListener("blur", function () {
        error2.style.visibility = "hidden";
    }, false);
    
    saveChoices.addEventListener("click", change, false);
}

function findColor() {
    if (window.localStorage.color) {
        return window.localStorage.color;
    } else {
        return "#ebebeb";
    }
}

function findFontSize() {
    if (window.localStorage.font) {
        return window.localStorage.font;
    } else {
        return "16px";
    }
}

function setBoxColor() {
    if (color.value == "red") {
        colorValue = "#ffe1d8";
        error1.style.visibility = "hidden";
    } else if (color.value == "green") {
        colorValue = "#d9ffc6";
        error1.style.visibility = "hidden";
    } else if (color.value == "blue") {
        colorValue = "#c9f1ff";
        error1.style.visibility = "hidden";
    } else {
        colorValue = "#ebebeb";
        error1.style.visibility = "visible";
    }
    textBox.style.backgroundColor = colorValue;
}

function setFontSize() {
    if (font.value == "") {
        fontSize = 16;
    } else if (parseInt(font.value) > 50) {
        fontSize = 50;
        error2.innerHTML = "Font size cannot be over 50 px";
        error2.style.visibility = "visible";
    } else {
        fontSize = font.value;
    }
    textBox.style.fontSize = fontSize + "px";
}

function change(e) {
    e.preventDefault();
    setBoxColor();
    setFontSize();
    window.localStorage.color = colorValue;
    window.localStorage.font = fontSize + "px";
}