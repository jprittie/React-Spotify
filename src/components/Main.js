
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';

class Main extends Component {
	render () {
		return (
		  <main className="main-content clearfix">
		    <Switch>
		      <Route exact path='/' component={Home}/>

		    </Switch>
      </main>
		);
	}
};

export default Main;


// also need Results, 404 and Loader routes?