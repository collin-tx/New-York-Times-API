import React, { Component } from 'react'

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
       console.log(this.state.value);
       this.setState({ value: '' })
   }

   getArticles = () => {
       const url = ``;
   }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.value} placeholder="Search for an article..." />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Articles
