const API_KEY = '-2rHtX23l_bJmSZ2xwpmt1rGksEHfeW48dmuEJjsYZU';
const BASE_URL = 'https://api.unsplash.com/'

export const getData = async(url) => {
  const res = await fetch(url);
  const data = await res.json();
  
  return data
};

export const search = (query = 'spring', page = '1', perPage = 30, orientation = 'landscape') => {
  const url = `${BASE_URL}search/photos?query=${query}&page=${page}&per_page=${perPage}&orientation=${orientation}&client_id=${API_KEY}`;

  return getData(url)
}
