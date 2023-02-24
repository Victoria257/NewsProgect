import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { searchForm,input, readNewsDateContainer, notFound } from '../refs/index';
import { getStorage } from '../local-storage/index';
import { markUpPage } from '../markup/index';
import {
  newsId,
  LOCALSTORAGE_KEY,
  idArrayPars,
    getNewsArray,
    deletNews,
    addToFavorite,
    auditArrayNews,
    idDone,
idArray,
} from '../favorites/feature'

const logoNews = document.querySelector('.logo__wrapper');
searchForm.addEventListener('submit', handleSubmitSearchForm);
  input.blur();
idDone()
function handleSubmitSearchForm(event) {
  event.preventDefault();

  // logoNews.focus();

  const searchingNews = event.target.search.value.trim().toLowerCase();

  if (!searchingNews) {
    return makeInfoMessage('What would you like to find?');
  }

  searchFromCurrentPage(searchingNews);

  event.currentTarget.reset();
}

function searchFromCurrentPage(searchingNews) {
  let storageKey = 'readNews';

  readNewsDateContainer.innerHTML = '';

  const listNews = document.querySelector('.read-list-news');

  const newsArr = getStorage(storageKey);

  const desiredNews = newsArr.filter(news =>
    news.title.toLowerCase().includes(searchingNews)
  );

  showNothingNotFound(desiredNews);
  appendArticleMarkup(desiredNews, listNews);
  auditArrayNews(listNews)
  listNews.addEventListener('click', getNewsArray);
}

function appendArticleMarkup(desiredNews, container) {
  const cardSet = desiredNews
    .map(({ photo, title, abstract, date, url, category, id, idLenght }) =>
      markUpPage(photo, title, abstract, date, url, category, id, idLenght)
    )
    .join('');

  container.innerHTML = cardSet;
}

function showNothingNotFound(arr) {
  notFound.classList.add('not-found-hidden');

  if (arr.length === 0) {
    notFound.classList.remove('not-found-hidden');
  }
}

function makeInfoMessage(message) {
  if (window.matchMedia('(max-width: 767px)').matches) {
    return;
  }
  Notify.info(message);
}
