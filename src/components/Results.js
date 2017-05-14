
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

	componentWillMount() {
		this.loadAlbums();
	}



  loadAlbums = (searchTerm = 'lemonade') => {
  	fetch(`https://api.spotify.com/v1/search?q=album:${searchTerm}&type=album`)
  	.then(data => data.json())
  	.then((albumResults) => {
  		console.log(albumResults);
  		this.setState({ albums: albumResults });
  	})
  	.catch(err => console.error(err));
  }




	render() {
		return (
			<div>
		    <ul id="albums" className="album-list">
		    	{console.log(this.props.albums)}    
		    	{/* {this.props.albums.map( detail => <Album details={detail} key={detail.id}/> )} */}	    	
	      </ul>
			</div>

		);
	}
};

export default Results;

