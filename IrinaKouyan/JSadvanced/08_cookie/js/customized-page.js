var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
var font = document.getElementById("font");
var color = document.getElementById("color");
var textBox = document.getElementById("text");
var saveChoices = document.getElementById("saveChoices");
var allCookies = document.cookie;
var fontSize, colorValue;


window.onload = function () {
    textBox.style.backgroundColor = findCookieValue("color");
    textBox.style.fontSize = findCookieValue("font");

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

function findCookieValue(cookieName) {
    var position = allCookies.indexOf(cookieName + "=");

    if (position != -1) {
        var start = position + cookieName.length + 1;
        var end = allCookies.indexOf(";", start);
        if (end == -1) {
            end = allCookies.length
        }
        var value = allCookies.substring(start, end);
        value = decodeURIComponent(value);
        return value;
    } else if (cookieName == "color") {
        return "#ebebeb";
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
    document.cookie = "color=" + colorValue + ";max-age=" + (60 * 60 * 24 * 7);
    document.cookie = "font=" + fontSize + "px;max-age=" + (60 * 60 * 24 * 7);
}