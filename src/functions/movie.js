import Routes from '../Routes.json'

const processMovieURL = ( movie_id, full_url = false ) => {
    let output = full_url === true ?
        Routes.movie_page.path_without_params :
        "";
    output += process.env.REACT_APP_MOVIE_URL_ENCRYPT === "true" ?
        btoa( movie_id ):
        movie_id;
    return output;
}

const movie = {
    processMovieURL
}

export default movie;