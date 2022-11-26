import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';

export default class SearchBar extends Component {
  state = {
    name: '',
  };

  onChange = e => {
    this.setState({ name: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.name.trim() === '') {
      toast.warn('Please enter image title  ', {
        position: 'top-center',
        autoClose: 2000,
        className: 'foo-bar',
      });
      return;
    }

    this.props.handleFormSubmit(this.state.name);
  };

  render() {
    return (
      <>
        {' '}
        <header className="Searchbar">
          <form onSubmit={this.onSubmit} className="SearchForm">
            <button type="submit" className="SearchForm-button">
              <AiOutlineSearch className="SearchIcon" />
            </button>

            <input
              placeholder="Search images and photos"
              className="SearchForm-input"
              type="text"
              value={this.state.name}
              name={this.state.name}
              onChange={this.onChange}
            />
          </form>
        </header>
      </>
    );
  }
}
