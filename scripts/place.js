document.addEventListener("DOMContentLoaded", () => {
    const modified = document.getElementById("lastModified");
    if (modified) {
        modified.textContent = "Last modified: " + document.lastModified;
    }
});

const temperature = 45;
const condition = 'Partly Cloudy'
const windSpeed = 6;
let windChillTemp = 0;

function calcWindChill(temp, windspeed) {

    temp = temperature;
    windspeed = windSpeed;

    if (temp <= 50 && windspeed > 5) {

        windChillTemperature = 35.74 + (.6215 * temp) - (35.75 * Math.pow(windspeed, .16)) + ((.4275 * temp * Math.pow(windspeed, .16)));
        return windChillTemperature
    }
    else {
        return temp
    }
}

function displayWeather() {

    windChillTemp = calcWindChill(temperature, windSpeed);
    windChillTempUpdated = windChillTemp.toFixed(1);
    const card = document.querySelector(`#weather`);
    const temp = document.createElement('li');
    const conditions = document.createElement('li');
    const wind = document.createElement('li');
    const windchill = document.createElement('li');

    temp.innerHTML = `<strong>Temperature: </strong>${temperature}°F`;
    conditions.innerHTML = `<strong>Conditions:</strong> ${condition}`;
    wind.innerHTML = `<strong>Wind: </strong>${windSpeed} MPH`;
    windchill.innerHTML = `<strong>WindChill: </strong>${windChillTempUpdated}`;

    card.appendChild(temp);
    card.appendChild(conditions);
    card.appendChild(wind);
    card.appendChild(windchill);

}

displayWeather();