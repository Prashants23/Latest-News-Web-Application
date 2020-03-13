// import React from 'react';
import './NewSingle.css'
import * as React from "react";
import './Message'

const imageHeight = {
  height: '171px',
  weight: '256px'
}
const Card={
  height:'400px'
}

class NewSingle extends React.Component {
  

  render() {

    return (

      <div className="col s4 zoom">
        <div className="card" style={Card}>
          <div className="card-image" style={imageHeight}>
            <img src={this.props.item.urlToImage} alt={this.props.item.title} />
          </div>
          <div className="card-content">
            <p>{this.props.item.source.name}</p>
            {/* <a href={} target="_blank"></a> */}
          </div>
          <div className="card-content" >
            <p>{this.props.item.title}...</p>
          </div>
          <div className="card-action">
            <a href={this.props.item.url} target="_blank">Read Full article</a>
          </div>
        </div>
      </div>
    );
  }
}
export default NewSingle;
