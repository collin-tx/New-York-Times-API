import React, { Component } from 'react';

export default class BookList extends Component {
	
	render() {
		return (
			<li className="list-group-item text-left">
				<h2>{this.props.title}</h2>
				<p>{this.props.author}</p>
				<p>rank: {this.props.rank}</p>
				<img src={this.props.img} />
			</li>
		);
	}
}
