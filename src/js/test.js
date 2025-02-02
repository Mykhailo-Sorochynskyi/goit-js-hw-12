// import SimpleLightbox from 'simplelightbox';

// import 'simplelightbox/dist/simple-lightbox.min.css';

// import iziToast from 'izitoast';

// import 'izitoast/dist/css/iziToast.min.css';

// import {
//   fetchImages,
//   incrementPage,
//   pages,
//   resetPage,
// } from './js/pixabay-api.js';
// import {
//   renderImages,
//   showLoading,
//   hideLoading,
// } from './js/render-functions.js';

// const body = document.querySelector('body');
// // console.log(body);

// let lightbox = new SimpleLightbox('.list a', {
//   captions: true,
//   captionsData: 'alt',
//   captionDelay: 250,
//   loop: true,
// });

// let width;

// const form = document.querySelector('.form');
// const userInput = document.querySelector('.user-input');

// const btnPages = document.querySelector('.test1');

// function showBtn() {
//   btnPages.style.display = 'block';
//   console.log('Not bad');
// }

// export function closeBtn() {
//   btnPages.style.display = 'none';
//   console.log('Im, bad');
// }

// closeBtn();

// // btnPages.style.display = 'none';

// let userText;

// form.addEventListener('submit', async event => {
//   event.preventDefault();
//   if (userInput.value.trim()) {
//     userText = userInput.value.trim();
//     resetPage();
//   } else {
//     userText = undefined;
//   }

//   if (userText) {
//     showLoading();
//     // showBtn();
//     // btnPages.style.display = 'block';

//     await fetchImages(userText)
//       .then(data => {
//         // console.log(data);
//         update();

//         if (!renderImages(data, lightbox)) {
//           throw new Error('Test error!');

//           // showBtn();

//           // return;

//           // console.log(res);
//         } else {
//           // throw new Error('Test error!');
//           // if (!isEventAdded) {
//           //   // Добавляем обработчик, только если его нет
//           //   btnPages.addEventListener('click', handleLoadMore);
//           //   isEventAdded = true; // Помечаем, что обработчик добавлен
//           // }
//           showBtn();

//           return;
//           return;
//           // return renderImages(data, lightbox);
//         }
//       })
//       .catch(error => {
//         btnPages.style.display = 'none';
//         iziToast.error({
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//           messageSize: 18,
//           messageLineHeight: 30,
//           position: 'topRight',
//         });
//         hideLoading();
//       });
//   }
// });

// // let isEventAdded = false;

// btnPages.addEventListener('click', async () => {
//   incrementPage();
//   console.log(pages);
//   try {
//     console.log(width);

//     showLoading();
//     const data = await fetchImages(userText);
//     renderImages(data, lightbox);
//     setTimeout(() => {
//       window.scrollTo({
//         top: width,
//         behavior: 'smooth', // Параметр для плавной прокрутки
//       });
//     }, 300);
//     update();
//     reset();
//   } catch (error) {
//     console.log(error);
//   }
// });
// console.log(btnPages);

// // btnPages.removeEventListener('click', handleLoadMore); // Убираем возможный старый обработчик
// // btnPages.addEventListener('click', handleLoadMore); // Добавляем новый

// // async function handleLoadMore() {
// //   incrementPage(); // Увеличиваем номер страницы
// //   try {
// //     showLoading();
// //     const data = await fetchImages(userText);
// //     renderImages(data, lightbox); // Отображаем новые изображения
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }

// function update() {
//   const container = document.querySelector('.result');
//   const elem = document.querySelector('.list');
//   const rect = elem.getBoundingClientRect();

//   container.textContent = '';
//   for (const key in rect) {
//     if (typeof rect[key] !== 'function') {
//       // let para = document.createElement('p');
//       // para.textContent = `${key} : ${rect[key]}`;
//       // container.appendChild(para);
//       if (key === 'height') {
//         width = rect[key];
//       }
//     }
//   }
// }

// document.addEventListener('scroll', update);
// update();

// // console.log(width);