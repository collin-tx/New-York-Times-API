import React, { Component } from 'react';
import Articles from './Components/Articles';
import Fiction from './Components/Fiction';
import Nonfiction from './Components/Nonfiction';
import Header from './Components/Header';
import './App.css';

export default class App extends Component {
	state = {
		websiteName: 'New York Times API'
	};

	

	render() {
		return (
			<main className="p-5">
				<Header />
				<h1 className="text-light">{this.state.websiteName}</h1>
				<div id="articles">
					<Articles />
				</div>
				<div>
					<h2 className="text-light mt-5">Books from the best-sellers list</h2>
					<h3 className="text-light m-5">Nonfiction</h3>
					<Nonfiction />
					<h3 className="text-light m-5">Fiction</h3>
					<Fiction />
				</div>
			</main>
		);
	}
}
