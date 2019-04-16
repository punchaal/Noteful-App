import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    render(){
        return(
        <div>
            <h4>Search:</h4>
            <input className = "Searchbox" type = "textbox" placeholder = "henry" value = {this.props.searchTerm}></input>
            <button className = "Search-button" onClick = {this.props.handleUpdate}>Search</button>
        </div>)
    }
}

export default SearchBox;