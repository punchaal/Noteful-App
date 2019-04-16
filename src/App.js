import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox/SearchBox';
import FilterBar from './FilterBar/FilterBar';
import BookList from './BookList/BookList';

class App extends Component {
  constructor(props){
  super(props)
  this.state ={
    searchTerm:'',
    data:[],
    filterOption:'All',
    filterBookType:'No Filter'
    }
  }

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  updateFilterPrintType(e) {
    this.setState({
      filterOption:e.target.value
    })
  }

  updateFilterBookType(e){
    this.setState({
      filterBookType:e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Google Book Search</h1>
        </header>
        <main>
          <section className = "SearchBox">
            <SearchBox data = {this.state.data}
              searchTerm = {this.state.serchTerm}
              handleUpdate = {term=>this.updateSearchTerm(term)}
            />
          <section className = "FilterBar">
            <FilterBar data = {this.state}
              filterOptions = {this.state.filterOptions}
              handleFilterChange = {filterBookType=>this.updateFilterBookType(filterBookType)}
              handleFilterPrintChange ={filterOption=>this.updateFilterPrintType(filterOption)}
            />
            <section className = "BookList">
              <BookList data = {this.state}/>
            </section>
          </section>
          </section>
        </main>
      </div>
    );
  }

  componentDidMount() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=apple')
      .then(response => {
        if (response.ok){
          return response
        }
        throw new Error('Something went wrong')
      })
      .then(response=>response.json())
      .then(data => {
        this.setState({
          data
      })
    })
      .catch(err=>{
        this.setState({
          error:err.message
        });
  })
  }
}


export default App;
