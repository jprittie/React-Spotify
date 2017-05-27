
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
      	{this.props.details.name}
      </li>

		);
	}
};

export default Album;