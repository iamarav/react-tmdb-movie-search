import Routes from '../Routes.json'

const processMovieURL = ( movie_id, full_url = false, domain=true ) => {
    let output = ""
    if( domain ){
        output += process.env.NODE_ENV === "production" ?
                Routes._settings.production_url:""
    }
    if( Routes._settings.hash_routing ){
        output += "/#"
    }
    output += full_url === true ?
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