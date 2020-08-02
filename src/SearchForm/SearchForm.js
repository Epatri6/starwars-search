import React from 'react';

export default class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  updateTerm = (term) => {
    this.setState({searchTerm: term});
  }

  render() {
    return (
      <form onSubmit={(e) => this.props.onSubmit(e, this.state.searchTerm)}>
        <label htmlFor="search-term">Search: </label>
        <input onChange={(e) => this.updateTerm(e.target.value)} type="text" id="search-term" name="search-term" placeholder="Luke Skywalker"/>
        <button type="submit">Search!</button>
      </form>
    );
  }
}