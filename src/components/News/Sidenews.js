import React, { Component } from 'react';
import axios from 'axios';
import SingleSide from './SingleSide';
import Error from './Error';

class Sidenews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenewsData: [],
      error: false,
    };
  }

  componentDidMount() {
    const apiUrl = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=42222c8878c1409c805baf9714be7547`;

    axios.get(apiUrl)
      .then((response) => {
        console.log("Sideresponse",response)
        this.setState({
          sidenewsData: response.data.articles
        })
      })
      .catch((error) => {
        this.setState({
          error: true
        })
      });
  }

  // renderItems() {
  //   if (!this.state.error) {
  //     return this.state.sidenews.map((item) => (
  //       <SingleSide key={item.url} item={item} />
  //     ));
  //   } else {
  //     return <Error />
  //   }
  // }

  render() {
    
    return (
      <div>
        {/* {this.renderItems()} */}

        {!this.state.error ?
          this.state.sidenewsData.map((item) => (
            <SingleSide
              key={item.url}
              item={item} />
          ))
          : <Error />
        }
      </div>
    );
  }
}

export default Sidenews;
