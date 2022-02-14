const API_KEY = '-2rHtX23l_bJmSZ2xwpmt1rGksEHfeW48dmuEJjsYZU';
const BASE_URL = 'https://api.unsplash.com/';

const requests = ['kitten', 'dogs', 'fox','cars', 'sea', 'summer', 'winter', 'autumn', 'spring', 'girls', 'computer', 'random', 'technologies', 'science', 'smile', 'city'];

const randomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
}

export const randomQuery = () => {
  const max = requests.length - 1;

  return requests[randomInt(max)];
}

export const randomPage = () => {
  const max = 15;
  return randomInt(max);
}

export const getData = async(url) => {
  const res = await fetch(url);
  const data = await res.json();
  
  return data
};

export const search = (query = 'spring', page = '1', perPage = 30, orientation = 'landscape') => {
  const url = `${BASE_URL}search/photos?query=${query}&page=${page}&per_page=${perPage}&orientation=${orientation}&client_id=${API_KEY}`;

  return getData(url)
}
