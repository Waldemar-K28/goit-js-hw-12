import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const galleryContainer = document.querySelector('.gallery');

form.addEventListener('submit', event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements['search-text'].value.trim();
  if (searchQuery === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  clearGallery(galleryContainer);

  showLoader();

  getImagesByQuery(searchQuery)
    .then(data => {
      const images = data.hits;

      if (images.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(images, galleryContainer);
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      iziToast.error({
        title: 'Error',
        message:
          'Something went wrong with the request. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
  form.reset();
});
