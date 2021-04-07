function getDate() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const mm = monthNames[today.getMonth()];
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    console.log(today)
    const currentDate = document.querySelector(".current-date");
    currentDate.append(today);
}
getDate()

const getWeatherData = async ()=> {

    const zip = document.querySelector(".zipInput").value;
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=622d85fb1a656b0a3ab04b6a4f7fe706&units=imperial`);
    const formattedJson = await data.json();

    const city = document.querySelector(".location");
    city.innerHTML = formattedJson.name;

    const temp = document.querySelector(".temperature");
    temp.innerHTML = formattedJson.main.temp + " °F";

    const maxTemp = document.querySelector(".maxTemp");
    maxTemp.innerHTML = formattedJson.main.temp_max + " °F";

    const minTemp = document.querySelector(".minTemp");
    minTemp.innerHTML = formattedJson.main.temp_min + " °F";

    const humidity = document.querySelector(".humidity");
    humidity.innerHTML = formattedJson.main.humidity + "%";
}

const submit = document.querySelector(".submit");
submit.addEventListener("click", ()=> getWeatherData());
