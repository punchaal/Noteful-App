import React, { Component } from 'react';
import './BookList.css';
import BookListItem from './BookListItem'

class BookList extends Component {
    render(){
        return<div>
            <BookListItem data = {this.props.data}/>
        </div>
    }
}
export default BookList;