import axios from 'axios';

export function getImagesByQuery(query) {
  const API_KEY = '53051578-6e8f28ab3f0bf52fa1c2ada27';
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then(response => {
    return response.data;
  });
}
