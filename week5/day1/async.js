const getWeatherData = async ()=> {
    const data = await fetch(api.openweathermap.org/data/2.5/weather?q=Houston&appid=622d85fb1a656b0a3ab04b6a4f7fe706)
    const formattedJson = await data.json()
}