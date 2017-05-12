
import React, { Component } from 'react';
import Single from './Single';

class Results extends Component {
	render() {
		return (
			<div>
		    <ul id="albums" className="album-list">
		    	<Single />
		    	<Single />
		    	<Single />
		    	<Single />
		    	<Single />	
		    	<Single />	
		    	<Single />
		    	<Single />	
		    	<Single />	     			    	
	      </ul>
			</div>

		);
	}
};

export default Results;

// need pagination? how else would it know how many Single components to render?