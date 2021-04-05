const zipInput = document.createElement("input")
zipInput.className = "zip"
zipInput.type ="text"
zipInput.placeholder = "Enter your zipcode"

const submit = document.createElement("button")
submit.className = "button"
submit.type = "submit"
submit.innerHTML = "Search"

const mainDiv = document.querySelector(".main-container")
mainDiv.append(zipInput, submit)

const getWeatherData = async ()=> {

    const zipValue = document.querySelector(".zip").value
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipValue}&appid=622d85fb1a656b0a3ab04b6a4f7fe706&units=imperial`)
    const formattedJson = await data.json()

    const city = document.createElement("h3")
    city.className = "city"
    city.innerHTML = "Location"
    const cityName = document.createElement("h5")
    cityName.innerHTML = formattedJson.name
    city.append(cityName)

    const temp = document.createElement("h3")
    temp.className = "temp"
    temp.innerHTML = "Feels Like"
    const tempValue = document.createElement("h5")
    tempValue.innerHTML = formattedJson.main.temp
    temp.append(tempValue)

    const maxTemp = document.createElement("h3")
    maxTemp.className = "maxTemp"
    maxTemp.innerHTML = "High"
    const maxTempValue = document.createElement("h5")
    maxTempValue.innerHTML = formattedJson.main.temp_max
    maxTemp.append(maxTempValue)

    const minTemp = document.createElement("h3")
    minTemp.className = "minTemp"
    minTemp.innerHTML = "Low"
    const minTempValue = document.createElement("h5")
    minTempValue.innerHTML = formattedJson.main.temp_min
    minTemp.append(minTempValue)

    const humidity = document.createElement("h3")
    humidity.className = "humidity"
    humidity.innerHTML = "Humidity"
    const humidityValue = document.createElement("h5")
    humidityValue.innerHTML = formattedJson.main.humidity
    humidity.append(humidityValue)

    const footer = document.createElement("footer")
    footer.innerHTML = "Created by Randy Chong"

    mainDiv.append(city, temp, maxTemp, minTemp, humidity, footer)
}

submit.addEventListener("click", ()=> getWeatherData())
