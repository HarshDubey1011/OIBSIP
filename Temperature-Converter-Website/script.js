var temperature = document.getElementById('temperature');
var units = document.getElementById('units');
var btn = document.getElementById('btn');
var display = document.getElementById('display');

let fahrenheit, celsius, kelvin;

btn.addEventListener('click',() => {
	const val = Number(temperature.value);
	const unit = units.options.selectedIndex;
	calculate(val,unit);
	temperature.value = "";
})

function calculate(val,unit){
	if(unit===0) {
		fahrenheit = (val * 1.8) + 32;
		kelvin = val + 273.15;
		console.log(typeof(val));
		console.log(`The ${val} celsius into fahrenheit is ${fahrenheit}`);
		console.log(`The ${val} celsius into kelvin is ${kelvin}`);
		display.innerHTML = "The "+ val + "&degC into Fahrenheit is "+fahrenheit+"&degF" +"<br />" + "The "+ val + "&degC into Kelvin is "+kelvin+"&degK";
	}
	else if(unit === 1) {
		celsius = 5/9 * (val - 32);
		kelvin = (val - 32) * 5/9 + 273.15;
		console.log(`The ${val} fahrenheit into celsius is ${celsius}`);
		console.log(`The ${val} fahrenheit into kelvin is ${kelvin}`);
		display.innerHTML = "The "+ val + "&degF into Celsius is "+Math.round(celsius,2)+"&degC" +"<br />" + "The "+ val + "&degF into Kelvin is "+Math.round(kelvin,2)+"&degK";
	}
	else if(unit === 2) {
		celsius = val - 273.15;
		fahrenheit = (val - 273.15) * 1.8 + 32
		console.log(`The ${val} kelvin into celsius is ${celsius}`);
		console.log(`The ${val} kelvin into fahrenheit is ${fahrenheit}`);
		display.innerHTML = "The "+ val + "&degK into Celsius is "+Math.round(celsius,2)+"&degC" +"<br />" + "The "+ val + "&degC into Fahrenheit is "+Math.round(fahrenheit,2)+"&degF";
	}
}




/* Formulas */


// Fahrenheit = (Celsius * 1.8) + 32 
// C = 5/9(F – 32)
// F = (K − 273.15) × 1.8 + 32
// C = K - 273.15
// Kelvin = Celsius + 273.15
// K = (F − 32) × 5 ⁄ 9 + 273.15
