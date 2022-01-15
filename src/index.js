let weather = {
    "apiKey": "41b3fd066db6bc19b0d47cc9b8de170a",
    fetchWeather: function () {
        fetch(
            ""
        ).then((response) => response.json())
        .then((data) => console.log(data));
    },
};