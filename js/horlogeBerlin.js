main();

function main() {
    var intervalID = setInterval(updateDisplay, 1000);
}

function updateDisplay() {
    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();
    
    var nbFiveHours = Math.floor(hours/5);
    var nbHours = hours%5;
    var nbFiveMinutes = Math.floor(minutes/5);
    var nbMinutes = minutes%5;

    resetDisplay();

    for (let i=1; i<=nbFiveHours; i++){
        document.getElementById("fiveHours" + i).style.opacity = 1;
    }
    for (let i=1; i<=nbHours; i++){
        document.getElementById("hour" + i).style.opacity = 1;
    }
    for (let i=1; i<=nbFiveMinutes; i++){
        document.getElementById("fiveMinutes" + i).style.opacity = 1;
    }
    for (let i=1; i<=nbMinutes; i++){
        document.getElementById("minute" + i).style.opacity = 1;
    }
    for (let i=1; i<=seconds; i++){
        document.getElementById("sec" + i).style.opacity = 1;
    }
}

function resetDisplay() {
    for (let i=1; i<=4; i++){
        document.getElementById("fiveHours" + i).style.opacity = 0.4;
        document.getElementById("hour" + i).style.opacity = 0.4;
        document.getElementById("minute" + i).style.opacity = 0.4;
    }
    for (let i=1; i<=11; i++){
        document.getElementById("fiveMinutes" + i).style.opacity = 0.4;
    }

    for (let i=1; i<=59; i++){
        document.getElementById("sec" + i).style.opacity = 0.4;
    }
}