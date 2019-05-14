var inputs = document.querySelectorAll(".slider");
var inputsValues = new Array();
var submitButton = document.querySelector("button");
    submitButton.addEventListener("click", chartIt, true);
var chartPlace = document.querySelector("#chartContainer");
    chartPlace.width = 600;
    chartPlace.height = 400;
var myChart = chartPlace.getContext("2d");

var i, maxValue, scaleFactor, x, y, barWidth, barHeight;

function chartIt(e) {
    e.preventDefault();
    
    myChart.clearRect(0, 0, chartPlace.width, chartPlace.height);

    for (i = 0; i < inputs.length; i++) {
        inputsValues[i] = inputs[i].value;
    }

    maxValue = Math.max(...inputsValues);

    scaleFactor = chartPlace.height / maxValue;
    barWidth = Math.floor(chartPlace.width / inputs.length);
    
    for (i = 0; i < inputs.length; i++) {
        
        barHeight = inputs[i].value * scaleFactor;
        x = barWidth * i;
        y = chartPlace.height - barHeight;
        
        myChart.fillStyle = "#f4b642";
        myChart.fillRect(x, y, barWidth - 5, barHeight - 30);
        myChart.fillStyle = "#000000";
        myChart.font = "16px Arial";
        myChart.textAlign = "center";
        myChart.fillText(inputs[i].name, (x + barWidth / 2), chartPlace.height - 10);
    }
}