import React from 'react';
import SearchForm from '../SearchForm/SearchForm';

const baseURL = "https://swapi-thinkful.herokuapp.com/api/";

export default class SearchScreen extends React.Component {

  search = (event, searchTerm) => {
    event.preventDefault();
    //Retrieve all possible sub-databases
    fetch(baseURL)
    .then(res => res.json())
    //For each sub-database, search for term and store results
    .then(res => this.buildResults(res, searchTerm));
  }

  buildResults = (databases, searchTerm) => {
    const results = Object.keys(databases).map(key => {
      return this.searchDatabase(key, searchTerm)
      .then(data => {
        return {
          name: key,
          results: data
        }
      })
      .catch(() => {
        return {
          name: key,
          results: []
        }
      })
    })
    Promise.all(results)
    .then((data) => data.map(d => console.log(d.results)));
  }

  searchDatabase = (database, searchTerm) => {
    return fetch(`${baseURL}${database}/?search=${searchTerm}`)
    .then(res => res.json())
    .then(res => { return res.results})
  }

  constructor(props) {
    super(props);
    this.state = {
      searchResults: {}
    }
  }

  render() {
    return (
      <SearchForm onSubmit={this.search}/>
    );
  }
}