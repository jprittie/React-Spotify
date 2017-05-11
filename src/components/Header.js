
// import React from 'react';
import React, { Component } from 'react';
import Searchbar from './Searchbar';


class Header extends Component {
	render() {
		return (
		  <div className="main-header">
		    <div className="inner">
		      <h1 className="main-title">AlbumSearch</h1>
		      <Searchbar />
      	</div>
    	</div>
		);
	}
};

export default Header;