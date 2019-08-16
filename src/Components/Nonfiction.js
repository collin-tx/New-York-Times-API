import React, { Component } from 'react';
import NonfictionBooks from './NonfictionBooks';

export class Nonfiction extends Component {
    state = {
        data: [],
        loading: false
    }

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
			this.setState( () => {
				return { data, loading: false }
			})
		})
    }
    
    render() {
        const allBooks = this.state.data.results && this.state.data.results.books.map(book => {
			return (
				<NonfictionBooks title={book.title} key={book.rank} 
				rank={book.rank} author={book.author} img={book.book_image} 
				link={book.buy_links[0].url} />
			)
		});
        return (
            <div>
                <p className="loading">{this.state.loading ? 'Loading...' : ''}</p>
                <div className="justify-content-md-center books" id="nonfiction">
                    { this.state.data.results && allBooks }
                </div>
            </div>
        )
    }
}

export default Nonfiction
