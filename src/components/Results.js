
import React, { Component } from 'react';
import Album from './Album';

class Results extends Component {

  constructor () {
    super();
    this.state = {
      albums: [],
  //  loading: true
    }
  }




	render() {
		return (
			<div>
		    <ul id="albums" className="album-list">
		    	{console.log(this.props.albums)}    
		    	{this.props.albums.map( detail => <Album details={detail} key={detail.id}/> )}	    	
	      </ul>
			</div>

		);
	}
};

export default Results;

