import React from 'react';
import './SearchResults.css';
import Film from '../Film/Film';

class SearchResults extends React.Component {
    constructor(props){
        super(props);
        this.video = this.video.bind(this);
    }

    video(id){
        this.props.video(id);
    }
    
    render(){
        return(
            <div className='SearchResult'>
                {
                    this.props.films.map(film => {
                        return(
                            <Film film={film} key={film.id} video={this.props.video}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default SearchResults;