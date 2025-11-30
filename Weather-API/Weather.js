function area(){
    let input=document.querySelector("input");
    let inputdata=input.value;
    //if there is no input then a pop up will appear.
    if(inputdata==""){
        alert("Empty Input");
        return;
    }
    dataFetching();
    async function dataFetching(){
    try {
        const API_ID= "9f945964f8c6c9b1ca1eeb8121a4f063";
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputdata}&appid=${API_ID}&units=metric`;
        let response = await fetch(url,{});
        let data = await response.json();
        console.log(data);
        dataRendering(data);
        
    } catch (error) {
        console.log(error);
        console.log("something is wrong");
        // when no city or data is found.
        Invalid(error);
        
        
    }
}
// after pressing enter the enter value is removed.
input.value="";
}

let main=document.querySelector("main");
function dataRendering(recieveData){
    main.innerHTML=
   `<div>
    <h1>${recieveData.name}, ${recieveData.sys.country}</h1>
    <h1>☁️${recieveData.main.temp} ℃</h1>
    <p>Temp_min: ${recieveData.main.temp_min}, Temp_max: ${recieveData.main.temp_max}
    <p>feels like ${recieveData.main.feels_like} ℃, ${recieveData.weather[0].description}, ${recieveData.weather[0].main}</p>
    <br>
    <p1>wind speed:${recieveData.wind.speed}m/s NNW, pressure:${recieveData.main.pressure}hPa</p1>
    <br>
    <br>
    <p1>Humidity:${recieveData.main.humidity}%,  Dew point:${recieveData.wind.gust}</p1>
    <br>
    <br>
    <p1>Visibility:${(recieveData.visibility)/1000}km</p1>
    </div>
   `
}
function Invalid(error){
    main.innerHTML=
    `<h1>City not found</h1>`
}