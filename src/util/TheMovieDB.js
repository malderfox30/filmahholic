const apiKey = '64cd41892fdef05b98e839364f94a25b';
var genresList = [];
const TheMovieDB = {
    getGenresList(){
        return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
                .then(response => {
                    if(response.ok){
                        return response.json();
                    }
                    throw new Error('Request failed!');
                }, networkError => {
                    console.log(networkError.message);
                }).then(jsonResponse => {
                    return jsonResponse.genres;
                })
    },

    search(term){
        if(!genresList.length){
            this.getGenresList().then(genres => genresList = genres);
            console.log(genresList);
        }
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${term}`).then(response => {
            if(response.ok){
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => {
            console.log(networkError.message);
        }).then(jsonResponse => {
            return jsonResponse.results.map(film => {
                    return{
                        id          : film.id,
                        title       : film.title,
                        year        : film.release_date? `(${film.release_date.substr(0,4)})`: '',
                        releaseDay  : film.release_date,
                        genres      : film.genre_ids.map(id => genresList.find(genre => genre.id === id).name),
                        imgSrc      : 'https://image.tmdb.org/t/p/w300' + film.poster_path,
                        description : film.overview,
                        rating      : film.vote_average,
                        video       : film.video
                    };
            });
        })
    },

    video(id){
        return fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`)
                .then(response => {
                    if(response.ok){
                        return response.json();
                    }
                    throw new Error('Request failed!');
                }, networkError => {
                    console.log(networkError.message);
                }).then(jsonResponse => {
                    return jsonResponse.results[0].key;
                })
    }
}

export default TheMovieDB;