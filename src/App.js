import React, { Component } from 'react';
import BookList from './Components/BookList';
import './App.css';


export default class App extends Component {
	state = {
		websiteName: 'New York Times API',
		data: [],
		loading: false
	};

	componentWillMount = () => {
		this.getBooks();
	}

	getBooks = () => {
		this.setState( () => {
			return {
				loading: true
			}
		})
		const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=VIG56Dw6iVRhP7t27KAlHg9Hif6mSRg5`
		fetch(url).then(response => {
			return response.json();
		}).then(data => {
			console.log(data.results);
			this.setState( () => {
				return { data, loading: false }
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
				<p className="loading">{this.state.loading ? 'Loading...' : ''}</p>
				<div className="justify-content-md-center" id="books">
					
						{ this.state.data.results && allBooks }
					
				</div>
			</main>
		);
	}
}
