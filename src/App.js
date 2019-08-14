import React, { Component } from 'react';
import BookList from './Components/BookList';
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
				<BookList title={book.title} key={book.rank} 
				rank={book.rank} author={book.author} img={book.book_image} />
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
