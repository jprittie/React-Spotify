
import React, { Component } from 'react';


class MainContent extends Component {
	render () {
		return (
		 <div className="main-content clearfix">
		    <ul id="albums" className="album-list">
		      <li className="desc">
		        <i className="material-icons icn-album">album</i>
		        Search for your favorite albums!
		      </li>
	      </ul>
      </div>
		);
	}
};

export default MainContent;