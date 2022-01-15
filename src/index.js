let weather = {
    "apiKey": "41b3fd066db6bc19b0d47cc9b8de170a",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function (data) {
        
    }
};