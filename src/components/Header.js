
// import React from 'react';
import React, { Component } from 'react';
import Searchbar from './Searchbar';


class Header extends Component {

	static propTypes = {
		siteName: React.PropTypes.string.isRequired

	}


	render() {
		return (
		  <div className="main-header">
		    <div className="inner">
		      <h1 className="main-title">{this.props.siteName}</h1>
		      <Searchbar />
      	</div>
    	</div>
		);
	}
};

export default Header;