import React, { Component } from 'react'

export class ArticleList extends Component {
    
    showAbstract = (e) => {
       console.log(e.target.children);
       e.target.children[1].classList.remove('hide');
    }
    
    render() {
        return (
            <li className="list-group-item article-list">
                <h4>{this.props.title}</h4>
                <p>{this.props.byLine}</p>
                <b>{this.props.abstract}</b>
                <a href={this.props.link} target="_blank">read more</a>
            </li>
        )
    }
}

export default ArticleList
