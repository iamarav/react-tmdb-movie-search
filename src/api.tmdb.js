const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY || "";

const api = {
    get_movie: ( movie_id ) => {
        // if base64 encrypted then decrypt
        movie_id = process.env.REACT_APP_MOVIE_URL_ENCRYPT === "true" ? atob( movie_id ): movie_id
        return 'https://api.themoviedb.org/3/movie/' + movie_id + '?&api_key=' + TMDB_API_KEY
    },
    search_movie: ( movie_name ) => 'https://api.themoviedb.org/3/search/movie?query=' + movie_name + '&api_key=' + TMDB_API_KEY,
    get_image_500: ( image_name ) => 'https://image.tmdb.org/t/p/w500/' + image_name,
    get_image_original: ( image_name ) => "https://image.tmdb.org/t/p/original/" + image_name
}

export default api;