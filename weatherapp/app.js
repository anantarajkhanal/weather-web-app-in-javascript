const apiKey = "2f61e7714da727f280e36420ecf0de7d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let inp = document.querySelector(".getinput"); 
const searchBut = document.querySelector(".search");
let weatherIcon = document.querySelector(".weathericon");



async function weatherapp(city)
{   
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp;

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display="none";
    
            if(data.weather[0].main == "Clouds")
            {
                weatherIcon.src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Clear")
            {
                weatherIcon.src = "images/clear.png";
            }
            else if(data.weather[0].main == "Drizzle")
            {
                weatherIcon.src = "images/drizzle.png";
            }
            else if(data.weather[0].main == "Rain")
            {
                weatherIcon.src = "images/rain.png";
            }
            else if(data.weather[0].main == "Mist")
            {
                weatherIcon.src = "images/mist.png";
            }
    }

}

searchBut.addEventListener("click" , ()=>{
weatherapp(inp.value);
})