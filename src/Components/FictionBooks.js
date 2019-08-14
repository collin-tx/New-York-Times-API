import React, { Component } from 'react'

export class FictionBooks extends Component {
    render() {
        return (
            <div className="book">
				<h2>{this.props.title}</h2>
				<p>{this.props.author}</p>
				<p>rank: {this.props.rank}</p>
				<img src={this.props.img} />
			</div>
        )
    }
}

export default FictionBooks
