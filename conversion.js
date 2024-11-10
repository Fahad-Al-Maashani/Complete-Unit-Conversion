<script>
function convertTemperature() 
{ let celsius = document.getElementById("celsius").value; 
let fahrenheit = (celsius * 9/5) + 32; 
document.getElementById("fahrenheit").value = fahrenheit; } 
function convertWeight() { let kilograms = document.getElementById("kilograms").value; let pounds = kilograms * 2.205; document.getElementById("pounds").value = pounds; } 
function convertDistance() { let kilometers = document.getElementById("kilometers").value; let miles = kilometers / 1.609; document.getElementById("miles").value = miles; } 
</script>
