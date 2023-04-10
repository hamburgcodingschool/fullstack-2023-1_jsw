const resultBox = document.querySelector("#resultBox");
const lis = document.querySelectorAll("#leftContainer li");

for (let i = 0; i < lis.length; i++) {

    const cityLI = lis[i];

    cityLI.addEventListener("click", function() {
        
        const cityName = cityLI.innerHTML;
        
        getWeatherData(cityName);

    });

}

function getWeatherData(cityName) {
    // API_KEY should be something like:  4d52d3af12073627a3b3628990c2ddc0
    const API_KEY = "{{ API KEY FROM OPEN WEATHER MAP }}";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`

    fetch(URL)
        .then(function(response) {
            return response.json();
        }).then(function(result) {
            console.log(result);
            resultBox.innerHTML = `The weather in ${cityName} is ${result.main.temp}`;

        });
}