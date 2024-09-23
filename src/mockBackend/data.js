const getRandomId = () => `${Math.random()}-${Math.random()}`;

const getRandomNumber = (min, range) =>
  Math.floor((Math.random() * 100 * range) / 100) + min;

const summaries = [
  "Rainy",
  "Cloudy",
  "Partly Cloudy",
  "Partly Sunny",
  "Mostly Sunny",
  "Sunny",
];

const randomFromList = (list) => list[getRandomNumber(0, list.length)];

const getTemp = () => {
  const avg = getRandomNumber(60, 30);
  return {
    avg,
    min: avg - 10,
    max: avg + 10,
  };
};

const getWeatherItem = () => ({
  id: getRandomId(),
  summary: randomFromList(summaries),
  temp: getTemp(),
  precip: getRandomNumber(0, 100),
});

export default {
  "/daily": Array.from({ length: 5 }, getWeatherItem),
  "/hourly": Array.from({ length: 24 }, getWeatherItem),
};
