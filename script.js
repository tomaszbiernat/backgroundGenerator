var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

const col1 = '#00ff00';
const col2 = '#ff0000';
color1.value = col1;
color2.value = col2;

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value 
    + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
    random.style.background = "linear-gradient(to right, " + color1.value  + ", " + color2.value + ")";
}

function randomColor()
{
    let col1 = [rand(),rand(),rand()];
    let col2 = [rand(),rand(),rand()];    
    let hex1 = convertToHex(col1);
    let hex2 = convertToHex(col2); 
    body.style.background = "linear-gradient(to right, " + hex1 + ", " + hex2 + ")";
    color1.value = hex1;
    color2.value = hex2;
    css.textContent = body.style.background;
    random.style.background = "linear-gradient(to right, " + hex1 + ", " + hex2 + ")";
}

function rand()
{
    return Math.floor(Math.random()*255);
}

function convertToHex(numbers){
    
    let hex = numbers.map(num=>{
        let converted = num.toString(16);
        if(converted.length < 2)
        {
            converted += converted;
        }
        return converted;
    }); 
    return `#${hex.join('')}`;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomColor);