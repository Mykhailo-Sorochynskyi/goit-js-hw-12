import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  fetchImages,
  incrementPage,
  pages,
  resetPage,
} from './js/pixabay-api.js';
import {
  renderImages,
  showLoading,
  hideLoading,
} from './js/render-functions.js';

const body = document.querySelector('body');
let lightbox = new SimpleLightbox('.list a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  loop: true,
});

let width;

const form = document.querySelector('.form');
const userInput = document.querySelector('.user-input');
const btnPages = document.querySelector('.test1');

function showBtn() {
  btnPages.style.display = 'block';
}

export function closeBtn() {
  btnPages.style.display = 'none';
}

closeBtn();

let userText;

form.addEventListener('submit', async event => {
  event.preventDefault();
  if (userInput.value.trim()) {
    userText = userInput.value.trim();
    resetPage();
    btnPages.removeEventListener('click', loadMoreImages);
  } else {
    userText = undefined;
  }

  if (userText) {
    showLoading();
    try {
      const data = await fetchImages(userText);
      if (!renderImages(data, lightbox)) {
        throw new Error('No images found!');
      } else {
        if (data.hits.length < 15) {
          closeBtn();
        } else {
          showBtn();
        }

        btnPages.addEventListener('click', loadMoreImages);
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: 'Oops, something went wrong. Please try again later.',
        messageSize: 18,
        messageLineHeight: 30,
        position: 'topRight',
      });
    } finally {
      hideLoading();
    }
  }
});

async function loadMoreImages() {
  incrementPage();
  try {
    showLoading();
    const data = await fetchImages(userText);
    if (data.hits.length === 0) {
      closeBtn();
      iziToast.warning({
        message: 'No more images to load.',
        messageSize: 18,
        messageLineHeight: 30,
        position: 'topRight',
      });
      return;
    }
    renderImages(data, lightbox);

    if (data.hits.length < 15) {
      closeBtn();
    } else {
      showBtn();
    }

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });

  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Oops, something went wrong. Please try again later.',
      messageSize: 18,
      messageLineHeight: 30,
      position: 'topRight',
    });
  } finally {
    hideLoading();
  }
}

function update() {
  const elem = document.querySelector('.list');
  const rect = elem.getBoundingClientRect();
  if (rect.height) {
    width = rect.height;
  }
};