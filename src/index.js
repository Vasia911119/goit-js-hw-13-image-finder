// import { error, Stack } from '@pnotify/core';
// import '@pnotify/core/dist/BrightTheme.css';
// import * as basicLightbox from 'basiclightbox';
import './sass/main.scss';
import 'material-icons/iconfont/material-icons.css';
import gallery from './templates/gallery.hbs';
import ImagesApiService from './js/apiService'
import LoadMoreBtn from './js/loadMoreBtn';


const refs = {
    searchForm: document.querySelector('.search-form'),
    galaryContainer: document.querySelector('.gallary-box'),
}

const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-actions="load-more"]',
    hidden: true,
});
const goUpBtn = new LoadMoreBtn({
    selector: '[data-actions="go-up"]',
    hidden: true,
});
refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchGalary);


const imagesApiService = new ImagesApiService();

function onSearch(e) {
    e.preventDefault();
    imagesApiService.query = e.currentTarget.elements.query.value;
    if (imagesApiService.query === '') {
        return alert('Input text!');
    };
    loadMoreBtn.show();
    goUpBtn.show();
    imagesApiService.resetPage();
    clearGalary();
    fetchGalary();
};

function fetchGalary() {
    loadMoreBtn.disable();
    imagesApiService.fetchImages().then(hits => {
        appendGalaryMarkup(hits);
        loadMoreBtn.enable();
        scrollPage();
    });
}

function appendGalaryMarkup(hits) {
    if (hits.length > 0) {
        refs.galaryContainer.insertAdjacentHTML('beforeend', gallery(hits));
    } else {
        alert('Nothing found!');
    };
};

function clearGalary() {
    refs.galaryContainer.innerHTML = '';
    refs.searchForm.query.value = '';
};

function scrollPage() {
    setTimeout(
        () => loadMoreBtn.refs.button.scrollIntoView({ behavior: 'smooth', block: 'start' }),
        1000);
};