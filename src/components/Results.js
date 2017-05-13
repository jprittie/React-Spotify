
import React, { Component } from 'react';
import Single from './Single';

class Results extends Component {
	render() {
		return (
			<div>
		    <ul id="albums" className="album-list">
		    	<Album />
		    	<Album />		    	
		    	<Album />     		
		    	<Album />	
		    	<Album />
		    	<Album />	
		    	<Album />	
		    	<Album />
		    	<Album />		    	    	
	      </ul>
			</div>

		);
	}
};

export default Results;

// need pagination? what if there are more than nine album results?