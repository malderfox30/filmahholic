import React from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';
import TheMovieDB from '../../util/TheMovieDB';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      films: []
    };
    this.search = this.search.bind(this);
    this.video = this.video.bind(this);
  }

  search(term){
    TheMovieDB.search(term).then(films => {
      this.setState({films: films});
      console.log(this.state.films);
    });
  }

  video(id){
    TheMovieDB.video(id).then(key => {
      console.log(key);
      let url = `https://www.youtube.com/watch?v=${key}`
      window.open(url, '_blank');
    });
  }

  render(){
    return(
      <div>
        <h1 className='Header'>film<span className='Highlight'>ah</span>holic</h1>
        <div className='App'>
            <SearchBar search={this.search}/>
            <SearchResults films={this.state.films} video={this.video}/>
            <Footer />
        </div>
      </div>
    );
  }
}

export default App;
