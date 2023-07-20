let Celsius = document.getElementById("Celsius");
let Fahrenheit = document.getElementById("Fahrenheit");
let Kelvin = document.getElementById("Kelvin");

function CtoFK(){
    let output = (parseFloat(Celsius.value)*9/5)+32;
    let output1 =(parseFloat(Celsius.value)+273.5);
    Fahrenheit.value=parseFloat(output.toFixed(2));
    Kelvin.value  = parseFloat(output1.toFixed(2));
}
function FtoCK(){
    let output=(parseFloat(Fahrenheit.value)-32)*(5/9);
    let output1 =(parseFloat(Fahrenheit.value)-32)+273.15;
    Celsius.value = parseFloat(output.toFixed(2));
    Kelvin.value   = parseFloat(output1.toFixed(2)) ;
}
function ktoCF(){
    let output=(parseFloat(Kelvin.value)-273.15);
    let output1=(parseFloat((Kelvin.value)-273.15)*1.8)+32;
    Celsius.value = parseFloat(output.toFixed(2));
    Fahrenheit.value = parseFloat(output1.toFixed(2));
}