
import React, { Component } from 'react';

class Album extends Component {
/*
	static propTypes = {
		details.name: React.PropTypes.string.isRequired

	}
*/


	render () {
		return(
      <li className="desc">
      	<div className="poster-wrap">
      		<img className="album-art" src=""/>
      	</div>
      	<span className="album-title">{this.props.details.name}</span>
      	<span className="album-artist">{this.props.details.artist}</span>
      	
      </li>

		);
	}
};

export default Album;