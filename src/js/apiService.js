export default class ImagesApiService {
    constructor() {
        
    }
    
    fetchImages({ searchQuery, page, perPage, API_KEY }) {
        

    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=${perPage}&key=${API_KEY}`;

    fetch(url).then(r => r.json()).then(console.log());
    }
}