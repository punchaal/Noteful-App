import React, { Component } from 'react';
import './FilterBar.css';

class FilterBar extends Component {
        changeSelection(value){
                const filter = this.props.filterOptions.find(filterOptions=>filterOptions.name === value)
                this.props.changeSelection(filter)
        }
    render(){
            
          return(
              <div className = "Filter-selector">
                  <form>
                      <label htmlFor="filter-type">Print Type:</label>
                      <select id = "filter-type" name = "filter-type">
                          <option value = "All"
                                  onClick={(e) => this.props.handleFilterPrintChange(e.target.value)}>All</option>
                          <option value = "Books"
                                  onClick={(e) => this.props.handleFilterPrintChange(e.target.value)}>Books</option>
                          <option value ="Magazines"
                                  onClick={(e) => this.props.handleFilterPrintChange(e.target.value)}>Magazines</option>
                      </select>
                      <label htmlFor="filter-book-type">Book Type:</label>
                      <select id = "filter-type" name = "filter-type">
                          <option value = "no-filter"
                                  onChange={e => this.props.handleFilterChange(e.target.value)}>No filter</option>
                          <option value ="ebooks"
                                  onChange={e => this.props.handleFilterChange(e.target.value)}>Ebooks</option>
                          <option value ="free-ebooks"
                                  onChange={e => this.props.handleFilterChange(e.target.value)}>Free E-books</option>
                          <option value = "full"
                                  onChange={e => this.props.handleFilterChange(e.target.value)}>Full</option>
                          <option value = "paid-ebooks"
                                  onChange={e => this.props.handleFilterChange(e.target.value)}> Paid E-books</option>
                          <option value = "partial"
                                  onChange={e => this.props.handleFilterChange(e.target.value)}>Partial</option>
                      </select>
                  </form>
              </div>
          )
    }
}

export default FilterBar;