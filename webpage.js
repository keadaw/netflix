const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5ff0e7ae3d7c92c5ad97ab380bfd49d7";
const IMG_URL = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=5ff0e7ae3d7c92c5ad97ab380bfd49d7&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const getMovies = async (url) => {
    const response = await fetch(url);
    const responseData = await response.json();

    console.log(responseData);

    showMovies(responseData.results);
}

const showMovies = (movies) => {
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview} = movie;

        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");

        movieElement.innerHTML = `
        <img 
            src="${IMG_URL + poster_path}" 
            alt="Failed to load image">
        <div class="movie_info">
            <h3>${title}</h3>
            <span>${vote_average}</span></div>;
            <div class="overview">${overview}
            <h3>Overview</h3></div>
        `
    main.appendChild(movieElement);
    });
};

getMovies(APIURL);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);
        search.value = "";
    }
})






























//const API_KEY = 'api_key=5ff0e7ae3d7c92c5ad97ab380bfd49d7';
//const BASE_URL = 'https://api.themoviedb.org/3';
//const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
//const IMG_URL = 'https://image.tmdb.org/t/p/w500';
//
//
//getMovies(API_URL);
//
//function getMovies(url) {
//    fetch(url).then(res => res.json()).then(data => {
//        console.log(data)
//        showMovies(data.results);
//    })
//
//}
//
//function showMovies(data) {
//    data.forEach(movie => {
//        const {title, poster_path} = movie;
//        const movieEl = document.createElement('div');
//        movieEl.classList.add('movie');
//        movieEl.innerHTML = `
//        
//        <img src="${IMG_URL+poster_path}" alt="">
//            <div class="movieinfo">
//                <h3>${title}</h3>
//            </div>
//        
//        
//        
//        
//        `
//    })
//}