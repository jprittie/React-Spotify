
import React, { Component } from 'react';

class Album extends Component {
/*
	static propTypes = {
		details.name: React.PropTypes.string.isRequired

	}
*/
    
    // const image = labels ? labels.medium : 'notfound.jpg';
    // const cover = images ? images[1].url :
     

  render () {
    const { name, images } = this.props.details;
    const { artist } = this.props.details.artists[0].name; 

    return(
      <li className="desc">
      
	  <span className="album-title">{name}</span>
	  <span className="album-artist">{artist}</span>
        <div className="poster-wrap">
          <img className="album-art" src={images[1].url} alt={name}/>
        </div>
      	
      </li>

     );
  }
};

export default Album;