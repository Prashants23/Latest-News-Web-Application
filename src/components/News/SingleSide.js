import React from 'react';



class SingleSide extends React.Component{
  render (){
    // var sourceName = this.props.item.source.name
    // var name = sourceName.filter(distinct);

    return(
      <div>
      <div className="divider"></div>
     
        <div className="section">
        <a href={this.props.item.url} target="_blank"><div style={{color:'orange'}}>
   
            <h5>{this.props.item.source.name}</h5>
          </div>  </a>
          <p>{this.props.item.title}</p>
        </div>
    
    </div>
    )
  }
}
export default SingleSide;
