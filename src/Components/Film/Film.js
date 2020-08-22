import React from 'react';
import './Film.css';
import './no_preview.png';
class Film extends React.Component {
    constructor(props){
        super(props);
        this.video = this.video.bind(this);
    }

    video(){
        this.props.video(this.props.film.id);
    }
    
    render(){
        return(
            <div className='Film'>
                <div className="Film-header">
                    <div className='front'>
                        <img src={this.props.film.imgSrc} alt={this.props.film.title} />
                    </div>
                    <div className='side'>
                        <p className='Description'>{this.props.film.description}</p>
                    </div>
                </div>
                <div className='Film-information'>
                    <h2 className='Film-name'>{this.props.film.title} {this.props.film.year}</h2>
                    <p className='Film-genres'>Genres: {this.props.film.genres.join(', ')}</p>
                    <p className='Film-release'>Released date: {this.props.film.releaseDay}</p>
                    <button className='Film-trailer' onClick={this.video}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Trailer
                    </button>
                    <p className='Rating'>Rating<span className='Circle'>{this.props.film.rating}</span></p> 
                </div>
            </div>
        );
    }
}

export default Film;
