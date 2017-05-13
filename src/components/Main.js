
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Results from './Results';
import Single from './Single';


class Main extends Component {


	render () {
		return (
		  <main className="main-content clearfix">
		    <Switch>
		      <Route exact path='/' component={Home}/>
          <Route path="/search/:searchTerm" component={Results} />
          <Route path="/album/:albumId/:albumSlug" component={Single} />

		    </Switch>
      </main>
		);
	}
};

export default Main;


// also need Results, 404 and Loader routes?