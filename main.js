const body = document.body;
const myForm = document.getElementById('myForm');
const API="b257e4b4dfe8bb2ce49be0d46fe1a308";
const container=document.getElementsByClassName('weather-container')[0];
let showResult;
let made=false;
const myFun = async () => {
	let textbox=document.getElementById('City').value;
	const url =`http://api.openweathermap.org/data/2.5/weather?q=${textbox}&appid=${API}`;
	console.log(url);
	const res = await fetch(url);
  	const myJson = await res.json();
	const {main,weather} = myJson;
	const minTemp=Math.floor((main["temp_min"]-273.15)* 100) / 100;
	const maxTemp=Math.floor((main["temp_max"]-273.15)* 100) / 100;
	const Temp=Math.floor((main["temp"]-273.15)* 100) / 100;
	const Desc=weather[0]["description"];
	console.log(minTemp);
	if(!made){
		showResult = document.createElement('div');
		
		console.log("made")
	}
    showResult.classList.add('weatherdetails');
	console.log(showResult);
	showResult.innerHTML=`Temp: ${Temp} ° C <br>Min-Temp: ${minTemp} ° C <br>Max-Temp: ${maxTemp} ° C <br> Description: ${Desc}`
	//container.classList.add('animateup');
	if(!made){
		container.appendChild(showResult);
		made=true;
	}
	
  	//createBreakingBadCard(BreakingBad[0]);
	return false;

}


