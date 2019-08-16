import React, { Component } from 'react';
import ArticleList from './ArticleList';

export class Articles extends Component {
   state = {
       data: [],
       loading: false,
       value: ''
   }

   handleChange = (e) => {
        let value = e.target.value;
        this.setState({ value })
   }

   handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value){
        this.setState( () => {
            return { loading: true }
        });
        this.getArticles();
    } else {
        document.getElementById('userInput').classList.add('error');
        setTimeout(function(){
            document.getElementById('userInput').classList.remove('error');
        }, 1200);
    }
   }

   getArticles = () => {
       const input = this.state.value;
       const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${input}&api-key=VIG56Dw6iVRhP7t27KAlHg9Hif6mSRg5`;
       fetch(url).then(response => {
           return response.json();
       }).then(data => {
           this.setState( () => {
               return { data, loading: false, value: '' }
           })
       });
       document.getElementById('articleUl').classList.remove('hide');
   }


    render() {
        const allArticles = this.state.data.response && this.state.data.response.docs.map((article, index) => {
            return <ArticleList title={article.headline.main} byLine={article.byline.original} 
            key={index} id={article.id} abstract={article.abstract} link={article.web_url} />
        });
        return (
            <div id="articles">
                <h2 className="text-light m-5">Search for NYT Articles</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.value} 
                    id='userInput' placeholder="Search for an article..." />
                    <button>Submit</button>
                </form>
                <div>
                    <p className="text-light">{this.state.loading && "Loading..."}</p>
                    <ul id="articleUl" className="list-group mt-3 hide">
                        {this.state.data && allArticles}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Articles
