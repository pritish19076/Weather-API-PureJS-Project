const body = document.body;
const myForm = document.getElementById('myForm');
const API="b257e4b4dfe8bb2ce49be0d46fe1a308";
const container=document.getElementsByClassName('weather-container')[0];
const upanim=document.getElementById('animate');
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
	if(maxTemp>30){
		body.style.backgroundImage = "url(summer.jpg)";
		body.style.color="white";

	}
	else if(maxTemp>20){
		body.style.backgroundImage = "url(autumn.jpg)";
		body.style.color="white";
	}
	else{
		body.style.backgroundImage = "url(snow.jpg)";
		body.style.color="black";
	}
	const Desc=weather[0]["description"];
	console.log(minTemp);
	if(!made){
		showResult = document.createElement('div');
		showResult.classList.add('weatherdetails');
	}
   
	showResult.innerHTML=`Temp: ${Temp} ° C <br>Min-Temp: ${minTemp} ° C <br>Max-Temp: ${maxTemp} ° C <br> Description: ${Desc}`
	
	
	if(!made){
		container.appendChild(showResult);
		made=true;
	}
	return false;

}


