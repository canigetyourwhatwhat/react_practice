import '../css/index.css';
import {randomInt, format} from './helper';

const temperatureElem = document.getElementById('temperature');
const preciElem = document.getElementById('precipitation');
const windElem = document.getElementById('wind');
const generateBtn = document.getElementById('generate');
const weathers = ['☀️', '⛅️', '☁️', '🌩️', '🌧️', '🌦️', '🌨️'];

generateBtn.addEventListener('click', () => {
  temperatureElem.innerText = format(randomInt(-20, 30));
  preciElem.innerText = weathers[Math.floor(Math.random() * weathers.length)];
  windElem.innerText = randomInt(0, 10);
});
