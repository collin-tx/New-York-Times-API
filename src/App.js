import React, { Component } from 'react';
import ListItem from './Components/ListItems';
import './App.css';


export default class App extends Component {
	state = {
		websiteName: 'API Lab',
		data: []
	};

	componentWillMount = () => {
		this.getBooks();
	}

	getBooks = () => {
		const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=VIG56Dw6iVRhP7t27KAlHg9Hif6mSRg5`
		fetch(url).then(response => {
			return response.json();
		}).then(data => {
			console.log(data.results);
			this.setState( () => {
				return { data }
			})
		})
	}

	render() {
		const allBooks = this.state.data.results && this.state.data.results.books.map(book => {
			return (
				<li>
					<h2>{book.title}</h2>
				</li>
			)
		});
		return (
			<main className="p-5">
				<h1 className="text-light">{this.state.websiteName}</h1>
				<div className="row justify-content-md-center">
					<ul>
						{ this.state.data.results && allBooks }
					</ul>
				</div>
			</main>
		);
	}
}
