import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createImageMarkup(image) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${image.likes}</p>
        <p class="info-item"><b>Views:</b> ${image.views}</p>
        <p class="info-item"><b>Comments:</b> ${image.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${image.downloads}</p>
      </div>
    </li>
  `;
}

export function createGallery(images, container) {
  const galleryMarkup = images.map(createImageMarkup).join('');
  container.innerHTML = galleryMarkup;
  lightbox.refresh();
}

export function clearGallery(container) {
  container.innerHTML = '';
}

const loader = document.querySelector('.loader');
export function showLoader() {
  loader.classList.add('is-visible');
}
export function hideLoader() {
  loader.classList.remove('is-visible');
}
