import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('#load-more-btn');
const loader = document.querySelector('.loader'); 

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="photo-card">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <div class="image-info">
            <p>
              <span class="label">Likes</span><br />
              <span class="value">${likes}</span>
            </p>
            <p>
              <span class="label">Views</span><br />
              <span class="value">${views}</span>
            </p>
            <p>
              <span class="label">Comments</span><br />
              <span class="value">${comments}</span>
            </p>
            <p>
              <span class="label">Downloads</span><br />
              <span class="value">${downloads}</span>
            </p>
          </div>
        </li>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}