import React, { Component } from 'react';

export default class ListItem extends Component {

	render(props) {
		return (
			<li className="list-group-item text-left">
				<b>{this.props.title}</b>
			</li>
		);
	}
}
