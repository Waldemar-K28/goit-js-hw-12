import axios from 'axios';

export async function getImagesByQuery(query, page = 1) {
  const API_KEY = '53051578-6e8f28ab3f0bf52fa1c2ada27';
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
