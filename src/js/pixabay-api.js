import axios from 'axios';

// export function fetchImages(userInput) {
//   const keyApi = '46450573-9b5e41256c0ad0f1dd9121c30';
//   let url = `https://pixabay.com/api/?key=${keyApi}&q=${userInput}&image_type=photo&orientation=horizontal&safesearch=true`;

//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     } else {
//       return response.json();
//     }
//   });
// }

// import { pages } from './main';

export let pages = 1;

export let maxPhoto = 15;

export function incrementPage() {
  pages += 1;
}

export function resetPage() {
  pages = 1;
}

export async function fetchImages(userInput) {
  const keyApi = '46450573-9b5e41256c0ad0f1dd9121c30';
  let url = `https://pixabay.com/api/?key=${keyApi}&q=${userInput}&image_type=photo&orientation=horizontal&safesearch=true&page=${pages}&per_page=3`;

  const params = new URLSearchParams({
    key: keyApi,
    q: userInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: pages,
    per_page: maxPhoto,
  });

  const response = await axios.get(`https://pixabay.com/api/?${params}`);

  return response.data;
}