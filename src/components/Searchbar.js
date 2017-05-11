
import React, { Component } from 'react';

class Searchbar extends Component {
	render() {
		return (
      <form className="search-form">
        <label className="is-hidden" for="search">Search for music...</label>
        <input type="search" name="search" id="search" placeholder="Search for Music..."/>

        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>

		);
	}
};

export default Searchbar;