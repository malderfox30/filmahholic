const apiKey = '5db45dd2';

const OMDB = {
    searchOMDB(term){
        return fetch(`http://www.omdbapi.com/?s=${term}&plot=full&apikey=${apiKey}`).then(response => {
            if(response.ok){
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => {
            console.log(networkError.message);
        }).then(jsonResponse => {
            return jsonResponse.Search.map(film => {
                    return{
                        id          : film.imdbID,
                        title       : film.Title,
                        year        : film.Year,
                        //runtime     : film.Runtime,
                        //releaseDay  : film.Released,
                        genres      : film.Type,
                        imgSrc      : film.Poster,
                        //description : film.Plot,
                        //rating      : film.imdbRating
                    };
            });
        })
    }
}

export default OMDB;