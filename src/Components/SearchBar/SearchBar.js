import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.search = this.search.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleInput(event){
        this.setState({
            term: event.target.value
        })
        event.preventDefault();
    }

    search(){
        this.props.search(this.state.term);
    }

    handleKeyPress(event){
        if(event.key === 'Enter'){
            event.preventDefault();
            this.search();
        }
    }

    render(){
        return(
            <div className="SearchBar">
                <div className='SearchBar-fields'>
                    <input onChange={this.handleInput} onKeyPress={this.handleKeyPress} placeholder='Search for movies ...'></input>
                </div>
                <div className='SearchBar-submit'>
                    <button onClick={this.search}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Search
                    </button>
                </div>
               
            </div>
        );
    }
}

export default SearchBar;