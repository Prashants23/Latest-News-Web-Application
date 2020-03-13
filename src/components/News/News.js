import React, { Component } from 'react';
import axios from 'axios'
import NewSingle from './NewSingle';
import Error from './Error';
// console.log(articles);

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false
    };
  }

  componentDidMount() {
    const apiUrl = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=97b9c873df4244b289358dda55781776`;

    axios.get(apiUrl)
      .then((response) => {
        console.log('response::',response)
        this.setState({
          news: response.data.articles
          
        })
      })
      .catch((error) => {
        this.setState({  
          error: true
        })
      });
  }
  // We can also make a function outside of the render function and call it in the render function.
  // renderItems() {
  //   if (!this.state.error) {
  //     return this.state.news.map((item) => (
  //       <NewSingle key={item.url} item={item} />
  //     ));
  //   } else {
  //     return <Error />
  //   }
  // }

  render() {
    return (
      <div className="row">
        {/* {this.renderItems()}  */}
        {/* TO DO: In the above way we can call the function inside the render function  */}
        {!this.state.error ? 
       this.state.news.map((item) => (
        <NewSingle key={item.url} item={item} />
      ))
    : <Error />
    }
      </div>
    );
  }
}

export default News;
