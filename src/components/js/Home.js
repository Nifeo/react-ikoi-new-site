import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Content from './Contents';
import HomePage from './Contents';
import About from './Contents';
import Header from './Header';

class Home extends React.Component{
	render(){
		return (
			<Router>
			<div>
				<Header />
				<Content />
			</div>
			</Router>
		)
	}
	
}

export default Home;