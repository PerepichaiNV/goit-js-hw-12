import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('#load-more-btn');

let currentPage = 1;
let searchQuery = '';
let totalHits = 0;

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.searchQuery.value.trim();
  if (!query) return;

  searchQuery = query;
  currentPage = 1;
  clearGallery();
  hideLoadMoreButton();

  try {
    showLoader();
    const data = await getImagesByQuery(searchQuery, currentPage);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.info({ message: 'No images found. Try again.' });
      return;
    }

    createGallery(data.hits);
    if (totalHits > currentPage * 15) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({ message: 'Error fetching images.' });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;

  try {
    showLoader();
    const data = await getImagesByQuery(searchQuery, currentPage);
    createGallery(data.hits);

    const cardHeight = document
      .querySelector('.gallery a')
      .getBoundingClientRect().height;

    window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });

    if (currentPage * 15 >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({ message: 'Error fetching more images.' });
  } finally {
    hideLoader();
  }
});
