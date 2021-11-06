const BASE_URL = 'https://pixabay.com/api';
export default class ImagesApiService {
    constructor() {
        this.searchQuery = '';
        this.API_KEY = '24109020-be7a279fcfced9dd4ee1357c9';
        this.page = 1;
        this.perPage = 12;
    }
    
    fetchImages() {

    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&key=${this.API_KEY}`;

        return fetch(url)
            .then(response => response.json())
            .then(({hits}) => {
                this.incrementPage();
                return hits;
        });
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }
    
    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        return this.searchQuery = newQuery;
    }
}