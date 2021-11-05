import './sass/main.scss';
import 'material-icons/iconfont/material-icons.css';
import { error, Stack } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import gallery from './templates/gallery.hbs';
import imageCard from './templates/image-card.hbs';
import * as basicLightbox from 'basiclightbox';
import ImagesApiService from './js/apiService'
// const basicLightbox = require('basiclightbox');



const refs = {
    searchForm: document.querySelector('.search-form'),
    galaryContainer: document.querySelector('.gallary-box'),
    loadMore: document.querySelector('[data-actions="load-more"]')
}
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', onLoadMore);

const imagesApiService = new ImagesApiService();

let searchQuery = '';

function onSearch(e) {
    e.preventDefault();
    getOptions();
};

function onLoadMore() {
    getOptions();
};

function getOptions() {
    const options = {
        searchQuery: refs.searchForm.elements.query.value,
        API_KEY: '24109020-be7a279fcfced9dd4ee1357c9',
        page: 1,
        perPage: 12
    };
    imagesApiService.fetchImages(options);  
}