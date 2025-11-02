import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-button');

function createImageMarkup(image) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img class="gallery-image" src="${image.webformatURL}" alt="${
    image.tags
  }" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${image.likes.toLocaleString()}</p>
        <p class="info-item"><b>Views:</b> ${image.views.toLocaleString()}</p>
        <p class="info-item"><b>Comments:</b> ${image.comments.toLocaleString()}</p>
        <p class="info-item"><b>Downloads:</b> ${image.downloads.toLocaleString()}</p>
      </div>
    </li>
  `;
}

export function createGallery(images, container, shouldClear = false) {
  if (shouldClear) {
    container.innerHTML = '';
  }

  const galleryMarkup = images.map(createImageMarkup).join('');
  container.insertAdjacentHTML('beforeend', galleryMarkup);

  lightbox.refresh();
}

export function showLoader() {
  loader.classList.add('is-visible');
}

export function hideLoader() {
  loader.classList.remove('is-visible');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('is-hidden');
}
