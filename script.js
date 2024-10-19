function getweather(){
 const apiKey='YOUR_APY_KEY';
 const city= document.getElementById('city').ariaValueMax;
 if(!city){
    alert('Please enter a city');
    return;
 }
 const currentWeatherUrl='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';
 const forecastUrl='https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}';
 
}