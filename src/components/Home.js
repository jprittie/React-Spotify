
import React, { Component } from 'react';


class Home extends Component {
	render(){
		return (
			<div>
		    <ul id="albums" className="album-list">
		      <li className="desc">
		        <i className="material-icons icn-album">album</i>
		        Search for your favorite albums!
		      </li>
	      </ul>
			</div>
		);
	}
}

export default Home;